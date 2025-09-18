// Application data with VM integration
const appData = {
  currentUser: {
    id: 1,
    name: "Alex Kumar",
    role: "student",
    specialization: "Full Stack Development",
    team: "Team Alpha",
    position: "Lead Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    skills: ["React", "Node.js", "MongoDB", "Python"],
    progress: 75,
    badges: ["Sprint Champion", "Code Quality", "Team Player"],
    projects: 3,
    certificates: 2,
    totalPoints: 2380
  },
  projects: [
    {
      id: 1,
      title: "E-Learning Platform",
      description: "A comprehensive online learning management system with video streaming, assessments, and progress tracking.",
      team: "Team Alpha",
      phase: "Development",
      progress: 65,
      startDate: "2024-06-15",
      endDate: "2024-09-15",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      status: "In Progress",
      tasks: 24,
      completedTasks: 16,
      upcomingDeadline: "Sprint 3 Demo - Aug 25",
      priority: "High",
      vm: {
        id: "vm-elearn-001",
        status: "Running",
        specs: {
          cpu: "4 vCPUs",
          memory: "8 GB RAM",
          storage: "50 GB SSD",
          os: "Ubuntu 22.04 LTS"
        },
        usage: {
          cpu: 45,
          memory: 62,
          storage: 35
        },
        uptime: "2h 15m",
        lastAccessed: "2024-08-19T16:30:00Z",
        environment: {
          node_version: "18.17.0",
          npm_version: "9.6.7",
          mongodb: "7.0.2",
          docker: "24.0.5",
          git: "2.34.1"
        },
        ports: {
          frontend: 3000,
          backend: 5000,
          database: 27017
        },
        collaborators: ["Alex Kumar", "Raj Patel", "Maya Singh", "Priya Sharma"],
        sessionTime: "2h 15m",
        totalSessions: 47
      }
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Enterprise-grade task management with team collaboration features.",
      team: "Team Beta",
      phase: "Testing",
      progress: 85,
      startDate: "2024-05-20",
      endDate: "2024-08-20",
      technologies: ["Angular", "Python", "PostgreSQL"],
      status: "In Progress",
      tasks: 18,
      completedTasks: 15,
      upcomingDeadline: "Final Testing - Aug 18",
      priority: "Medium",
      vm: {
        id: "vm-task-002",
        status: "Stopped",
        specs: {
          cpu: "2 vCPUs",
          memory: "4 GB RAM",
          storage: "30 GB SSD",
          os: "Ubuntu 22.04 LTS"
        },
        usage: {
          cpu: 0,
          memory: 0,
          storage: 42
        },
        uptime: "0m",
        lastAccessed: "2024-08-18T14:20:00Z",
        environment: {
          python_version: "3.11.4",
          angular_version: "16.2.0",
          postgresql: "15.3",
          docker: "24.0.5",
          git: "2.34.1"
        },
        ports: {
          frontend: 4200,
          backend: 8000,
          database: 5432
        },
        collaborators: ["Team Beta Members"],
        sessionTime: "0m",
        totalSessions: 23
      }
    }
  ],
  users: [
    {
      id: 1,
      name: "Alex Kumar",
      role: "student",
      specialization: "Full Stack Development",
      team: "Team Alpha",
      position: "Lead Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      skills: ["React", "Node.js", "MongoDB", "Python"],
      progress: 75,
      badges: ["Sprint Champion", "Code Quality", "Team Player"],
      projects: 3,
      certificates: 2,
      status: "online"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "student",
      specialization: "QA Automation",
      team: "Team Alpha",
      position: "Quality Analyst",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b890?w=150&h=150&fit=crop&crop=face",
      skills: ["Selenium", "Jest", "Cypress", "API Testing"],
      progress: 82,
      badges: ["Bug Hunter", "Test Automation Expert"],
      projects: 3,
      certificates: 1,
      status: "online"
    },
    {
      id: 3,
      name: "Raj Patel",
      role: "student",
      specialization: "Frontend Development",
      team: "Team Alpha",
      position: "Frontend Developer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      skills: ["React", "Vue.js", "CSS", "JavaScript"],
      progress: 68,
      badges: ["UI Expert", "Responsive Design"],
      projects: 2,
      certificates: 1,
      status: "away"
    },
    {
      id: 4,
      name: "Maya Singh",
      role: "student",
      specialization: "Backend Development",
      team: "Team Alpha",
      position: "Backend Developer",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      skills: ["Node.js", "Python", "PostgreSQL", "Redis"],
      progress: 72,
      badges: ["API Master", "Database Expert"],
      projects: 3,
      certificates: 2,
      status: "online"
    }
  ],
  tickets: [
    {
      id: 1,
      subject: "Login page not responsive on mobile",
      description: "The login form breaks on mobile devices below 768px width. Users cannot access the submit button and input fields overlap.",
      priority: "high",
      status: "in-progress",
      assignee: "Raj Patel",
      assigneeId: 3,
      reporter: "Priya Sharma",
      reporterId: 2,
      created: "2024-08-18T10:30:00Z",
      updated: "2024-08-19T14:20:00Z",
      project: "E-Learning Platform",
      type: "bug",
      tags: ["Mobile", "UI", "Critical"]
    },
    {
      id: 2,
      subject: "Add dark mode toggle",
      description: "Users have requested a dark mode option for better viewing experience during late hours.",
      priority: "medium",
      status: "new",
      assignee: "Alex Kumar",
      assigneeId: 1,
      reporter: "User Feedback",
      reporterId: null,
      created: "2024-08-19T09:15:00Z",
      updated: "2024-08-19T09:15:00Z",
      project: "E-Learning Platform",
      type: "feature",
      tags: ["Enhancement", "UI"]
    },
    {
      id: 3,
      subject: "Database connection timeout",
      description: "Intermittent database connection timeouts causing 500 errors",
      priority: "critical",
      status: "open",
      assignee: "Maya Singh",
      assigneeId: 4,
      reporter: "System Monitor",
      reporterId: null,
      created: "2024-08-19T15:45:00Z",
      updated: "2024-08-19T15:45:00Z",
      project: "E-Learning Platform",
      type: "bug",
      tags: ["Database", "Critical", "Performance"]
    }
  ],
  tasks: [
    {
      id: 1,
      title: "Implement user authentication",
      description: "Create login/signup functionality with JWT tokens",
      assignee: "Alex Kumar",
      assigneeId: 1,
      assigneeAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      status: "inprogress",
      priority: "high",
      dueDate: "2024-08-20",
      sprint: "Sprint 3",
      storyPoints: 8,
      project: "E-Learning Platform",
      tags: ["Backend", "Security"],
      progress: 60
    },
    {
      id: 2,
      title: "Design course catalog UI",
      description: "Create responsive course listing with search and filters",
      assignee: "Raj Patel",
      assigneeId: 3,
      assigneeAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      status: "todo",
      priority: "medium",
      dueDate: "2024-08-22",
      sprint: "Sprint 3",
      storyPoints: 5,
      project: "E-Learning Platform",
      tags: ["Frontend", "UI/UX"],
      progress: 0
    },
    {
      id: 3,
      title: "Write API integration tests",
      description: "Create comprehensive test suite for all API endpoints",
      assignee: "Priya Sharma",
      assigneeId: 2,
      assigneeAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b890?w=40&h=40&fit=crop&crop=face",
      status: "done",
      priority: "high",
      dueDate: "2024-08-18",
      sprint: "Sprint 3",
      storyPoints: 6,
      project: "E-Learning Platform",
      tags: ["Testing", "API"],
      progress: 100
    },
    {
      id: 4,
      title: "Setup CI/CD pipeline",
      description: "Configure automated deployment with Docker and AWS",
      assignee: "Arjun Reddy",
      assigneeId: 6,
      assigneeAvatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face",
      status: "inprogress",
      priority: "high",
      dueDate: "2024-08-25",
      sprint: "Sprint 3",
      storyPoints: 10,
      project: "E-Learning Platform",
      tags: ["DevOps", "Deployment"],
      progress: 30
    }
  ],
  documents: [
    {
      id: 1,
      title: "Software Requirements Specification",
      type: "SRS",
      project: "E-Learning Platform",
      version: "v2.1",
      lastModified: "2024-08-15T16:45:00Z",
      author: "Team Alpha",
      status: "approved",
      description: "Complete requirements document for the e-learning platform",
      tags: ["Requirements", "Specifications"],
      size: "2.4 MB"
    },
    {
      id: 2,
      title: "Sprint 3 Planning",
      type: "Sprint Planning",
      project: "E-Learning Platform",
      version: "v1.0",
      lastModified: "2024-08-12T11:30:00Z",
      author: "Alex Kumar",
      status: "active",
      description: "Sprint planning document with goals and task breakdown",
      tags: ["Agile", "Sprint", "Planning"],
      size: "856 KB"
    },
    {
      id: 3,
      title: "Test Case Repository",
      type: "Test Cases",
      project: "E-Learning Platform",
      version: "v1.3",
      lastModified: "2024-08-18T13:20:00Z",
      author: "Priya Sharma",
      status: "in-review",
      description: "Comprehensive test cases for all system features",
      tags: ["Testing", "QA", "Documentation"],
      size: "1.8 MB"
    },
    {
      id: 4,
      title: "Deployment Checklist",
      type: "Deployment",
      project: "E-Learning Platform",
      version: "v1.1",
      lastModified: "2024-08-16T09:15:00Z",
      author: "Arjun Reddy",
      status: "draft",
      description: "Step-by-step deployment and monitoring checklist",
      tags: ["Deployment", "DevOps", "Checklist"],
      size: "654 KB"
    }
  ],
  notifications: [
    {
      id: 1,
      message: "Sprint 3 demo scheduled for Aug 25 at 2 PM",
      type: "info",
      timestamp: "2024-08-19T08:00:00Z",
      read: false,
      icon: "calendar",
      action: "View Sprint"
    },
    {
      id: 2,
      message: "VM environment ready for E-Learning Platform",
      type: "success",
      timestamp: "2024-08-19T17:00:00Z",
      read: false,
      icon: "server",
      action: "Launch VM"
    },
    {
      id: 3,
      message: "Weekly mentor session tomorrow at 2 PM",
      type: "reminder",
      timestamp: "2024-08-19T12:15:00Z",
      read: true,
      icon: "user-tie",
      action: "Join Session"
    },
    {
      id: 4,
      message: "Code review completed for authentication module",
      type: "success",
      timestamp: "2024-08-19T16:30:00Z",
      read: false,
      icon: "check-circle",
      action: "View Review"
    }
  ],
  messages: [
    {
      id: 1,
      channel: "team-alpha-general",
      author: "Priya Sharma",
      authorId: 2,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b890?w=40&h=40&fit=crop&crop=face",
      content: "Great job on the API tests everyone! All endpoints are now fully covered.",
      timestamp: "2024-08-19T16:45:00Z",
      reactions: [
        {emoji: "👏", count: 3, users: ["Alex Kumar", "Raj Patel", "Maya Singh"]},
        {emoji: "🎉", count: 2, users: ["Arjun Reddy", "Vikram Joshi"]}
      ]
    },
    {
      id: 2,
      channel: "team-alpha-general",
      author: "Alex Kumar",
      authorId: 1,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      content: "Authentication module is ready for code review. Please check the PR when you get a chance.",
      timestamp: "2024-08-19T15:30:00Z",
      reactions: [
        {emoji: "✅", count: 1, users: ["Priya Sharma"]}
      ]
    }
  ],
  leaderboard: [
    {
      rank: 1,
      name: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b890?w=50&h=50&fit=crop&crop=face",
      points: 2450,
      badges: 8,
      achievements: "Bug Hunter Champion",
      trend: "up"
    },
    {
      rank: 2,
      name: "Alex Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      points: 2380,
      badges: 7,
      achievements: "Sprint Leader",
      trend: "up"
    },
    {
      rank: 3,
      name: "Maya Singh",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face",
      points: 2250,
      badges: 6,
      achievements: "Code Quality Expert",
      trend: "down"
    },
    {
      rank: 4,
      name: "Raj Patel",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      points: 2180,
      badges: 5,
      achievements: "UI/UX Specialist",
      trend: "up"
    }
  ]
};

