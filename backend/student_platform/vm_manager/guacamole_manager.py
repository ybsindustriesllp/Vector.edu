import docker
import requests
import time
from django.conf import settings

class GuacamoleManager:
    def __init__(self):
        self.base_url = settings.GUACAMOLE_URL
        self.username = settings.GUACAMOLE_USER
        self.password = settings.GUACAMOLE_PASSWORD
        self.docker_client = docker.from_env()
    
    def get_auth_token(self):
        """Get authentication token from Guacamole"""
        try:
            response = requests.post(
                f"{self.base_url}/guacamole/api/tokens",
                data={"username": self.username, "password": self.password},
                timeout=30
            )
            response.raise_for_status()
            return response.json()['authToken']
        except Exception as e:
            raise Exception(f"Guacamole authentication failed: {str(e)}")
    
    def create_connection(self, auth_token, vm_name, vm_ip):
        """Create Guacamole connection"""
        connection_data = {
            "parentIdentifier": "ROOT",
            "name": vm_name,
            "protocol": "rdp",
            "parameters": {
                "hostname": vm_name,
                "port": "3389",
                "username": "student",
                "password": "student123",
                "security": "any",
                "ignore-cert": "true",
                "width": "1024",
                "height": "768",
                "dpi": "96"
            },
            "attributes": {
                "max-connections": "1",
                "max-connections-per-user": "1"
            }
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/guacamole/api/session/data/postgresql/connections",
                headers={
                    "Content-Type": "application/json",
                    "Guacamole-Token": auth_token
                },
                json=connection_data,
                timeout=30
            )
            response.raise_for_status()
            return response.json()['identifier']
        except Exception as e:
            raise Exception(f"Failed to create connection: {str(e)}")
    
    def ensure_network_exists(self):
        """Ensure the Docker network exists"""
        try:
            print(f"Checking if network '{settings.DOCKER_NETWORK}' exists...")
            
            # Check if our specific network exists
            networks = self.docker_client.networks.list(names=[settings.DOCKER_NETWORK])
            
            if not networks:
                # Try to find any network with 'guacnetwork' in the name
                all_networks = self.docker_client.networks.list()
                for net in all_networks:
                    if 'guacnetwork' in net.name:
                        print(f"Found similar network: {net.name}")
                        # Update settings to use this network
                        return net.name
                
                raise Exception(f"Network '{settings.DOCKER_NETWORK}' not found and no similar networks found")
            else:
                print(f"Network '{settings.DOCKER_NETWORK}' exists.")
                return settings.DOCKER_NETWORK
                
        except Exception as e:
            raise Exception(f"Failed to ensure network exists: {str(e)}")
    
    def get_student_image(self):
        """Get the student desktop image name"""
        try:
            # Check if our custom image exists
            try:
                self.docker_client.images.get('guacamole-postgres-student-desktop')
                return 'guacamole-postgres-student-desktop'  # Use our custom image
            except docker.errors.ImageNotFound:
                # If custom image doesn't exist, use a pre-built image
                print("Custom student desktop image not found. Using alternative image...")
                return 'danielguerra/ubuntu-xrdp'  # Pre-built image with RDP
                
        except Exception as e:
            print(f"Image check failed: {e}. Using fallback image.")
            return 'danielguerra/ubuntu-xrdp'
    
    def launch_student_vm(self, session_id, user_id):
        """Launch Docker container and create Guacamole connection"""
        container = None
        try:
            # Ensure network exists and get the correct network name
            network_name = self.ensure_network_exists()
            print(f"Using network: {network_name}")
            
            # Get student image
            student_image = self.get_student_image()
            print(f"Using image: {student_image}")
            
            # Launch Docker container
            container = self.docker_client.containers.run(
                student_image,
                detach=True,
                network=network_name,  # Use the actual network name
                name=f'student-{session_id}',
                mem_limit='2g',
                cpu_quota=100000,
                remove=True,
                environment={
                    'USER': 'student',
                    'PASSWORD': 'student123'
                }
            )
            
            # Wait for container to start and get IP
            time.sleep(8)  # Give more time for container to start RDP service
            container.reload()
            
            network_settings = container.attrs['NetworkSettings']['Networks']
            if network_name not in network_settings:
                # Try to find the network with any case or similar name
                for net_key in network_settings.keys():
                    if network_name.lower() in net_key.lower():
                        container_ip = network_settings[net_key]['IPAddress']
                        break
                else:
                    raise Exception(f"Container not connected to {network_name} network")
            else:
                container_ip = network_settings[network_name]['IPAddress']
            
            if not container_ip:
                raise Exception("Failed to get container IP address")
            
            print(f"Container IP: {container_ip}")
            
            # Get Guacamole auth token
            auth_token = self.get_auth_token()
            
            # Create Guacamole connection
            connection_id = self.create_connection(
                auth_token, 
                f"Student-{session_id}", 
                container_ip
            )
            
            # Generate client URL
            client_url = f"{self.base_url}/guacamole/#/client/{connection_id}?token={auth_token}"
            
            return {
                'container_id': container.id,
                'connection_id': connection_id,
                'guacamole_url': client_url,
                'container_ip': container_ip,
                'image_used': student_image
            }
            
        except Exception as e:
            # Cleanup on error
            if container:
                try:
                    container.stop()
                except:
                    pass
            raise Exception(f"Failed to launch VM: {str(e)}")
    
    def stop_vm(self, container_id):
        """Stop Docker container"""
        try:
            container = self.docker_client.containers.get(container_id)
            container.stop()
            return True
        except:
            return False  # Container might already be stopped