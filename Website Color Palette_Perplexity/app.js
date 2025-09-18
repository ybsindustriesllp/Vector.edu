// Tactical Operations Dashboard JavaScript
class TacticalDashboard {
    constructor() {
        this.state = {
            currentSection: 'command',
            isOnline: true,
            startTime: Date.now() - (72 * 60 * 60 * 1000 + 14 * 60 * 1000 + 33 * 1000), // 72:14:33 ago
            activeAgents: 347,
            ongoingMissions: 23,
            missionChart: null
        };
        
        this.data = {
            navigation: {
                title: "TACTICAL OPS",
                subtitle: "v2.17 CLASSIFIED",
                breadcrumb: "TACTICAL COMMAND / OVERVIEW",
                lastUpdate: "09/08/2025 20:00 UTC",
                menuItems: [
                    {id: "command", name: "COMMAND CENTER", icon: "⌘", active: true},
                    {id: "network", name: "AGENT NETWORK", icon: "🕸", active: false},
                    {id: "operations", name: "OPERATIONS", icon: "⚡", active: false},
                    {id: "intelligence", name: "INTELLIGENCE", icon: "🔍", active: false},
                    {id: "systems", name: "SYSTEMS", icon: "⚙", active: false}
                ]
            },
            missionActivity: {
                chartData: [
                    {date: "Jan 25", successful: 15, failed: 8},
                    {date: "Feb 25", successful: 18, failed: 12},
                    {date: "Mar 25", successful: 22, failed: 10},
                    {date: "Apr 25", successful: 25, failed: 15},
                    {date: "May 25", successful: 28, failed: 18},
                    {date: "Jun 25", successful: 32, failed: 14},
                    {date: "Jul 25", successful: 35, failed: 20}
                ]
            },
            activityLog: [
                {time: "27/08/2025 09:25", agent: "jules_dawn", action: "completed undercover mission in Berlin with agent", target: "dark_high"},
                {time: "18/08/2025 08:12", agent: "dragon_v310", action: "extracted high-value target in Cairo", target: null},
                {time: "15/08/2025 23:56", agent: "eagle_shadow", action: "lost communication in Havana", target: null},
                {time: "12/08/2025 14:31", agent: "phantom_boxer", action: "initiated surveillance in Tokyo", target: null},
                {time: "09/08/2025 19:45", agent: "void_switch", action: "compromised security in Moscow with agent", target: "dark_matrix"}
            ]
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.initializeChart();
        this.startRealTimeUpdates();
        this.updateLastSeen();
        console.log('Tactical Dashboard initialized');
    }
    
    bindEvents() {
        // Navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavigation(e));
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyNavigation(e));
        
        // Window resize
        window.addEventListener('resize', () => this.handleResize());
        
        // Page visibility change
        document.addEventListener('visibilitychange', () => this.handleVisibilityChange());
    }
    
    handleNavigation(e) {
        e.preventDefault();
        const link = e.currentTarget;
        const section = link.dataset.section;
        
        if (section && section !== this.state.currentSection) {
            // Remove active class from current link
            document.querySelector('.nav-link.active').classList.remove('active');
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Update state
            this.state.currentSection = section;
            
            // Add visual feedback
            this.addClickFeedback(link);
            
            // Update breadcrumb
            this.updateBreadcrumb(section);
            
            console.log(`Navigation: Switched to ${section}`);
        }
    }
    
    updateBreadcrumb(section) {
        const breadcrumb = document.querySelector('.breadcrumb span');
        const sectionNames = {
            command: 'COMMAND CENTER / OVERVIEW',
            network: 'AGENT NETWORK / STATUS',
            operations: 'OPERATIONS / ACTIVE',
            intelligence: 'INTELLIGENCE / REPORTS',
            systems: 'SYSTEMS / MONITORING'
        };
        
        breadcrumb.textContent = `TACTICAL ${sectionNames[section] || 'COMMAND / OVERVIEW'}`;
    }
    
    addClickFeedback(element) {
        element.style.transform = 'translateX(4px)';
        element.style.transition = 'transform 0.15s ease';
        setTimeout(() => {
            element.style.transform = 'translateX(0)';
        }, 150);
    }
    