// Application state with VM integration
const appState = {
  currentView: 'dashboard',
  activeModals: new Set(),
  currentChannel: 'team-alpha-general',
  ticketFilters: {
    status: 'all',
    priority: 'all',
    assignee: 'all',
    search: ''
  },
  docFilters: {
    search: ''
  },
  vmState: {
    currentVM: null,
    activeWindows: new Set(),
    currentTab: 'overview'
  }
};

// Global variables for drag and drop
let draggedElement = null;

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeApp();
});

function initializeApp() {
  console.log('Initializing application...');
  
  // Ensure light mode is set
  document.documentElement.setAttribute('data-color-scheme', 'light');
  
  // Set initial view
  showView('dashboard');
  
  // Update user info in header
  updateUserInfo();
  
  // Initialize progress rings
  initializeProgressRings();
  
  // Setup all event listeners
  setupEventListeners();
  
  // Load initial data for all views
  populateTicketsList();
  populateDocumentsList();
  
  // Update notification badge
  updateNotificationBadge();
  
  // Start real-time updates
  startRealTimeUpdates();
  
  // Initialize VM management tabs
  initializeVMTabs();
  
  console.log('Application initialized successfully');
}

function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  // Navigation buttons - Fixed implementation
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach((button) => {
    const view = button.getAttribute('data-view');
    
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log(`Navigation clicked: ${view}`);
      
      // Show the correct view
      showView(view);
      
      // Update active nav button
      navButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      console.log(`Successfully switched to view: ${view}`);
    });
  });

  // Notification button
  const notificationBtn = document.querySelector('.notification-btn');
  if (notificationBtn) {
    notificationBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      showNotifications();
    });
  }

  // Search functionality
  setupSearchListeners();
  
  // Filter dropdowns
  setupFilterListeners();

  // Modal event listeners
  setupModalEventListeners();

  // Dashboard button listeners
  setupDashboardListeners();

  // Project button listeners
  setupProjectListeners();

  // Ticket button listeners  
  setupTicketListeners();

  // Document button listeners
  setupDocumentListeners();

  // Chat functionality
  setupChatEventListeners();

  // Mentorship listeners
  setupMentorshipListeners();

  // Analytics listeners
  setupAnalyticsListeners();

  // Kanban drag and drop
  setupKanbanDragDrop();

  // VM-specific listeners
  setupVMEventListeners();
  
  console.log('All event listeners set up successfully');
}

function setupVMEventListeners() {
  // VM Tab switching
  document.addEventListener('click', function(e) {
    const vmTab = e.target.closest('.vm-tab');
    if (vmTab) {
      const tabName = vmTab.getAttribute('data-tab');
      switchVMTab(tabName);
    }
  });

  // Terminal input handling
  document.addEventListener('keypress', function(e) {
    const terminalInput = e.target.closest('.terminal-input');
    if (terminalInput && e.key === 'Enter') {
      executeTerminalCommand(terminalInput.value);
      terminalInput.value = '';
    }
  });
}

function setupSearchListeners() {
  const ticketSearch = document.getElementById('ticket-search');
  if (ticketSearch) {
    ticketSearch.addEventListener('input', function() {
      appState.ticketFilters.search = this.value.toLowerCase();
      filterAndDisplayTickets();
    });
  }

  const docSearch = document.getElementById('doc-search');
  if (docSearch) {
    docSearch.addEventListener('input', function() {
      appState.docFilters.search = this.value.toLowerCase();
      filterAndDisplayDocuments();
    });
  }
}

function setupFilterListeners() {
  const statusFilter = document.getElementById('status-filter');
  const priorityFilter = document.getElementById('priority-filter');
  const assigneeFilter = document.getElementById('assignee-filter');

  if (statusFilter) {
    statusFilter.addEventListener('change', function() {
      appState.ticketFilters.status = this.value;
      filterAndDisplayTickets();
    });
  }

  if (priorityFilter) {
    priorityFilter.addEventListener('change', function() {
      appState.ticketFilters.priority = this.value;
      filterAndDisplayTickets();
    });
  }

  if (assigneeFilter) {
    assigneeFilter.addEventListener('change', function() {
      appState.ticketFilters.assignee = this.value;
      filterAndDisplayTickets();
    });
  }
}

function setupModalEventListeners() {
  // Close modals when clicking on overlay
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      closeAllModals();
    }
  });

  // Close buttons
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close')) {
      closeAllModals();
    }
  });

  // Escape key to close modals
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (!document.getElementById('vm-desktop').classList.contains('hidden')) {
        closeVM();
      } else {
        closeAllModals();
      }
    }
  });
}

