#!/bin/bash

# Ensure proper permissions for terminal devices
chmod 666 /dev/ptmx
chmod 666 /dev/null
chmod 666 /dev/zero
chmod 666 /dev/random
chmod 666 /dev/urandom

# Ensure proper tmp directory permissions
chmod 1777 /tmp

# Start dbus system bus
mkdir -p /var/run/dbus
dbus-uuidgen > /var/lib/dbus/machine-id
chown messagebus:messagebus /var/run/dbus
dbus-daemon --system --fork

# Start xrdp services
service xrdp start
service xrdp-sesman start

# Keep container alive and show logs
echo "======================================================"
echo "✅ Remote Desktop Server started successfully!"
echo "➡ Connect using RDP to: localhost:3389"
echo "👤 Username: student"
echo "🔑 Password: student123"
echo ""
echo "💻 VS Code, Python3, Node.js, Firefox available"
echo "======================================================"
tail -f /var/log/xrdp.log /var/log/xrdp-sesman.log
