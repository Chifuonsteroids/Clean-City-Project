# Technical Specifications - CleanCity Application

## 📋 **Document Information**

**Document Version:** 1.0  
**Date:** [Current Date]  
**Project:** CleanCity - Waste Pickup Scheduler  
**Prepared For:** QA Testing Teams  

---

## 🏗️ **Technology Stack**

### **Frontend Framework**
- **Framework:** React.js 18.x
- **Language:** JavaScript (ES6+)
- **Build Tool:** Create React App
- **Package Manager:** npm

### **Styling & UI**
- **CSS Framework:** Custom CSS with modern features
- **Responsive Design:** CSS Grid, Flexbox, Media Queries
- **Icons:** Font Awesome, Material Icons
- **Animations:** CSS Transitions, Keyframes
- **Color Scheme:** CleanCity brand colors (Green, Blue, White)

### **Data Storage**
- **Primary Storage:** Browser localStorage
- **Data Format:** JSON
- **Persistence:** Client-side only (no backend)
- **Data Structure:** Organized by feature modules

### **Development Tools**
- **Code Editor:** VS Code recommended
- **Version Control:** Git
- **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Development Server:** React development server

---

## 🏛️ **Application Architecture**

### **Component Structure**
```
src/
├── components/
│   ├── Home.js              # Waste pickup request form
│   ├── Dashboard.js         # Analytics and charts
│   ├── Admin.js            # Admin panel
│   ├── Feedback.js         # Report missed pickups
│   ├── Awareness.js        # Eco tips and quizzes
│   ├── Login.js            # Authentication
│   ├── Register.js         # User registration
│   ├── NotificationBell.js # Notification system
│   ├── blog/               # Blog system components
│   ├── community/          # Community features
│   └── profile/            # User profile management
├── services/
│   ├── authService.js      # Authentication logic
│   └── dataService.js      # Data management
└── App.js                  # Main application component
```

### **Data Flow Architecture**
1. **User Input** → **Component Validation** → **localStorage Update**
2. **Data Retrieval** → **localStorage Read** → **Component Display**
3. **State Management** → **React State** → **UI Updates**

### **Module Organization**
- **Authentication Module:** User registration, login, session management
- **Waste Management Module:** Pickup scheduling, request tracking
- **Admin Module:** User management, content moderation
- **Content Module:** Blog posts, community interactions
- **Analytics Module:** Charts, statistics, leaderboards
- **Notification Module:** Real-time alerts and updates

---

## 💾 **Data Storage Structure**

### **localStorage Keys**
```javascript
// User Management
'cleanCity_users'           // Array of user objects
'cleanCity_currentUser'     // Currently logged in user

// Waste Management
'cleanCity_pickupRequests'  // Array of pickup requests
'cleanCity_pickupHistory'   // Historical pickup data

// Content Management
'cleanCity_blogPosts'       // Array of blog posts
'cleanCity_communityPosts'  // Array of community posts
'cleanCity_comments'        // Array of comments

// Admin Data
'cleanCity_adminUsers'      // Array of admin users
'cleanCity_systemSettings'  // Application settings

// Analytics
'cleanCity_analytics'       // Usage statistics
'cleanCity_leaderboard'     // User rankings

// Notifications
'cleanCity_notifications'   // User notifications
```

### **Data Models**

#### **User Object**
```javascript
{
  id: "unique_user_id",
  username: "user@example.com",
  password: "hashed_password",
  firstName: "John",
  lastName: "Doe",
  role: "user", // "user" or "admin"
  joinDate: "2025-01-01",
  profile: {
    avatar: "url_to_avatar",
    bio: "User bio",
    preferences: {}
  },
  stats: {
    totalPickups: 0,
    points: 0,
    badges: []
  }
}
```

#### **Pickup Request Object**
```javascript
{
  id: "unique_request_id",
  userId: "user_id",
  address: "123 Main St",
  wasteType: "general",
  quantity: "medium",
  scheduledDate: "2025-01-15",
  status: "pending", // "pending", "confirmed", "completed", "cancelled"
  createdAt: "2025-01-10T10:00:00Z",
  updatedAt: "2025-01-10T10:00:00Z",
  notes: "Additional notes"
}
```

#### **Blog Post Object**
```javascript
{
  id: "unique_post_id",
  title: "Post Title",
  content: "Post content in HTML format",
  author: "user_id",
  publishDate: "2025-01-10T10:00:00Z",
  status: "published", // "draft", "published", "archived"
  tags: ["environment", "tips"],
  likes: 0,
  comments: ["comment_id_1", "comment_id_2"]
}
```

---

## 🔧 **Technical Implementation Details**

### **Authentication System**
- **Registration:** Email validation, password strength checking
- **Login:** Session management using localStorage
- **Logout:** Session cleanup and redirect
- **Password Security:** Client-side hashing (for demo purposes)
- **Role-based Access:** User vs Admin permissions

### **Form Validation**
- **Client-side Validation:** HTML5 validation attributes
- **Custom Validation:** JavaScript validation functions
- **Error Handling:** User-friendly error messages
- **Real-time Validation:** Live feedback during input

### **Responsive Design**
- **Breakpoints:** Mobile (320px), Tablet (768px), Desktop (1024px+)
- **Grid System:** CSS Grid for layout
- **Flexible Images:** Responsive image handling
- **Touch-friendly:** Mobile-optimized interactions

### **Performance Optimizations**
- **Lazy Loading:** Components loaded on demand
- **Image Optimization:** Compressed images and lazy loading
- **Code Splitting:** Separate bundles for different features
- **Caching:** localStorage for data persistence

---

## 🌐 **Browser Compatibility**