function setupDashboardListeners() {
  // View Details button in progress card
  document.addEventListener('click', function(e) {
    if (e.target.closest('.progress-card .btn--primary')) {
      e.preventDefault();
      showNotification('Opening detailed progress view...', 'info');
      showView('projects');
      // Update nav
      document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelector('.nav-btn[data-view="projects"]')?.classList.add('active');
    }
  });

  // View Team button
  document.addEventListener('click', function(e) {
    if (e.target.closest('.team-card .btn--outline')) {
      e.preventDefault();
      showNotification('Opening team overview...', 'info');
      showTeamModal();
    }
  });

  // View All Tasks button
  document.addEventListener('click', function(e) {
    if (e.target.closest('.tasks-card .btn--outline')) {
      e.preventDefault();
      showNotification('Navigating to project tasks...', 'info');
      showView('projects');
      document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelector('.nav-btn[data-view="projects"]')?.classList.add('active');
    }
  });
}

function setupProjectListeners() {
  // New Task button
  document.addEventListener('click', function(e) {
    if (e.target.closest('.view-header .btn--primary') && appState.currentView === 'projects') {
      e.preventDefault();
      openNewTaskModal();
    }
  });

  // Export button
  document.addEventListener('click', function(e) {
    if (e.target.closest('.view-header .btn--outline') && appState.currentView === 'projects') {
      e.preventDefault();
      exportProjectData();
    }
  });
}

function setupTicketListeners() {
  // Create Ticket button - Fixed to work properly
  document.addEventListener('click', function(e) {
    if (e.target.closest('.btn--primary') && 
        (e.target.textContent.includes('Create Ticket') || 
         e.target.closest('.btn--primary')?.textContent.includes('Create Ticket'))) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Create Ticket button clicked');
      openCreateTicketModal();
    }
  });
}

function setupDocumentListeners() {
  // New Document button
  document.addEventListener('click', function(e) {
    if (e.target.closest('.view-header .btn--primary') && appState.currentView === 'documents') {
      e.preventDefault();
      openTemplateModal();
    }
  });

  // Template cards
  document.addEventListener('click', function(e) {
    const templateCard = e.target.closest('.template-card');
    if (templateCard && appState.currentView === 'documents') {
      e.preventDefault();
      const templateType = templateCard.getAttribute('onclick')?.match(/createFromTemplate\('(\w+)'\)/)?.[1];
      if (templateType) {
        createFromTemplate(templateType);
      }
    }
  });
}

function setupChatEventListeners() {
  // Channel switching
  document.addEventListener('click', function(e) {
    const channelItem = e.target.closest('.channel-item');
    if (channelItem) {
      const channel = channelItem.getAttribute('data-channel');
      switchChannel(channel);
      
      // Update active channel
      document.querySelectorAll('.channel-item').forEach(item => item.classList.remove('active'));
      channelItem.classList.add('active');
    }
  });

  // Message input
  const messageInput = document.getElementById('message-input');
  if (messageInput) {
    messageInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }

  // Send button
  document.addEventListener('click', function(e) {
    if (e.target.closest('.send-btn')) {
      e.preventDefault();
      sendMessage();
    }
  });
}

function setupMentorshipListeners() {
  // Schedule Session buttons
  document.addEventListener('click', function(e) {
    if (e.target.closest('.btn') && e.target.textContent.includes('Schedule')) {
      e.preventDefault();
      const mentorId = e.target.getAttribute('onclick')?.match(/scheduleWithMentor\('(\w+)'\)/)?.[1] || 'general';
      scheduleWithMentor(mentorId);
    }
  });

  // Join/Reschedule buttons
  document.addEventListener('click', function(e) {
    if (e.target.textContent === 'Join') {
      e.preventDefault();
      joinSession(1);
    } else if (e.target.textContent === 'Reschedule') {
      e.preventDefault();
      rescheduleSession(1);
    }
  });
}

function setupAnalyticsListeners() {
  // Export button
  document.addEventListener('click', function(e) {
    if (e.target.closest('.btn--outline') && e.target.textContent.includes('Export') && appState.currentView === 'analytics') {
      e.preventDefault();
      exportAnalytics();
    }
  });

  // Time range filter
  const timeRange = document.getElementById('time-range');
  if (timeRange) {
    timeRange.addEventListener('change', function() {
      showNotification(`Updating analytics for ${this.options[this.selectedIndex].text}`, 'info');
      updateAnalyticsData();
    });
  }
}

// VM Management Functions
window.launchVM = function(vmId) {
  console.log(`Launching VM: ${vmId}`);
  
  const project = appData.projects.find(p => p.vm.id === vmId);
  if (!project) {
    showNotification('VM not found', 'error');
    return;
  }

  appState.vmState.currentVM = vmId;
  
  // Update VM status to running if it was stopped
  if (project.vm.status === 'Stopped') {
    project.vm.status = 'Starting';
    showNotification('Starting VM environment...', 'info');
    updateProjectCards();
    
    // Simulate startup time
    setTimeout(() => {
      project.vm.status = 'Running';
      project.vm.uptime = '0m';
      updateProjectCards();
      showNotification('VM environment ready!', 'success');
      
      // Now launch the VM desktop
      launchVMDesktop(project);
    }, 3000);
  } else {
    // VM is already running, launch directly
    launchVMDesktop(project);
  }
};

function launchVMDesktop(project) {
  // Show VM desktop
  const vmDesktop = document.getElementById('vm-desktop');
  if (vmDesktop) {
    vmDesktop.classList.remove('hidden');
    
    // Initialize desktop environment
    initializeVMDesktop(project);
    
    // Close any open modals
    closeAllModals();
    
    showNotification('VM desktop environment launched successfully!', 'success');
  }
}

window.startVM = function(vmId) {
  console.log(`Starting VM: ${vmId}`);
  
  const project = appData.projects.find(p => p.vm.id === vmId);
  if (!project) {
    showNotification('VM not found', 'error');
    return;
  }

  project.vm.status = 'Starting';
  showNotification('Starting VM...', 'info');
  updateProjectCards();
  
  setTimeout(() => {
    project.vm.status = 'Running';
    project.vm.uptime = '0m';
    project.vm.usage.cpu = Math.floor(Math.random() * 20) + 10;
    project.vm.usage.memory = Math.floor(Math.random() * 30) + 20;
    updateProjectCards();
    showNotification('VM started successfully!', 'success');
  }, 2000);
};

window.stopVM = function(vmId) {
  console.log(`Stopping VM: ${vmId}`);
  
  const project = appData.projects.find(p => p.vm.id === vmId);
  if (!project) {
    showNotification('VM not found', 'error');
    return;
  }

  project.vm.status = 'Stopped';
  project.vm.uptime = '0m';
  project.vm.usage.cpu = 0;
  project.vm.usage.memory = 0;
  
  showNotification('VM stopped successfully!', 'success');
  updateProjectCards();
  
  // Close VM desktop if it's open
  if (appState.vmState.currentVM === vmId) {
    closeVM();
  }
};

window.restartVM = function(vmId) {
  console.log(`Restarting VM: ${vmId}`);
  
  showNotification('Restarting VM...', 'info');
  
  // Stop first
  stopVM(vmId);
  
  // Start after delay
  setTimeout(() => {
    startVM(vmId);
  }, 1000);
};

window.resetVM = function(vmId) {
  console.log(`Resetting VM: ${vmId}`);
  
  showNotification('Resetting VM to clean state...', 'warning');
  
  setTimeout(() => {
    showNotification('VM reset completed!', 'success');
  }, 3000);
};

window.showProjectDetails = function(projectId) {
  console.log(`Showing project details: ${projectId}`);
  
  const project = appData.projects.find(p => p.id === projectId);
  if (!project) {
    showNotification('Project not found', 'error');
    return;
  }

  // Open VM management panel
  const vmManagement = document.getElementById('vm-management');
  if (vmManagement) {
    vmManagement.classList.remove('hidden');
    appState.activeModals.add('vmManagement');
    
    // Update VM management content with project data
    updateVMManagementContent(project);
  }
};

