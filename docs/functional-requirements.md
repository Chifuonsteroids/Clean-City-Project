# CleanCity: Functional Requirements Specification (FRS)

## 📋 **Document Information**

**Document Version:** 1.0  
**Date:** [Current Date]  
**Project:** CleanCity - Waste Pickup Scheduler  
**Prepared For:** QA Testing Teams  
**Prepared By:** Development Team  

---

## 🎯 **1. Introduction**

### **1.1 Purpose**
This document defines the functional requirements for the CleanCity web application, a comprehensive waste management platform designed to help communities schedule waste pickups and promote environmental awareness.

### **1.2 Scope**
The application provides a complete waste management solution including user registration, pickup scheduling, community engagement, educational content, and administrative functions.

### **1.3 Target Users**
- **Residents:** Schedule waste pickups, access educational content
- **Administrators:** Manage requests, moderate content, generate reports
- **Community Members:** Share tips, engage in discussions, participate in challenges

---

## 🏗️ **2. System Overview**

### **2.1 Application Architecture**
- **Frontend:** React.js single-page application
- **Storage:** Browser localStorage (client-side persistence)
- **Authentication:** Role-based access control (User/Admin)
- **Deployment:** Static hosting (Netlify-ready)

### **2.2 Core Modules**
1. **Authentication System**
2. **Waste Management**
3. **Dashboard & Analytics**
4. **Content Management**
5. **Community Features**
6. **Administrative Functions**

---

## 🔐 **3. Authentication System Requirements**

### **3.1 User Registration**
**FR-001:** The system shall allow new users to register with the following information:
- Email address (required, must be valid format)
- Password (required, minimum 8 characters)
- Confirm password (required, must match password)
- Full name (required, 2-50 characters)
- Phone number (optional, valid format)

**FR-002:** The system shall validate registration data and display appropriate error messages for invalid inputs.

**FR-003:** The system shall create a new user account with "User" role upon successful registration.

### **3.2 User Login**
**FR-004:** The system shall allow registered users to log in using email and password.

**FR-005:** The system shall validate login credentials and display error messages for invalid attempts.

**FR-006:** The system shall maintain user session using localStorage.

**FR-007:** The system shall redirect users to their intended page after successful login.

### **3.3 User Logout**
**FR-008:** The system shall allow users to log out and clear session data.

**FR-009:** The system shall redirect logged-out users to the login page.

### **3.4 Role-Based Access**
**FR-010:** The system shall support two user roles: "User" and "Admin".

**FR-011:** The system shall restrict access to admin functions to users with "Admin" role.

---

## 🗑️ **4. Waste Management Requirements**

### **4.1 Pickup Scheduling**
**FR-012:** The system shall allow users to schedule waste pickup requests with the following details:
- Pickup date (required, must be future date)
- Waste type (required: General, Recyclable, Organic, Hazardous)
- Quantity (required: Small, Medium, Large)
- Special instructions (optional, max 200 characters)
- Address (required, auto-filled from user profile)

**FR-013:** The system shall validate pickup date (minimum 24 hours in advance).

**FR-014:** The system shall display available time slots for pickup scheduling.

**FR-015:** The system shall prevent scheduling multiple pickups for the same date.

### **4.2 Request Management**
**FR-016:** The system shall allow users to view their pickup request history.

**FR-017:** The system shall allow users to cancel pending pickup requests.

**FR-018:** The system shall allow users to modify pickup details before 24 hours of scheduled time.

**FR-019:** The system shall display request status (Pending, Confirmed, Completed, Cancelled).

### **4.3 Request Tracking**
**FR-020:** The system shall provide real-time status updates for pickup requests.

**FR-021:** The system shall send notifications for status changes.

**FR-022:** The system shall allow users to add feedback after pickup completion.

---

## 📊 **5. Dashboard & Analytics Requirements**

### **5.1 User Dashboard**
**FR-023:** The system shall display a personalized dashboard for logged-in users showing:
- Recent pickup requests
- Upcoming scheduled pickups
- Environmental impact statistics
- Achievement badges
- Quick action buttons

**FR-024:** The system shall calculate and display user's environmental impact metrics:
- Total waste diverted from landfill
- CO2 emissions saved
- Trees equivalent saved

### **5.2 Analytics & Reports**
**FR-025:** The system shall provide visual charts and graphs for waste management data.

**FR-026:** The system shall display community leaderboards based on environmental impact.

**FR-027:** The system shall show monthly and yearly waste management trends.

**FR-028:** The system shall provide export functionality for user data (CSV format).

### **5.3 Gamification**
**FR-029:** The system shall award badges for various achievements:
- First pickup scheduled
- 10 pickups completed
- Perfect recycling score
- Community contributor

**FR-030:** The system shall maintain user points and levels based on activities.

---

## 📝 **6. Content Management Requirements**

### **6.1 Blog System**
- The system should have a blog feature related to waste management.
- Users should be able to interact with blog content in some way.
- There should be some way for users and/or admins to manage blog posts.
- The blog may support categories, tags, or other organizational features.

### **6.2 Awareness Section**
**FR-036:** The system shall display rotating eco tips every 5 seconds.

**FR-037:** The system shall provide interactive quizzes about environmental topics.

**FR-038:** The system shall track quiz scores and provide explanations for answers.

**FR-039:** The system shall display environmental infographics with statistics.

**FR-040:** The system shall provide action buttons linking to other features.

### **6.3 Community Feed**
**FR-041:** The system shall allow users to create community posts.

