// Data service for managing pickup requests and feedback
// Uses localStorage for data persistence

const STORAGE_KEYS = {
  PICKUP_REQUESTS: 'cleancity_pickup_requests',
  FEEDBACK: 'cleancity_feedback',
  USERS: 'cleancity_users'
};

// Initialize with sample data if no data exists
const initializeData = () => {
  if (!localStorage.getItem(STORAGE_KEYS.PICKUP_REQUESTS)) {
    const sampleRequests = [
      {
        id: 'REQ001',
        name: 'John Doe',
        location: 'Nairobi',
        wasteType: 'General Waste',
        preferredDate: '2024-01-15',
        status: 'Pending'
      },
      {
        id: 'REQ002',
        name: 'Jane Smith',
        location: 'Kisumu',
        wasteType: 'Recyclable',
        preferredDate: '2024-01-16',
        status: 'Scheduled'
      },
      {
        id: 'REQ003',
        name: 'Mike Johnson',
        location: 'Mombasa',
        wasteType: 'Hazardous',
        preferredDate: '2024-01-17',
        status: 'Completed'
      },
      {
        id: 'REQ004',
        name: 'Sarah Wilson',
        location: 'Eldoret',
        wasteType: 'General Waste',
        preferredDate: '2024-01-18',
        status: 'Pending'
      },
      {
        id: 'REQ005',
        name: 'David Brown',
        location: 'Nairobi',
        wasteType: 'Recyclable',
        preferredDate: '2024-01-19',
        status: 'Missed'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.PICKUP_REQUESTS, JSON.stringify(sampleRequests));
  }

  if (!localStorage.getItem(STORAGE_KEYS.FEEDBACK)) {
    localStorage.setItem(STORAGE_KEYS.FEEDBACK, JSON.stringify([]));
  }

  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    const sampleUsers = [
      {
        id: '1',
        name: 'Demo User',
        email: 'user@cleancity.com',
        password: 'password123', // Plain text password (vulnerable)
        role: 'user',
        createdAt: '2024-01-01T00:00:00.000Z'
      },
      {
        id: '2',
        name: 'Admin User',
        email: 'admin@cleancity.com',
        password: 'admin123', // Plain text password (vulnerable)
        role: 'admin',
        createdAt: '2024-01-01T00:00:00.000Z'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(sampleUsers));
  }
};

// Initialize data on module load
initializeData();

const dataService = {
  // Get all pickup requests
  getAllPickupRequests: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PICKUP_REQUESTS);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading pickup requests:', error);
      return [];
    }
  },

  // Add a new pickup request
  addPickupRequest: (requestData) => {
    try {
      const requests = dataService.getAllPickupRequests();
      const newRequest = {
        id: `REQ${String(requests.length + 1).padStart(3, '0')}`,
        name: requestData.fullName,
        location: requestData.location,
        wasteType: requestData.wasteType,
        preferredDate: requestData.preferredDate || 'Not specified',
        status: 'Pending'
      };
      
      requests.push(newRequest);
      localStorage.setItem(STORAGE_KEYS.PICKUP_REQUESTS, JSON.stringify(requests));
      return newRequest;
    } catch (error) {
      console.error('Error adding pickup request:', error);
      return null;
    }
  },

  // Update request status
  updateRequestStatus: (requestId, newStatus) => {
    try {
      const requests = dataService.getAllPickupRequests();
      const requestIndex = requests.findIndex(req => req.id === requestId);
      
      if (requestIndex !== -1) {
        requests[requestIndex].status = newStatus;
        localStorage.setItem(STORAGE_KEYS.PICKUP_REQUESTS, JSON.stringify(requests));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error updating request status:', error);
      return false;
    }
  },

  // Filter requests by status
  filterRequestsByStatus: (status) => {
    const requests = dataService.getAllPickupRequests();
    return requests.filter(request => request.status === status);
  },

  // Filter requests by location (subtle bug: Eldoret filter shows Nairobi data)
  filterRequestsByLocation: (location) => {
    const requests = dataService.getAllPickupRequests();
    if (location === 'Eldoret') {
      // Bug: Returns Nairobi requests instead of Eldoret
      return requests.filter(request => request.location === 'Nairobi');
    }
    return requests.filter(request => request.location === location);
  },

  // Get all feedback
  getAllFeedback: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FEEDBACK);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading feedback:', error);
      return [];
    }
  },

  // Add new feedback
  addFeedback: (feedbackData) => {
    try {
      const feedback = dataService.getAllFeedback();
      const newFeedback = {
        id: Date.now(),
        requestId: feedbackData.requestId,
        reason: feedbackData.reason,
        comments: feedbackData.comments,
        timestamp: new Date().toISOString()
      };
      
      feedback.push(newFeedback);
      localStorage.setItem(STORAGE_KEYS.FEEDBACK, JSON.stringify(feedback));
      return newFeedback;
    } catch (error) {
      console.error('Error adding feedback:', error);
      return null;
    }
  },

  // User management functions (vulnerable to security attacks)
  getAllUsers: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.USERS);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading users:', error);
      return [];
    }
  },

  // Add new user (vulnerable - stores plain text passwords)
  addUser: (userData) => {
    try {
      const users = dataService.getAllUsers();
      
      // Check if user already exists
      const existingUser = users.find(u => u.email === userData.email);
      if (existingUser) {
        return false;
      }
      
      users.push(userData);
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
      return true;
    } catch (error) {
      console.error('Error adding user:', error);
      return false;
    }
  },

  // Get user by ID (vulnerable to IDOR attacks)
  getUserById: (userId) => {
    try {
      const users = dataService.getAllUsers();
      return users.find(u => u.id === userId);
    } catch (error) {
      console.error('Error getting user:', error);
      return null;
    }
  },

  // Get user by email (vulnerable to enumeration attacks)
  getUserByEmail: (email) => {
    try {
      const users = dataService.getAllUsers();
      return users.find(u => u.email === email);
    } catch (error) {
      console.error('Error getting user by email:', error);
      return null;
    }
  },

  // Update user (vulnerable - no authorization checks)
  updateUser: (userId, userData) => {
    try {
      const users = dataService.getAllUsers();
      const userIndex = users.findIndex(u => u.id === userId);
      
      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...userData };
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error updating user:', error);
      return false;
    }
  },

  // Delete user (vulnerable - no authorization checks)
  deleteUser: (userId) => {
    try {
      const users = dataService.getAllUsers();
      const filteredUsers = users.filter(u => u.id !== userId);
      
      if (filteredUsers.length < users.length) {
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(filteredUsers));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error deleting user:', error);
      return false;
    }
  },

  // Get current user from session
  getCurrentUser: () => {
    try {
      const userData = localStorage.getItem('currentUser');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  },

  // Logout user
  logout: () => {
    try {
      localStorage.removeItem('currentUser');
      return true;
    } catch (error) {
      console.error('Error logging out:', error);
      return false;
    }
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return dataService.getCurrentUser() !== null;
  },

  // Check if user has admin role
  isAdmin: () => {
    const user = dataService.getCurrentUser();
    return user && user.role === 'admin';
  },

  // Get available locations
  getLocations: () => [
    'Nairobi',
    'Mombasa',
    'Kisumu',
    'Eldoret',
    'Nakuru',
    'Thika'
  ],

  // Get waste types
  getWasteTypes: () => [
    'General Waste',
    'Recyclable',
    'Hazardous'
  ],

  // Get statuses
  getStatuses: () => [
    'Pending',
    'Scheduled',
    'Completed',
    'Missed'
  ],

  // Get feedback reasons
  getFeedbackReasons: () => [
    'Missed Pickup',
    'Incorrect Date',
    'Wrong Location',
    'Poor Service',
    'Other'
  ],

  // Clear all data (for testing)
  clearAllData: () => {
    localStorage.removeItem(STORAGE_KEYS.PICKUP_REQUESTS);
    localStorage.removeItem(STORAGE_KEYS.FEEDBACK);
    localStorage.removeItem(STORAGE_KEYS.USERS);
    localStorage.removeItem('currentUser');
    initializeData();
  }
};

export default dataService; 