function updateVMManagementContent(project) {
  // Update specifications
  const specs = project.vm.specs;
  const vmSpecs = document.querySelector('.vm-specs');
  if (vmSpecs) {
    vmSpecs.innerHTML = `
      <div class="spec-item">
        <i class="fas fa-microchip"></i>
        <span>${specs.cpu}</span>
      </div>
      <div class="spec-item">
        <i class="fas fa-memory"></i>
        <span>${specs.memory}</span>
      </div>
      <div class="spec-item">
        <i class="fas fa-hdd"></i>
        <span>${specs.storage}</span>
      </div>
      <div class="spec-item">
        <i class="fab fa-ubuntu"></i>
        <span>${specs.os}</span>
      </div>
    `;
  }
  
  // Update monitoring stats
  const usage = project.vm.usage;
  const monitoringStats = document.querySelector('.monitoring-stats');
  if (monitoringStats) {
    monitoringStats.innerHTML = `
      <div class="stat-card">
        <h4>CPU Usage</h4>
        <div class="stat-value">${usage.cpu}%</div>
        <div class="stat-bar">
          <div class="stat-fill" style="width: ${usage.cpu}%; background: #ff6b6b;"></div>
        </div>
      </div>
      <div class="stat-card">
        <h4>Memory Usage</h4>
        <div class="stat-value">${usage.memory}%</div>
        <div class="stat-bar">
          <div class="stat-fill" style="width: ${usage.memory}%; background: #4ecdc4;"></div>
        </div>
      </div>
      <div class="stat-card">
        <h4>Storage Usage</h4>
        <div class="stat-value">${usage.storage}%</div>
        <div class="stat-bar">
          <div class="stat-fill" style="width: ${usage.storage}%; background: #45b7d1;"></div>
        </div>
      </div>
    `;
  }
  
  // Update session info
  const sessionStats = document.querySelector('.session-stats');
  if (sessionStats) {
    sessionStats.innerHTML = `
      <div class="session-stat">
        <strong>Current Session:</strong> ${project.vm.sessionTime}
      </div>
      <div class="session-stat">
        <strong>Total Sessions:</strong> ${project.vm.totalSessions}
      </div>
      <div class="session-stat">
        <strong>Last Accessed:</strong> ${project.vm.status === 'Running' ? 'Just now' : formatDate(project.vm.lastAccessed)}
      </div>
    `;
  }
}

window.closeVMManagement = function() {
  const modal = document.getElementById('vm-management');
  if (modal) {
    modal.classList.add('hidden');
    appState.activeModals.delete('vmManagement');
  }
};

// VM Desktop Functions
function initializeVMDesktop(project) {
  console.log('Initializing VM desktop for project:', project.title);
  
  // Update VM title
  const vmTitle = document.querySelector('.vm-title');
  if (vmTitle) {
    vmTitle.textContent = `${project.title} VM - ${project.vm.specs.os}`;
  }
  
  // Update system time
  updateVMSystemTime();
  
  // Start system time updates
  setInterval(updateVMSystemTime, 1000);
  
  // Update resource monitoring
  updateVMResourceMonitoring(project);
  setInterval(() => updateVMResourceMonitoring(project), 5000);
  
  // Show initial applications
  setTimeout(() => {
    openApp('vscode');
  }, 1000);
  
  setTimeout(() => {
    openApp('terminal');
  }, 2000);
}

function updateVMSystemTime() {
  const now = new Date();
  const timeElement = document.querySelector('.system-time');
  const dateElement = document.querySelector('.system-date');
  
  if (timeElement) {
    timeElement.textContent = now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }
  
  if (dateElement) {
    dateElement.textContent = now.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  }
}

function updateVMResourceMonitoring(project) {
  const resourcesElement = document.querySelector('.vm-resources');
  if (resourcesElement && project.vm.status === 'Running') {
    // Simulate resource fluctuation
    project.vm.usage.cpu = Math.max(0, Math.min(100, project.vm.usage.cpu + (Math.random() - 0.5) * 10));
    project.vm.usage.memory = Math.max(0, Math.min(100, project.vm.usage.memory + (Math.random() - 0.5) * 5));
    
    resourcesElement.textContent = `CPU: ${Math.round(project.vm.usage.cpu)}% | RAM: ${Math.round(project.vm.usage.memory)}% | Storage: ${project.vm.usage.storage}%`;
  }
}

window.minimizeVM = function() {
  // Minimize to taskbar (simulate)
  showNotification('VM minimized to taskbar', 'info');
};

window.maximizeVM = function() {
  // Toggle fullscreen
  const vmDesktop = document.getElementById('vm-desktop');
  if (vmDesktop) {
    if (vmDesktop.style.transform === 'scale(1.05)') {
      vmDesktop.style.transform = 'scale(1)';
    } else {
      vmDesktop.style.transform = 'scale(1.05)';
    }
  }
};

window.closeVM = function() {
  console.log('Closing VM desktop');
  
  const vmDesktop = document.getElementById('vm-desktop');
  if (vmDesktop) {
    vmDesktop.classList.add('hidden');
  }
  
  // Clear VM state
  appState.vmState.currentVM = null;
  appState.vmState.activeWindows.clear();
  
  // Close all desktop windows
  const windows = document.querySelectorAll('.desktop-window');
  windows.forEach(window => {
    window.classList.add('hidden');
  });
  
  showNotification('VM session ended', 'info');
};

// Desktop Application Functions
window.openApp = function(appName) {
  console.log(`Opening app: ${appName}`);
  
  const windowId = `${appName}-window`;
  const window = document.getElementById(windowId);
  
  if (window) {
    window.classList.remove('hidden');
    appState.vmState.activeWindows.add(appName);
    
    // Update taskbar
    const taskbarApp = document.querySelector(`.taskbar-app[onclick*="${windowId}"]`);
    if (taskbarApp) {
      taskbarApp.classList.add('active');
    }
    
    // Initialize app-specific functionality
    switch (appName) {
      case 'vscode':
        initializeVSCode();
        break;
      case 'terminal':
        initializeTerminal();
        break;
      case 'files':
        initializeFileManager();
        break;
      case 'browser':
        initializeBrowser();
        break;
    }
  }
};

window.closeWindow = function(windowId) {
  console.log(`Closing window: ${windowId}`);
  
  const window = document.getElementById(windowId);
  if (window) {
    window.classList.add('hidden');
    
    const appName = windowId.replace('-window', '');
    appState.vmState.activeWindows.delete(appName);
    
    // Update taskbar
    const taskbarApp = document.querySelector(`.taskbar-app[onclick*="${windowId}"]`);
    if (taskbarApp) {
      taskbarApp.classList.remove('active');
    }
  }
};

window.showWindow = function(windowId) {
  console.log(`Showing window: ${windowId}`);
  
  const window = document.getElementById(windowId);
  if (window) {
    window.classList.remove('hidden');
    
    // Bring to front
    window.style.zIndex = 1000;
    
    // Update taskbar
    const taskbarApp = document.querySelector(`.taskbar-app[onclick*="${windowId}"]`);
    if (taskbarApp) {
      taskbarApp.classList.add('active');
    }
  }
};

window.toggleStartMenu = function() {
  showNotification('Start menu clicked', 'info');
};

function initializeVSCode() {
  console.log('Initializing VS Code');
  // VS Code is already initialized with file structure
}

function initializeTerminal() {
  console.log('Initializing Terminal');
  
  // Add a welcome message if terminal is empty
  const output = document.getElementById('terminal-output');
  if (output && output.children.length <= 4) {
    const welcomeLine = document.createElement('div');
    welcomeLine.className = 'terminal-line';
    welcomeLine.textContent = 'Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-78-generic x86_64)';
    output.appendChild(welcomeLine);
    
    const promptLine = document.createElement('div');
    promptLine.className = 'terminal-line';
    promptLine.textContent = 'student@vm-elearn-001:~/elearning-platform$ ';
    output.appendChild(promptLine);
  }
}

function initializeFileManager() {
  console.log('Initializing File Manager');
  // File manager is already initialized with file structure
}

function initializeBrowser() {
  console.log('Initializing Browser');
  // Browser is already initialized with localhost preview
}

window.handleTerminalInput = function(event) {
  if (event.key === 'Enter') {
    executeTerminalCommand(event.target.value);
    event.target.value = '';
  }
};