**FR-042:** The system shall allow users to like and comment on community posts.

**FR-043:** The system shall display community posts in chronological order.

**FR-044:** The system shall allow users to share tips and experiences.

---

## 👥 **7. Community Features Requirements**

### **7.1 User Profiles**
**FR-045:** The system shall allow users to view and edit their profile information.

**FR-046:** The system shall display user activity history and achievements.

**FR-047:** The system shall allow users to upload profile pictures.

**FR-048:** The system shall show user statistics and environmental impact.

### **7.2 Social Features**
**FR-049:** The system shall allow users to follow other community members.

**FR-050:** The system shall provide a news feed of community activities.

**FR-051:** The system shall allow users to share achievements and milestones.

**FR-052:** The system shall support community challenges and events.

---

## ⚙️ **8. Administrative Functions Requirements**

### **8.1 Request Management**
**FR-053:** The system shall allow admins to view all pickup requests.

**FR-054:** The system shall allow admins to approve, reject, or modify pickup requests.

**FR-055:** The system shall allow admins to assign pickup dates and times.

**FR-056:** The system shall provide filtering and search capabilities for requests.

### **8.2 User Management**
**FR-057:** The system shall allow admins to view all registered users.

**FR-058:** The system shall allow admins to change user roles.

**FR-059:** The system shall allow admins to suspend or delete user accounts.

**FR-060:** The system shall provide user activity reports.

### **8.3 Content Moderation**
**FR-061:** The system shall allow admins to moderate community posts and comments.

**FR-062:** The system shall allow admins to delete inappropriate content.

**FR-063:** The system shall provide content flagging and reporting features.

**FR-064:** The system shall allow admins to create announcements.

---

## 🔔 **9. Notification System Requirements**

### **9.1 System Notifications**
**FR-065:** The system shall display notification bell with unread count.

**FR-066:** The system shall show notifications for:
- Pickup confirmations and updates
- New blog posts
- Community interactions
- Achievement unlocks

**FR-067:** The system shall allow users to mark notifications as read.

**FR-068:** The system shall provide notification history.

---

## 📱 **10. User Interface Requirements**

### **10.1 Responsive Design**
**FR-069:** The system shall be fully responsive and work on:
- Desktop computers (1920x1080 and above)
- Tablets (768px to 1024px)
- Mobile phones (320px to 767px)

**FR-070:** The system shall maintain functionality across all screen sizes.

### **10.2 Accessibility**
**FR-071:** The system shall comply with WCAG 2.1 AA standards.

**FR-072:** The system shall support keyboard navigation.

**FR-073:** The system shall provide alt text for all images.

**FR-074:** The system shall support screen readers.

### **10.3 Navigation**
**FR-075:** The system shall provide clear navigation menu.

**FR-076:** The system shall show breadcrumbs for complex pages.

**FR-077:** The system shall provide search functionality where applicable.

---

## 🔒 **11. Data Management Requirements**

### **11.1 Data Persistence**
**FR-078:** The system shall store all user data in browser localStorage.

**FR-079:** The system shall maintain data integrity across browser sessions.

**FR-080:** The system shall handle localStorage limitations gracefully.

### **11.2 Data Validation**
**FR-081:** The system shall validate all user inputs before processing.

**FR-082:** The system shall prevent SQL injection and XSS attacks.

**FR-083:** The system shall sanitize user-generated content.

---

## 🚀 **12. Performance Requirements**

### **12.1 Response Time**
**FR-084:** The system shall load pages within 3 seconds on standard internet connection.

**FR-085:** The system shall respond to user interactions within 1 second.

### **12.2 Browser Compatibility**
**FR-086:** The system shall work on:
- Google Chrome (latest 2 versions)
- Mozilla Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Microsoft Edge (latest 2 versions)

---

## 📋 **13. Error Handling Requirements**

### **13.1 User-Friendly Errors**
**FR-087:** The system shall display clear, actionable error messages.

**FR-088:** The system shall provide guidance for resolving common issues.

**FR-089:** The system shall handle network errors gracefully.

### **13.2 Form Validation**
**FR-090:** The system shall validate forms in real-time.

**FR-091:** The system shall prevent form submission with invalid data.

**FR-092:** The system shall highlight validation errors clearly.

---

## 🎯 **14. Business Rules**

### **14.1 Pickup Scheduling Rules**
- Users can schedule pickups up to 30 days in advance
- Minimum 24-hour notice required for pickup scheduling
- Maximum 3 pickups per week per user
- Hazardous waste requires special approval

### **14.2 User Management Rules**
- Email addresses must be unique
- Passwords must meet security requirements
- Inactive accounts are archived after 6 months
- Admin accounts cannot be deleted

### **14.3 Content Rules**
- Community posts must be appropriate and non-offensive
- Blog comments are moderated before publication
- Users can report inappropriate content
- Content older than 1 year is archived

---

## 📞 **15. Support and Maintenance**

### **15.1 Help System**
**FR-093:** The system shall provide contextual help and tooltips.

**FR-094:** The system shall include FAQ section.

**FR-095:** The system shall provide contact information for support.

### **15.2 System Monitoring**
**FR-096:** The system shall log user activities for debugging.

**FR-097:** The system shall provide error logging and reporting.

---

This FRS document provides the foundation for creating comprehensive test cases and ensuring the CleanCity application meets all functional requirements. Testers should use this document to understand the expected behavior and create test scenarios that validate each requirement. 

Students may use either Jira or GitHub Kanban (which is free and integrated with GitHub) for these requirements. 