### **Supported Browsers**
- **Chrome:** Version 90+
- **Firefox:** Version 88+
- **Safari:** Version 14+
- **Edge:** Version 90+

### **Required Features**
- **ES6+ Support:** Arrow functions, destructuring, modules
- **localStorage API:** Data persistence
- **CSS Grid & Flexbox:** Layout system
- **Fetch API:** Data handling
- **Service Workers:** Offline functionality (optional)

### **Mobile Support**
- **iOS Safari:** Version 14+
- **Chrome Mobile:** Version 90+
- **Samsung Internet:** Version 14+
- **Touch Events:** Swipe gestures, touch feedback

---

## 🔒 **Security Considerations**

### **Client-side Security**
- **Input Sanitization:** XSS prevention
- **Data Validation:** Client-side validation
- **Session Management:** Secure session handling
- **Error Handling:** No sensitive data in error messages

### **Data Protection**
- **localStorage Security:** No sensitive data storage
- **Password Handling:** Client-side hashing (demo only)
- **Data Encryption:** Not implemented (demo application)

### **Vulnerability Awareness**
- **XSS Vulnerabilities:** Present for testing purposes
- **CSRF Protection:** Not implemented (no backend)
- **SQL Injection:** Not applicable (no database)
- **Authentication Bypass:** Intentional flaws for testing

---

## 📱 **Mobile Responsiveness**

### **Viewport Configuration**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### **Responsive Breakpoints**
```css
/* Mobile First Approach */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

### **Touch Interactions**
- **Touch Targets:** Minimum 44px for buttons
- **Swipe Gestures:** Navigation and interactions
- **Hover States:** Disabled on touch devices
- **Keyboard Support:** Full keyboard navigation

---

## 🎨 **UI/UX Design System**

### **Color Palette**
```css
:root {
  --primary-green: #2E7D32;
  --secondary-green: #4CAF50;
  --accent-blue: #2196F3;
  --text-dark: #212121;
  --text-light: #757575;
  --background-light: #FAFAFA;
  --white: #FFFFFF;
  --error-red: #F44336;
  --warning-orange: #FF9800;
  --success-green: #4CAF50;
}
```

### **Typography**
- **Primary Font:** 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Heading Sizes:** h1 (2.5rem), h2 (2rem), h3 (1.5rem)
- **Body Text:** 1rem (16px)
- **Line Height:** 1.5 for readability

### **Component Design**
- **Cards:** Rounded corners (8px), subtle shadows
- **Buttons:** Consistent styling, hover effects
- **Forms:** Clear labels, validation feedback
- **Navigation:** Intuitive menu structure

---

## 🔍 **Testing Considerations**

### **Technical Testing Areas**
- **localStorage Functionality:** Data persistence and retrieval
- **Form Validation:** Input validation and error handling
- **Responsive Design:** Cross-device compatibility
- **Performance:** Page load times and responsiveness
- **Accessibility:** WCAG 2.1 compliance

### **Known Technical Limitations**
- **No Backend:** All data stored locally
- **No Real-time Updates:** Manual refresh required
- **Limited Data Persistence:** Data lost on browser clear
- **No Offline Support:** Requires internet connection
- **Client-side Only:** No server-side validation

### **Intentional Technical Flaws**
- **Memory Leaks:** Some components don't clean up properly
- **Performance Issues:** Heavy operations on main thread
- **Security Vulnerabilities:** XSS and injection flaws
- **Data Corruption:** localStorage manipulation issues
- **UI Glitches:** Race conditions in state updates

---

## 📊 **Performance Benchmarks**

### **Target Metrics**
- **First Contentful Paint:** < 2 seconds
- **Largest Contentful Paint:** < 3 seconds
- **Cumulative Layout Shift:** < 0.1
- **First Input Delay:** < 100ms
- **Time to Interactive:** < 5 seconds

### **Resource Optimization**
- **JavaScript Bundle:** < 500KB
- **CSS Bundle:** < 100KB
- **Image Optimization:** WebP format, lazy loading
- **Font Loading:** System fonts preferred

---

## 🚀 **Deployment Information**

### **Build Process**
```bash
npm run build
```

### **Static Hosting**
- **Platform:** Netlify, Vercel, or GitHub Pages
- **Build Output:** `build/` directory
- **HTTPS:** Required for production
- **Custom Domain:** Supported

### **Environment Variables**
- **Development:** `.env.local`
- **Production:** Environment-specific variables
- **API Endpoints:** Not applicable (no backend)

---

## 📚 **Development Resources**

### **Documentation**
- **React Documentation:** https://reactjs.org/docs/
- **CSS Grid Guide:** https://css-tricks.com/snippets/css/complete-guide-grid/
- **localStorage API:** https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

### **Testing Tools**
- **Browser DevTools:** Chrome, Firefox, Safari
- **Lighthouse:** Performance and accessibility testing
- **axe DevTools:** Accessibility testing
- **Postman:** API testing (if backend added)

### **Code Quality**
- **ESLint:** Code linting and formatting
- **Prettier:** Code formatting
- **TypeScript:** Type safety (optional upgrade)

---

## 📋 For full project details, see:
- [README](./README.md) for project overview and requirements
- [Submission Guidelines](./submission.md) for all submission instructions
- [Video Presentation Guidelines](./video-guide.md) for video requirements
- [FAQ](./faq.md) for common questions
- [Meeting Schedule](./meeting-schedule.md) for meetings and protocols
- [Test Data](./test-data.md) for sample data and scenarios
- [Jira Setup Guide](./jira-setup.md) for project management tool setup (Jira or GitHub Kanban are both acceptable)

**This technical specification provides the foundation for comprehensive QA testing of the CleanCity application.** 🏗️✨ 