function executeTerminalCommand(command) {
  console.log('Executing command:', command);
  
  const output = document.getElementById('terminal-output');
  if (!output) return;
  
  // Add command to history
  const commandLine = document.createElement('div');
  commandLine.className = 'terminal-line';
  commandLine.textContent = `student@vm-elearn-001:~/elearning-platform$ ${command}`;
  output.appendChild(commandLine);
  
  // Process command and add response
  const response = processCommand(command);
  const responseLine = document.createElement('div');
  responseLine.className = 'terminal-line';
  responseLine.textContent = response;
  output.appendChild(responseLine);
  
  // Scroll to bottom
  output.scrollTop = output.scrollHeight;
}

function processCommand(command) {
  const cmd = command.toLowerCase().trim();
  
  switch (cmd) {
    case 'ls':
    case 'ls -la':
      return 'frontend/  backend/  database/  docker-compose.yml  package.json  README.md';
    
    case 'pwd':
      return '/home/student/elearning-platform';
    
    case 'whoami':
      return 'student';
    
    case 'date':
      return new Date().toString();
    
    case 'npm install':
      return '✓ Dependencies installed successfully';
    
    case 'npm run dev':
      return '🚀 Development server running on http://localhost:3000';
    
    case 'npm test':
      return '✓ All tests passed (12 passed, 0 failed)';
    
    case 'git status':
      return 'On branch feature/authentication\nChanges not staged for commit:\n  modified:   src/components/Login.jsx';
    
    case 'git add .':
      return 'Files staged for commit';
    
    case 'git commit -m "Update authentication"':
      return '[feature/authentication 1a2b3c4] Update authentication\n 1 file changed, 15 insertions(+), 3 deletions(-)';
    
    case 'docker ps':
      return 'CONTAINER ID   IMAGE       COMMAND   CREATED   STATUS   PORTS   NAMES\n12ab34cd56ef   mongo:7.0   "docker"  2h ago    Up 2h    27017   elearn_db';
    
    case 'clear':
      setTimeout(() => {
        const output = document.getElementById('terminal-output');
        if (output) {
          output.innerHTML = '';
        }
      }, 100);
      return '';
    
    case 'help':
      return 'Available commands: ls, pwd, whoami, date, npm, git, docker, clear, help';
    
    default:
      return `bash: ${command}: command not found`;
  }
}

// File system functions
window.toggleFolder = function(folderElement) {
  const children = folderElement.nextElementSibling;
  const icon = folderElement.querySelector('i');
  
  if (children && children.classList.contains('file-children')) {
    if (folderElement.classList.contains('expanded')) {
      folderElement.classList.remove('expanded');
      children.style.display = 'none';
      icon.className = 'fas fa-folder';
    } else {
      folderElement.classList.add('expanded');
      children.style.display = 'block';
      icon.className = 'fas fa-folder-open';
    }
  }
};

window.openFile = function(fileName) {
  console.log('Opening file:', fileName);
  showNotification(`Opening ${fileName} in editor`, 'info');
  
  // Switch to the file in VS Code
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  
  // Create new tab if needed
  let targetTab = Array.from(tabs).find(tab => tab.textContent === fileName);
  if (!targetTab) {
    targetTab = document.createElement('div');
    targetTab.className = 'tab';
    targetTab.textContent = fileName;
    document.querySelector('.editor-tabs').appendChild(targetTab);
  }
  
  targetTab.classList.add('active');
};

window.selectFile = function(fileElement) {
  // Remove selection from other files
  const files = document.querySelectorAll('.file-item');
  files.forEach(file => file.classList.remove('selected'));
  
  // Select current file
  fileElement.classList.add('selected');
  
  console.log('Selected file:', fileElement.querySelector('span').textContent);
};

window.createNewFile = function() {
  showNotification('Creating new file...', 'info');
};

window.createNewFolder = function() {
  showNotification('Creating new folder...', 'info');
};

function initializeVMTabs() {
  // Setup VM tab switching
  const vmTabs = document.querySelectorAll('.vm-tab');
  vmTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');
      switchVMTab(tabName);
    });
  });
}

function switchVMTab(tabName) {
  console.log('Switching to VM tab:', tabName);
  
  // Update tab buttons
  const tabs = document.querySelectorAll('.vm-tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.getAttribute('data-tab') === tabName) {
      tab.classList.add('active');
    }
  });
  
  // Update tab content
  const contents = document.querySelectorAll('.vm-tab-content');
  contents.forEach(content => {
    content.classList.remove('active');
  });
  
  const activeContent = document.getElementById(`${tabName}-tab`);
  if (activeContent) {
    activeContent.classList.add('active');
  }
  
  appState.vmState.currentTab = tabName;
}

function updateProjectCards() {
  // Update project cards with current VM status
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    const project = appData.projects[index];
    if (!project) return;
    
    const vmStatus = card.querySelector('.vm-status');
    const vmStats = card.querySelector('.vm-quick-stats');
    const launchBtn = card.querySelector('.project-actions .btn--primary');
    const startBtn = card.querySelector('.project-actions .btn--success');
    
    if (vmStatus) {
      vmStatus.className = `vm-status vm-status--${project.vm.status.toLowerCase()}`;
      vmStatus.innerHTML = `<i class="fas fa-server"></i><span>VM ${project.vm.status}</span>`;
    }
    
    if (vmStats) {
      vmStats.innerHTML = `
        <div class="vm-stat">
          <span>CPU: ${project.vm.usage.cpu}%</span>
          <div class="vm-usage-bar"><div style="width: ${project.vm.usage.cpu}%"></div></div>
        </div>
        <div class="vm-stat">
          <span>Memory: ${project.vm.usage.memory}%</span>
          <div class="vm-usage-bar"><div style="width: ${project.vm.usage.memory}%"></div></div>
        </div>
        <div class="vm-stat">
          <span>Storage: ${project.vm.usage.storage}%</span>
          <div class="vm-usage-bar"><div style="width: ${project.vm.usage.storage}%"></div></div>
        </div>
      `;
    }
    
    // Update button based on VM status
    if (project.vm.status === 'Running') {
      if (launchBtn) {
        launchBtn.style.display = 'inline-flex';
        launchBtn.innerHTML = '<i class="fas fa-play"></i> Launch VM';
      }
      if (startBtn) startBtn.style.display = 'none';
    } else {
      if (launchBtn) launchBtn.style.display = 'none';
      if (startBtn) {
        startBtn.style.display = 'inline-flex';
        startBtn.innerHTML = '<i class="fas fa-power-off"></i> Start VM';
      }
    }
  });
}

function showView(viewName) {
  console.log(`Showing view: ${viewName}`);
  
  // Hide all views
  const views = document.querySelectorAll('.view');
  views.forEach(view => {
    view.classList.remove('active');
  });

  // Show selected view
  const activeView = document.getElementById(viewName);
  if (activeView) {
    activeView.classList.add('active');
    appState.currentView = viewName;
    console.log(`Successfully switched to view: ${viewName}`);
    
    // Load view-specific data
    loadViewData(viewName);
  } else {
    console.error(`View not found: ${viewName}`);
  }
}

function loadViewData(viewName) {
  console.log(`Loading data for view: ${viewName}`);
  
  switch (viewName) {
    case 'dashboard':
      updateDashboardData();
      break;
    case 'projects':
      updateProjectsData();
      break;
    case 'tickets':
      populateTicketsList();
      break;
    case 'documents':
      populateDocumentsList();
      break;
    case 'communication':
      loadChatMessages();
      break;
    case 'mentorship':
      updateMentorshipData();
      break;
    case 'analytics':
      updateAnalyticsData();
      break;
  }
}

function updateUserInfo() {
  const user = appData.currentUser;
  const userAvatar = document.querySelector('.user-avatar');
  const userName = document.querySelector('.user-name');
  
  if (userAvatar) userAvatar.src = user.avatar;
  if (userName) userName.textContent = user.name;
}

function updateNotificationBadge() {
  const unreadCount = appData.notifications.filter(n => !n.read).length;
  const badge = document.querySelector('.notification-badge');
  
  if (badge) {
    badge.textContent = unreadCount;
    badge.style.display = unreadCount > 0 ? 'block' : 'none';
  }
}

function initializeProgressRings() {
  const progressRings = document.querySelectorAll('.progress-ring');
  progressRings.forEach(ring => {
    ring.style.background = `conic-gradient(var(--color-primary) ${appData.currentUser.progress}%, var(--color-secondary) ${appData.currentUser.progress}%)`;
  });
}