    initializeChart() {
        const ctx = document.getElementById('mission-chart');
        if (!ctx) return;
        
        this.state.missionChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.data.missionActivity.chartData.map(item => item.date),
                datasets: [
                    {
                        label: 'Successful Missions',
                        data: this.data.missionActivity.chartData.map(item => item.successful),
                        borderColor: '#FF3B30',
                        backgroundColor: 'rgba(255, 59, 48, 0.1)',
                        borderWidth: 2,
                        fill: false,
                        tension: 0.4,
                        pointBackgroundColor: '#FF3B30',
                        pointBorderColor: '#FF3B30',
                        pointRadius: 4,
                        pointHoverRadius: 6
                    },
                    {
                        label: 'Failed Missions',
                        data: this.data.missionActivity.chartData.map(item => item.failed),
                        borderColor: '#FFFFFF',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        fill: false,
                        tension: 0.4,
                        pointBackgroundColor: '#FFFFFF',
                        pointBorderColor: '#FFFFFF',
                        pointRadius: 3,
                        pointHoverRadius: 5
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: '#333333',
                            lineWidth: 1
                        },
                        ticks: {
                            color: '#8A8A8A',
                            font: {
                                family: 'Geist Mono',
                                size: 10
                            }
                        }
                    },
                    y: {
                        grid: {
                            color: '#333333',
                            lineWidth: 1
                        },
                        ticks: {
                            color: '#8A8A8A',
                            font: {
                                family: 'Geist Mono',
                                size: 10
                            }
                        }
                    }
                },
                elements: {
                    point: {
                        hoverBorderWidth: 2
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }
    
    startRealTimeUpdates() {
        // Update uptime every second
        setInterval(() => this.updateUptime(), 1000);
        
        // Update last seen timestamp every 30 seconds
        setInterval(() => this.updateLastSeen(), 30000);
        
        // Simulate random data updates every 5 seconds
        setInterval(() => this.simulateDataUpdates(), 5000);
        
        // Add new activity log entries periodically
        setInterval(() => this.addNewLogEntry(), 15000);
    }
    
    updateUptime() {
        const uptimeElement = document.getElementById('uptime');
        if (!uptimeElement) return;
        
        const currentTime = Date.now();
        const uptime = currentTime - this.state.startTime;
        
        const hours = Math.floor(uptime / (1000 * 60 * 60));
        const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((uptime % (1000 * 60)) / 1000);
        
        const formattedUptime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        uptimeElement.textContent = formattedUptime;
    }
    
    updateLastSeen() {
        const lastUpdateElement = document.getElementById('last-update');
        if (!lastUpdateElement) return;
        
        const now = new Date();
        const formatted = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} UTC`;
        lastUpdateElement.textContent = formatted;
    }
    
    simulateDataUpdates() {
        // Randomly update agent count
        if (Math.random() > 0.7) {
            const change = Math.floor(Math.random() * 6) - 3; // -3 to +3
            this.state.activeAgents = Math.max(300, Math.min(400, this.state.activeAgents + change));
            
            const agentsElement = document.getElementById('agents-active');
            if (agentsElement) {
                agentsElement.textContent = `${this.state.activeAgents} ACTIVE`;
                this.addUpdateAnimation(agentsElement);
            }
        }
        
        // Randomly update mission count
        if (Math.random() > 0.8) {
            const change = Math.floor(Math.random() * 4) - 2; // -2 to +2
            this.state.ongoingMissions = Math.max(15, Math.min(30, this.state.ongoingMissions + change));
            
            const missionsElement = document.getElementById('missions-ongoing');
            if (missionsElement) {
                missionsElement.textContent = `${this.state.ongoingMissions} ONGOING`;
                this.addUpdateAnimation(missionsElement);
            }
        }
    }
    
    addUpdateAnimation(element) {
        element.classList.add('pulse');
        setTimeout(() => {
            element.classList.remove('pulse');
        }, 2000);
    }
    
    addNewLogEntry() {
        const activityLog = document.getElementById('activity-log');
        if (!activityLog) return;
        
        const agents = ['shadow_wolf', 'crimson_blade', 'steel_phoenix', 'void_hunter', 'ghost_viper'];
        const actions = [
            'initiated secure contact in',
            'completed extraction from',
            'established surveillance in',
            'compromised target facility in',
            'lost signal in'
        ];
        const locations = ['Tokyo', 'Berlin', 'Moscow', 'Cairo', 'Istanbul', 'Bangkok', 'London'];
        
        const randomAgent = agents[Math.floor(Math.random() * agents.length)];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        
        const now = new Date();
        const timestamp = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        // Create new log entry
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry fade-in';
        logEntry.innerHTML = `
            <span class="log-time">${timestamp}</span>
            <span class="log-text">Agent <span class="agent-${randomAgent}">${randomAgent}</span> ${randomAction} ${randomLocation}</span>
        `;
        
        // Add to top of log
        activityLog.insertBefore(logEntry, activityLog.firstChild);
        
        // Remove oldest entries to maintain reasonable length
        while (activityLog.children.length > 8) {
            activityLog.removeChild(activityLog.lastChild);
        }
    }
    
    handleKeyNavigation(e) {
        if (e.ctrlKey || e.metaKey) {
            const navItems = document.querySelectorAll('.nav-link');
            const currentIndex = Array.from(navItems).findIndex(item => item.classList.contains('active'));
            
            switch(e.key) {
                case 'ArrowUp':
                    e.preventDefault();
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : navItems.length - 1;
                    navItems[prevIndex].click();
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    const nextIndex = currentIndex < navItems.length - 1 ? currentIndex + 1 : 0;
                    navItems[nextIndex].click();
                    break;
            }
        }
        
        // ESC to blur focused elements
        if (e.key === 'Escape') {
            document.activeElement.blur();
        }
    }
    
    handleResize() {
        if (this.state.missionChart) {
            this.state.missionChart.resize();
        }
    }
    
    handleVisibilityChange() {
        if (document.hidden) {
            console.log('Dashboard hidden - reducing update frequency');
        } else {
            console.log('Dashboard visible - resuming normal updates');
            this.updateLastSeen();
        }
    }
    
    // Public methods for external interaction
    switchSection(sectionId) {
        const link = document.querySelector(`[data-section="${sectionId}"]`);
        if (link) {
            link.click();
        }
    }
    
    getSystemStatus() {
        return {
            online: this.state.isOnline,
            uptime: Date.now() - this.state.startTime,
            activeAgents: this.state.activeAgents,
            ongoingMissions: this.state.ongoingMissions
        };
    }
    
    // Simulate system alerts
    showAlert(type, message) {
        console.log(`${type.toUpperCase()} ALERT: ${message}`);
        // In a real implementation, this would show a toast or modal
        
        // Add visual indicator
        const statusIndicator = document.querySelector('.status-indicator');
        if (statusIndicator && type === 'warning') {
            statusIndicator.style.backgroundColor = '#FFD700';
            setTimeout(() => {
                statusIndicator.style.backgroundColor = '#00FF41';
            }, 3000);
        }
    }
}

// Utility functions
class TacticalUtils {
    static formatTimestamp(date) {
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    }
    
    static generateAgentCode() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        return `G-${numbers[Math.floor(Math.random() * numbers.length)]}${numbers[Math.floor(Math.random() * numbers.length)]}${numbers[Math.floor(Math.random() * numbers.length)]}${letters[Math.floor(Math.random() * letters.length)]}`;
    }
    
    static getRandomAgentName() {
        const adjectives = ['SHADOW', 'CRIMSON', 'STEEL', 'VOID', 'GHOST', 'DARK', 'SILVER', 'IRON'];
        const nouns = ['WOLF', 'BLADE', 'PHOENIX', 'HUNTER', 'VIPER', 'EAGLE', 'SPIDER', 'RAVEN'];
        return `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`;
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing Tactical Dashboard...');
    window.tacticalDashboard = new TacticalDashboard();
    
    // Add some demo alerts after initialization
    setTimeout(() => {
        window.tacticalDashboard.showAlert('info', 'System diagnostics completed');
    }, 3000);
    
    setTimeout(() => {
        window.tacticalDashboard.showAlert('warning', 'Elevated threat level detected in sector 7');
    }, 10000);
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    console.log('Tactical Dashboard shutting down...');
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TacticalDashboard, TacticalUtils };
}