// Modal functions - Made global and working
window.openCreateTicketModal = function() {
  console.log('Opening create ticket modal');
  const modal = document.getElementById('createTicketModal');
  if (modal) {
    modal.classList.remove('hidden');
    appState.activeModals.add('createTicket');
  }
};

window.closeCreateTicketModal = function() {
  console.log('Closing create ticket modal');
  const modal = document.getElementById('createTicketModal');
  if (modal) {
    modal.classList.add('hidden');
    appState.activeModals.delete('createTicket');
    // Reset form
    const form = document.getElementById('ticket-form');
    if (form) form.reset();
  }
};

window.openTemplateModal = function() {
  console.log('Opening template modal');
  const modal = document.getElementById('templateModal');
  if (modal) {
    modal.classList.remove('hidden');
    appState.activeModals.add('template');
  }
};

window.closeTemplateModal = function() {
  console.log('Closing template modal');
  const modal = document.getElementById('templateModal');
  if (modal) {
    modal.classList.add('hidden');
    appState.activeModals.delete('template');
  }
};

function openCreateTicketModal() {
  window.openCreateTicketModal();
}

function openTemplateModal() {
  window.openTemplateModal();
}

function closeAllModals() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.classList.add('hidden');
  });
  appState.activeModals.clear();
}

// Ticket creation function - Fixed
window.createTicket = function() {
  console.log('Creating ticket...');
  
  const form = document.getElementById('ticket-form');
  if (!form) {
    console.error('Ticket form not found');
    return;
  }
  
  const formData = new FormData(form);
  
  const subject = formData.get('subject');
  const description = formData.get('description');
  const priority = formData.get('priority');
  const type = formData.get('type');
  const assignee = formData.get('assignee');
  
  if (!subject || !subject.trim()) {
    showNotification('Please enter a ticket subject', 'error');
    return;
  }
  
  // Find assignee details
  const assigneeUser = assignee ? appData.users.find(u => u.name.toLowerCase().includes(assignee.toLowerCase())) : null;
  
  // Create new ticket object
  const newTicket = {
    id: appData.tickets.length + 1,
    subject: subject.trim(),
    description: description ? description.trim() : '',
    priority: priority,
    status: 'new',
    assignee: assigneeUser ? assigneeUser.name : assignee || 'Unassigned',
    assigneeId: assigneeUser ? assigneeUser.id : null,
    reporter: appData.currentUser.name,
    reporterId: appData.currentUser.id,
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
    project: "E-Learning Platform",
    type: type,
    tags: [type.charAt(0).toUpperCase() + type.slice(1), priority.charAt(0).toUpperCase() + priority.slice(1)]
  };

  // Add to tickets array
  appData.tickets.push(newTicket);
  
  // Close modal and refresh tickets view
  closeCreateTicketModal();
  if (appState.currentView === 'tickets') {
    populateTicketsList();
  }
  
  // Show success message
  showNotification('Ticket created successfully!', 'success');
  
  // Update notification count
  addNotification({
    message: `New ${type} ticket created: ${subject}`,
    type: 'info',
    timestamp: new Date().toISOString(),
    read: false,
    icon: 'ticket-alt',
    action: 'View Ticket'
  });
};

window.createFromTemplate = function(templateType) {
  console.log(`Creating from template: ${templateType}`);
  
  const templates = {
    'srs': 'Software Requirements Specification',
    'sprint': 'Sprint Planning Template',
    'test': 'Test Case Template',
    'bug': 'Bug Report Template',
    'deployment': 'Deployment Checklist'
  };
  
  const templateName = templates[templateType] || 'Unknown Template';
  
  // Create new document
  const newDoc = {
    id: appData.documents.length + 1,
    title: `New ${templateName}`,
    type: templateName,
    project: "E-Learning Platform",
    version: "v1.0",
    lastModified: new Date().toISOString(),
    author: appData.currentUser.name,
    status: "draft",
    description: `Document created from ${templateName}`,
    tags: ["New", "Draft"],
    size: "0 KB"
  };
  
  appData.documents.push(newDoc);
  
  closeTemplateModal();
  
  // Refresh documents view if active
  if (appState.currentView === 'documents') {
    populateDocumentsList();
  }
  
  showNotification(`${templateName} document created successfully!`, 'success');
};

window.selectTemplate = function(templateType) {
  createFromTemplate(templateType);
};

function createFromTemplate(templateType) {
  window.createFromTemplate(templateType);
}

// Enhanced Modal and Interactive Functions
function showTeamModal() {
  showNotification('Team overview: 6 active members, Project: E-Learning Platform', 'info');
}

function openNewTaskModal() {
  showNotification('Task creation form would open here with assignee selection and sprint planning', 'info');
}

function exportProjectData() {
  showNotification('Exporting project data to CSV...', 'info');
  setTimeout(() => {
    showNotification('Project data exported successfully!', 'success');
  }, 2000);
}

// Data update functions
function updateDashboardData() {
  console.log('Updating dashboard data');
  
  // Update progress ring
  const progressValue = document.querySelector('.progress-value');
  if (progressValue) {
    progressValue.textContent = `${appData.currentUser.progress}%`;
  }

  // Update stats
  updateStats();
  
  // Update recent activity
  updateRecentActivity();
  
  // Update leaderboard
  updateLeaderboard();
}

function updateStats() {
  const completedTasks = appData.tasks.filter(task => task.status === 'done').length;
  const totalTasks = appData.tasks.length;
  
  // Update task completion
  const taskStats = document.getElementById('task-stats');
  if (taskStats) {
    taskStats.textContent = `${completedTasks}/${totalTasks}`;
  }
  
  // Update badges count
  const badgesStats = document.getElementById('badges-stats');
  if (badgesStats) {
    badgesStats.textContent = appData.currentUser.badges.length;
  }
  
  // Update certificates count
  const certStats = document.getElementById('cert-stats');
  if (certStats) {
    certStats.textContent = appData.currentUser.certificates;
  }
}

function updateRecentActivity() {
  const activities = [
    { icon: 'fas fa-code', text: 'Completed authentication module', time: '2 hours ago' },
    { icon: 'fas fa-bug', text: 'Bug fixed: Mobile responsive login', time: 'Yesterday' },
    { icon: 'fas fa-award', text: 'Earned "Sprint Champion" badge', time: '2 days ago' }
  ];
  
  const activityList = document.getElementById('activity-list');
  if (activityList) {
    activityList.innerHTML = activities.map(activity => `
      <div class="activity-item">
        <i class="${activity.icon} activity-icon"></i>
        <div>
          <strong>${activity.text}</strong>
          <span>${activity.time}</span>
        </div>
      </div>
    `).join('');
  }
}

function updateLeaderboard() {
  const leaderboard = document.getElementById('leaderboard');
  if (leaderboard) {
    leaderboard.innerHTML = appData.leaderboard.map(leader => `
      <div class="leaderboard-item">
        <div class="rank">${leader.rank}</div>
        <img src="${leader.avatar}" alt="${leader.name}">
        <div class="leader-info">
          <strong>${leader.name}</strong>
          <span>${leader.points.toLocaleString()} points</span>
        </div>
        <div class="badges-count">${leader.badges}</div>
      </div>
    `).join('');
  }
}

function updateProjectsData() {
  console.log('Updating projects data');
  setupKanbanDragDrop();
  updateProjectCards();
}

function populateTicketsList() {
  filterAndDisplayTickets();
}

function filterAndDisplayTickets() {
  let filteredTickets = [...appData.tickets];
  
  // Apply filters
  if (appState.ticketFilters.status !== 'all') {
    filteredTickets = filteredTickets.filter(ticket => 
      ticket.status.replace('-', '') === appState.ticketFilters.status.replace('-', '')
    );
  }
  
  if (appState.ticketFilters.priority !== 'all') {
    filteredTickets = filteredTickets.filter(ticket => 
      ticket.priority === appState.ticketFilters.priority
    );
  }
  
  if (appState.ticketFilters.assignee !== 'all') {
    filteredTickets = filteredTickets.filter(ticket => 
      ticket.assignee.toLowerCase().includes(appState.ticketFilters.assignee)
    );
  }
  
  if (appState.ticketFilters.search) {
    filteredTickets = filteredTickets.filter(ticket => 
      ticket.subject.toLowerCase().includes(appState.ticketFilters.search) ||
      ticket.description.toLowerCase().includes(appState.ticketFilters.search) ||
      ticket.tags.some(tag => tag.toLowerCase().includes(appState.ticketFilters.search))
    );
  }
  
  // Display tickets
  const ticketsList = document.getElementById('tickets-list');
  if (ticketsList) {
    if (filteredTickets.length === 0) {
      ticketsList.innerHTML = `
        <div style="text-align: center; padding: var(--space-32); color: var(--color-text-secondary);">
          <i class="fas fa-search" style="font-size: var(--font-size-2xl); margin-bottom: var(--space-16);"></i>
          <p>No tickets found matching your criteria.</p>
        </div>
      `;
    } else {
      ticketsList.innerHTML = filteredTickets.map(ticket => createTicketHTML(ticket)).join('');
      
      // Add click listeners to tickets
      const ticketItems = ticketsList.querySelectorAll('.ticket-item');
      ticketItems.forEach((item, index) => {
        item.addEventListener('click', () => {
          showTicketDetails(filteredTickets[index]);
        });
      });
    }
  }
}

function createTicketHTML(ticket) {
  return `
    <div class="ticket-item" data-ticket-id="${ticket.id}">
      <div class="ticket-header">
        <div class="ticket-id">#${ticket.id.toString().padStart(3, '0')}</div>
        <div class="ticket-priority ${ticket.priority}">${ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}</div>
        <div class="ticket-status ${ticket.status}">${ticket.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
      </div>
      <h3>${ticket.subject}</h3>
      <p>${ticket.description}</p>
      <div class="ticket-meta">
        <span>Assigned to: ${ticket.assignee}</span>
        <span>Reported by: ${ticket.reporter}</span>
        <span>Created: ${formatDate(ticket.created)}</span>
      </div>
    </div>
  `;
}

function populateDocumentsList() {
  filterAndDisplayDocuments();
}

function filterAndDisplayDocuments() {
  let filteredDocs = [...appData.documents];
  
  if (appState.docFilters.search) {
    filteredDocs = filteredDocs.filter(doc => 
      doc.title.toLowerCase().includes(appState.docFilters.search) ||
      doc.description.toLowerCase().includes(appState.docFilters.search) ||
      doc.tags.some(tag => tag.toLowerCase().includes(appState.docFilters.search))
    );
  }
  
  const documentsGrid = document.getElementById('documents-grid');
  if (documentsGrid) {
    documentsGrid.innerHTML = filteredDocs.map(doc => createDocumentHTML(doc)).join('');
    
    // Add click listeners
    const docCards = documentsGrid.querySelectorAll('.document-card');
    docCards.forEach((card, index) => {
      card.addEventListener('click', (e) => {
        // Prevent triggering on button clicks
        if (!e.target.closest('button')) {
          showDocumentDetails(filteredDocs[index]);
        }
      });
    });
  }
}

function createDocumentHTML(doc) {
  const statusColors = {
    'approved': 'success',
    'active': 'warning', 
    'in-review': 'info',
    'draft': 'info'
  };

  return `
    <div class="document-card" data-doc-id="${doc.id}">
      <div class="doc-icon">
        <i class="fas fa-file-alt"></i>
      </div>
      <h3>${doc.title}</h3>
      <div class="doc-meta">
        <span class="doc-version">${doc.version}</span>
        <span class="status status--${statusColors[doc.status] || 'info'}">${doc.status.charAt(0).toUpperCase() + doc.status.slice(1).replace('-', ' ')}</span>
      </div>
      <p>Last modified: ${formatDate(doc.lastModified)}</p>
      <div class="doc-actions">
        <button class="btn btn--outline btn--sm" onclick="editDocument(${doc.id})">Edit</button>
        <button class="btn btn--outline btn--sm" onclick="exportDocument(${doc.id})">Export</button>
      </div>
    </div>
  `;
}

function loadChatMessages() {
  const chatMessages = document.getElementById('chat-messages');
  if (chatMessages) {
    const channelMessages = appData.messages.filter(msg => msg.channel === appState.currentChannel);
    
    chatMessages.innerHTML = channelMessages.map(msg => `
      <div class="message">
        <div class="message-avatar">
          <img src="${msg.avatar}" alt="${msg.author}">
        </div>
        <div class="message-content">
          <div class="message-header">
            <strong>${msg.author}</strong>
            <span class="message-time">${formatTime(msg.timestamp)}</span>
          </div>
          <div class="message-text">${msg.content}</div>
          <div class="message-reactions">
            ${msg.reactions.map(reaction => `
              <span class="reaction" onclick="toggleReaction('${msg.id}', '${reaction.emoji}')">${reaction.emoji} ${reaction.count}</span>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function switchChannel(channel) {
  appState.currentChannel = channel;
  
  // Update channel header
  const chatHeader = document.querySelector('.chat-header h3');
  if (chatHeader) {
    chatHeader.textContent = `#${channel}`;
  }
  
  // Load messages for channel
  loadChatMessages();
  
  // Mark channel as read
  const channelItem = document.querySelector(`[data-channel="${channel}"]`);
  if (channelItem) {
    const unreadBadge = channelItem.querySelector('.unread-badge');
    if (unreadBadge) {
      unreadBadge.remove();
    }
  }
}

window.sendMessage = function() {
  const messageInput = document.getElementById('message-input');
  if (messageInput && messageInput.value.trim()) {
    const message = {
      id: appData.messages.length + 1,
      channel: appState.currentChannel,
      author: appData.currentUser.name,
      authorId: appData.currentUser.id,
      avatar: appData.currentUser.avatar,
      content: messageInput.value.trim(),
      timestamp: new Date().toISOString(),
      reactions: []
    };
    
    appData.messages.push(message);
    messageInput.value = '';
    
    // Reload messages
    loadChatMessages();
    
    showNotification('Message sent!', 'success');
  }
};

function sendMessage() {
  window.sendMessage();
}

function updateMentorshipData() {
  console.log('Updating mentorship data');
  
  // Update session time to tomorrow
  const sessionTime = document.querySelector('.session-time strong');
  if (sessionTime) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    sessionTime.textContent = `Tomorrow, 2:00 PM`;
  }
}

function updateAnalyticsData() {
  console.log('Updating analytics data');
  
  // Initialize Chart.js chart if available
  const canvas = document.getElementById('performanceChart');
  if (canvas && typeof Chart !== 'undefined') {
    // Destroy existing chart if it exists
    if (canvas.chart) {
      canvas.chart.destroy();
    }
    
    const ctx = canvas.getContext('2d');
    canvas.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'Task Completion',
          data: [65, 70, 75, 80, 82, 85, 88, 85],
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          tension: 0.1,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    });
  }
}

// Enhanced Kanban drag and drop functionality
function setupKanbanDragDrop() {
  const tasks = document.querySelectorAll('.kanban-task');
  const columns = document.querySelectorAll('.kanban-column');
  
  tasks.forEach(task => {
    task.draggable = true;
    task.addEventListener('dragstart', handleDragStart);
    task.addEventListener('dragend', handleDragEnd);
  });
  
  columns.forEach(column => {
    column.addEventListener('dragover', handleDragOver);
    column.addEventListener('drop', handleDrop);
    column.addEventListener('dragenter', handleDragEnter);
    column.addEventListener('dragleave', handleDragLeave);
  });
}

function handleDragStart(e) {
  draggedElement = this;
  this.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);
}

function handleDragEnd(e) {
  this.classList.remove('dragging');
  draggedElement = null;
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragEnter(e) {
  this.classList.add('drag-over');
}

function handleDragLeave(e) {
  if (!this.contains(e.relatedTarget)) {
    this.classList.remove('drag-over');
  }
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  
  this.classList.remove('drag-over');
  
  if (draggedElement && draggedElement !== this) {
    const taskContainer = this.querySelector('.kanban-tasks');
    
    // Remove the dragged element from its original location
    if (draggedElement.parentNode) {
      draggedElement.parentNode.removeChild(draggedElement);
    }
    
    // Clone and add to new column
    const newTask = draggedElement.cloneNode(true);
    newTask.classList.remove('dragging');
    
    // Re-add drag listeners
    newTask.draggable = true;
    newTask.addEventListener('dragstart', handleDragStart);
    newTask.addEventListener('dragend', handleDragEnd);
    
    taskContainer.appendChild(newTask);
    
    // Update task counts
    updateAllTaskCounts();
    
    const newStatus = this.getAttribute('data-status') || 'moved';
    showNotification(`Task moved to ${newStatus.charAt(0).toUpperCase() + newStatus.slice(1)}!`, 'success');
  }
  
  return false;
}

function updateAllTaskCounts() {
  const columns = document.querySelectorAll('.kanban-column');
  columns.forEach(column => {
    const taskCount = column.querySelectorAll('.kanban-task').length;
    const countElement = column.querySelector('.task-count');
    if (countElement) {
      countElement.textContent = taskCount;
    }
  });
}

// Utility functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

function formatTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
}

function showNotification(message, type = 'info') {
  console.log(`Showing notification: ${message} (${type})`);
  
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-base);
    padding: var(--space-16);
    box-shadow: var(--shadow-lg);
    z-index: 2000;
    min-width: 300px;
    animation: slideIn 0.3s ease-out;
  `;
  
  const iconMap = {
    'success': 'fas fa-check-circle',
    'error': 'fas fa-exclamation-circle',
    'warning': 'fas fa-exclamation-triangle',
    'info': 'fas fa-info-circle'
  };
  
  const colorMap = {
    'success': 'var(--color-success)',
    'error': 'var(--color-error)',
    'warning': 'var(--color-warning)',
    'info': 'var(--color-info)'
  };
  
  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: var(--space-12);">
      <i class="${iconMap[type] || iconMap.info}" style="color: ${colorMap[type] || colorMap.info};"></i>
      <span style="color: var(--color-text);">${message}</span>
      <button onclick="this.parentElement.parentElement.remove()" style="margin-left: auto; background: none; border: none; color: var(--color-text-secondary); cursor: pointer; padding: var(--space-4);">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Auto remove after 4 seconds
  setTimeout(() => {
    if (document.body.contains(notification)) {
      notification.style.animation = 'slideOut 0.3s ease-in forwards';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }
  }, 4000);
}

function showNotifications() {
  console.log('Showing notifications popup');
  
  const popup = document.createElement('div');
  popup.className = 'notifications-popup';
  popup.style.cssText = `
    position: fixed;
    top: 60px;
    right: 20px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    min-width: 300px;
    max-width: 400px;
    max-height: 400px;
    overflow-y: auto;
    z-index: 1500;
    padding: var(--space-16);
    animation: fadeIn 0.3s ease-out;
  `;
  
  const notificationItems = appData.notifications.map((notification, index) => `
    <div style="display: flex; align-items: flex-start; gap: var(--space-12); padding: var(--space-12); border-radius: var(--radius-base); margin-bottom: var(--space-8); cursor: pointer; ${!notification.read ? 'background: var(--color-bg-1);' : ''}" 
         onclick="markNotificationAsRead(${index})">
      <i class="fas fa-${notification.icon}" style="color: var(--color-primary); margin-top: var(--space-2);"></i>
      <div style="flex: 1;">
        <div style="font-size: var(--font-size-sm); color: var(--color-text); margin-bottom: var(--space-4);">${notification.message}</div>
        <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">${formatDate(notification.timestamp)}</div>
      </div>
      ${!notification.read ? '<div style="width: 8px; height: 8px; background: var(--color-primary); border-radius: 50%; margin-top: var(--space-6);"></div>' : ''}
    </div>
  `).join('');
  
  popup.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-16);">
      <h3 style="margin: 0; color: var(--color-text);">Notifications</h3>
      <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: var(--color-text-secondary); cursor: pointer; padding: var(--space-4);">
        <i class="fas fa-times"></i>
      </button>
    </div>
    ${notificationItems || '<div style="text-align: center; color: var(--color-text-secondary); padding: var(--space-16);">No notifications</div>'}
  `;
  
  const existingPopup = document.querySelector('.notifications-popup');
  if (existingPopup) {
    existingPopup.remove();
  }
  
  document.body.appendChild(popup);
  
  setTimeout(() => {
    document.addEventListener('click', function closePopup(e) {
      if (!popup.contains(e.target) && !e.target.closest('.notification-btn')) {
        popup.remove();
        document.removeEventListener('click', closePopup);
      }
    });
  }, 0);
}

function addNotification(notification) {
  appData.notifications.unshift(notification);
  updateNotificationBadge();
}

window.markNotificationAsRead = function(index) {
  if (appData.notifications[index]) {
    appData.notifications[index].read = true;
    updateNotificationBadge();
    
    // Remove popup
    const popup = document.querySelector('.notifications-popup');
    if (popup) {
      popup.remove();
    }
  }
};

// Interactive functions
window.scheduleSession = function() {
  showNotification('Opening session scheduling calendar...', 'info');
};

window.scheduleWithMentor = function(mentorId) {
  showNotification(`Scheduling session with mentor ${mentorId}...`, 'info');
};

window.rescheduleSession = function(sessionId) {
  showNotification(`Rescheduling session ${sessionId}...`, 'info');
};

window.joinSession = function(sessionId) {
  showNotification(`Joining session ${sessionId}... Opening video conference.`, 'success');
};

window.exportAnalytics = function() {
  showNotification('Generating analytics report...', 'info');
  setTimeout(() => {
    showNotification('Analytics report exported successfully!', 'success');
  }, 2000);
};

window.editDocument = function(docId) {
  showNotification(`Opening editor for document ${docId}...`, 'info');
};

window.exportDocument = function(docId) {
  showNotification(`Exporting document ${docId} to PDF...`, 'info');
  setTimeout(() => {
    showNotification('Document exported successfully!', 'success');
  }, 1500);
};

window.toggleReaction = function(messageId, emoji) {
  showNotification(`Added ${emoji} reaction to message`, 'success');
};

function scheduleSession() {
  window.scheduleSession();
}

function scheduleWithMentor(mentorId) {
  window.scheduleWithMentor(mentorId);
}

function rescheduleSession(sessionId) {
  window.rescheduleSession(sessionId);
}

function joinSession(sessionId) {
  window.joinSession(sessionId);
}

function exportAnalytics() {
  window.exportAnalytics();
}

function editDocument(docId) {
  window.editDocument(docId);
}

function exportDocument(docId) {
  window.exportDocument(docId);
}

function showTicketDetails(ticket) {
  showNotification(`Opening ticket #${ticket.id}: ${ticket.subject}`, 'info');
}

function showDocumentDetails(doc) {
  showNotification(`Opening document: ${doc.title} for editing`, 'info');
}

function startRealTimeUpdates() {
  // Simulate real-time progress updates
  setInterval(() => {
    if (Math.random() < 0.1) {
      if (appData.currentUser.progress < 100) {
        appData.currentUser.progress = Math.min(100, appData.currentUser.progress + 1);
        
        if (appState.currentView === 'dashboard') {
          const progressValue = document.querySelector('.progress-value');
          if (progressValue) {
            progressValue.textContent = `${appData.currentUser.progress}%`;
          }
          
          const progressRing = document.querySelector('.progress-ring');
          if (progressRing) {
            progressRing.style.background = `conic-gradient(var(--color-primary) ${appData.currentUser.progress}%, var(--color-secondary) ${appData.currentUser.progress}%)`;
          }
        }
      }
    }
  }, 10000);

  // Simulate new notifications
  setInterval(() => {
    if (Math.random() < 0.02) {
      const messages = [
        "New code review requested",
        "Sprint retrospective scheduled", 
        "Mentor feedback received",
        "Team meeting in 30 minutes",
        "New team member joined",
        "Project milestone completed",
        "VM environment updated",
        "Code deployment successful"
      ];
      
      const newNotification = {
        id: Date.now(),
        message: messages[Math.floor(Math.random() * messages.length)],
        type: 'info',
        timestamp: new Date().toISOString(),
        read: false,
        icon: 'bell',
        action: 'View Details'
      };
      
      addNotification(newNotification);
    }
  }, 15000);

  // Update VM resources periodically
  setInterval(() => {
    appData.projects.forEach(project => {
      if (project.vm.status === 'Running') {
        // Simulate resource changes
        project.vm.usage.cpu = Math.max(0, Math.min(100, project.vm.usage.cpu + (Math.random() - 0.5) * 10));
        project.vm.usage.memory = Math.max(0, Math.min(100, project.vm.usage.memory + (Math.random() - 0.5) * 5));
      }
    });
    
    // Update project cards if on projects view
    if (appState.currentView === 'projects') {
      updateProjectCards();
    }
  }, 8000);
}