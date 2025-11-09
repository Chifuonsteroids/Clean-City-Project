# CleanCity: Waste Pickup Scheduler - QA Testing Project

## 🎯 **Project Overview**

**Project Name:** CleanCity - Waste Pickup Scheduler Web Application  
**Testing Period:** Until November 18th, 2025  
**Team Size:** 3 QA Specialists per group  
**Deliverable:** Comprehensive Test Report + 5-minute Video Presentation  

### **Primary Goals:**
1. **Identify and document all functional and non-functional defects**
2. **Validate user experience across different devices and browsers**
3. **Ensure accessibility compliance for users with disabilities**
4. **Assess security vulnerabilities and data protection measures**
5. **Evaluate performance under various load conditions**
6. **Verify cross-platform compatibility and responsive design**

---

## 📅 **Project Management & Meetings**

### **🔄 Weekly Progress Meetings**
- **Day:** Every Wednesday
- **Duration:** 10 minutes per group
- **Format:** Online meeting
- **Attendees:** Group Leaders + Module instructor
- **Purpose:** Progress review, issue resolution, guidance

*Note: Specific group assignments and meeting links will be provided separately*

### **📊 Meeting Agenda**
- **Week 1 (November 5):** Project kickoff, team formation, project management tool setup (Jira or GitHub Kanban)
- **Week 2 (November 11):** Test planning review, progress check
- **Week 3 (November 18):** Final review, submission preparation

---

## 🎫 **Project Management Tools (Jira or GitHub Kanban)**

### **📋 Project Management Requirements**
- **Platform:** Jira Cloud (free tier) or GitHub Kanban (free and integrated with GitHub)
- **Project Type:** Software Testing Project
- **Issue Types:** Bug, Task, Story, Epic (or equivalent in chosen tool)
- **Workflow:** To Do → In Progress → In Review → Done

### **🎯 Project Management Setup Instructions**
1. **Choose a Tool:**
   - Use Jira (see [Jira Setup Guide](./jira-setup.md)) or GitHub Kanban (see GitHub Projects documentation)
2. **Create Project Board:**
   - Set up columns for workflow
   - Add team members
   - Configure issue types/cards

### **📝 Project Management Usage Requirements**
- **Daily Updates:** Log all testing activities
- **Bug Reporting:** Create detailed bug reports in your chosen tool
- **Progress Tracking:** Update task status regularly
- **Documentation:** Attach screenshots and test results
- **Team Collaboration:** Assign tasks to team members

### **🔍 Bug Report Fields**
- **Summary:** Clear, concise bug title
- **Description:** Detailed steps to reproduce
- **Environment:** Browser, OS, device details
- **Severity:** Critical, Major, Minor, Cosmetic
- **Priority:** High, Medium, Low
- **Steps to Reproduce:** Numbered list
- **Expected vs Actual:** Clear comparison
- **Attachments:** Screenshots, videos, logs

---

## 🏗️ **Application Architecture**

### **Technology Stack:**
- **Frontend:** React.js with modern CSS
- **Storage:** Browser localStorage (no backend)
- **Deployment:** Netlify-ready static hosting
- **Design:** Responsive, card-based UI with CleanCity branding

### **Key Features to Test:**

#### **🔐 Authentication System**
- User registration and login
- Password validation and security
- Session management
- Role-based access (User/Admin)

#### **🗑️ Core Functionality**
- Waste pickup scheduling
- Request management and status tracking
- Form validation and error handling
- Data persistence using localStorage

#### **📊 Dashboard & Analytics**
- User dashboard with statistics
- Charts and visualizations
- Leaderboards and gamification
- Real-time data updates

#### **📝 Content Management**
- Blog system (articles, comments, admin)
- Community feed (posts, likes, interactions)
- Awareness section (tips, quizzes, infographics)

#### **👥 User Management**
- User profiles and settings
- Admin panel functionality
- Notification system
- Feedback and reporting

---

## 🧪 **Testing Strategy & STLC Implementation**

### **Phase 1: Test Planning (Days 1-2)**
- **Test Strategy Development**
  - Define testing scope and objectives
  - Identify test environments and tools
  - Create test data requirements
  - Establish defect reporting standards
  - **Jira Setup:** Create project, configure workflows

- **Test Environment Setup**
  - Browser compatibility matrix (Chrome, Firefox, Safari, Edge)
  - Device testing (Desktop, Tablet, Mobile)
  - Network conditions (3G, 4G, WiFi)
  - Accessibility testing tools

### **Phase 2: Test Design (Days 3-4)**
- **Test Case Development**
  - Functional test cases for all features
  - Non-functional test cases (Performance, Security, Usability)
  - Accessibility test cases (WCAG 2.1 compliance)
  - Cross-browser compatibility test cases
  - **Jira Tasks:** Create stories for each testing area

- **Test Data Preparation**
  - User accounts (regular users, admins)
  - Sample content (blog posts, community posts)
  - Test scenarios for edge cases

### **Phase 3: Test Execution (Days 5-8)**
- **Functional Testing**
  - User registration and authentication flows
  - Waste pickup scheduling and management
  - Blog and community features
  - Admin panel functionality
  - Form validation and error handling
  - **Jira Updates:** Log all testing activities and findings

- **Non-Functional Testing**
  - Performance testing (load times, responsiveness)
  - Security testing (data validation, XSS prevention)
  - Usability testing (user experience, navigation)
  - Accessibility testing (screen readers, keyboard navigation)

- **Compatibility Testing**
  - Cross-browser testing
  - Responsive design validation
  - Mobile device testing

### **Phase 4: Test Closure (Days 9-10)**
- **Defect Analysis and Reporting**
  - Categorize and prioritize defects
  - Create detailed bug reports in Jira
  - Provide recommendations for improvements
  - **Jira Reports:** Generate defect summary reports

- **Test Metrics and Documentation**
  - Test execution summary
  - Defect density analysis
  - Risk assessment

---

## 📊 **Testing Requirements**

### **Functional Testing**
- ✅ **User Authentication:** Registration, login, logout, password reset
- ✅ **Waste Management:** Schedule pickups, view history, cancel requests
- ✅ **Admin Functions:** Manage requests, user management, content moderation
- ✅ **Content Features:** Blog posts, comments, community interactions
- ✅ **Data Persistence:** localStorage functionality, data integrity
- ✅ **Form Validation:** Input validation, error messages, required fields

### **Non-Functional Testing**
- ✅ **Performance:** Page load times, responsiveness, smooth animations
- ✅ **Usability:** Intuitive navigation, clear UI, user-friendly design
- ✅ **Accessibility:** WCAG 2.1 compliance, screen reader compatibility
- ✅ **Security:** Input sanitization, data protection, session security
- ✅ **Compatibility:** Cross-browser support, responsive design

### **Special Focus Areas**
- ✅ **Intentional Flaws:** The application contains subtle bugs for testing practice
- ✅ **Edge Cases:** Boundary testing, error handling, unexpected inputs
- ✅ **User Experience:** Workflow efficiency, information architecture
- ✅ **Data Integrity:** localStorage reliability, data consistency

---

## 📋 **Deliverables**

### **1. Comprehensive Test Report (PDF)**
**Structure:**
- Executive Summary
- Test Strategy and Approach
- Test Environment Details
- Test Execution Summary
- Defect Analysis and Categorization
- Risk Assessment
- Recommendations and Improvements
- Test Metrics and KPIs
- **Jira/Github Kanban Reports:** Include screenshots of Jira dashboards and reports

### **2. 5-Minute Video Presentation**
**Content:**
- Project overview and testing approach
- Key findings and critical defects
- Demo of major issues discovered
- Recommendations for improvement
- Team collaboration insights
- **Jira/Github Demonstration:** Show Jira usage and project management

### **3. Supporting Documentation**
- Detailed test cases and results
- Bug reports with screenshots/videos
- Test data and scenarios used
- Tool configurations and setup guides
- **Jira/Github Export:** Complete project export with all issues and comments

---

## 🛠️ **Recommended Testing Tools**

### **Functional Testing**
- **Manual Testing:** Browser developer tools, manual test execution
- **API Testing:** Postman (if backend endpoints exist)
- **Database Testing:** Browser localStorage inspection

### **Performance Testing**
- **Page Speed:** Google PageSpeed Insights, Lighthouse
- **Load Testing:** Browser network throttling
- **Memory Usage:** Browser memory profiling

### **Accessibility Testing**
- **Screen Readers:** NVDA, JAWS, VoiceOver
- **Accessibility Tools:** axe DevTools, WAVE, Lighthouse Accessibility
- **Keyboard Navigation:** Manual testing

### **Compatibility Testing**
- **Browsers:** Chrome, Firefox, Safari, Edge
- **Devices:** Desktop, tablet, mobile
- **Responsive Design:** Browser responsive mode

### **Project Management**
- **Jira or GitHub Kanban (Projects):** Issue tracking and project management (GitHub Kanban is free and recommended for student use)
- **Google Drive:** File sharing and collaboration
- **Communication:** Teams/Zoom for meetings

---

## 🎯 **Success Criteria**

### **Quality Metrics**
- **Defect Detection Rate:** Identify all intentional and unintentional bugs
- **Test Coverage:** 100% functional feature coverage
- **Accessibility Compliance:** WCAG 2.1 AA level compliance
- **Cross-Browser Compatibility:** Consistent functionality across major browsers
- **Jira Usage:** Complete project management with all activities logged

### **Minimum Requirements**
- **Minimum Bugs Found:** At least 15 documented defects in Jira
- **Bug Categories:** Must include functional, UI/UX, accessibility, and performance issues
- **Severity Distribution:** At least 3 critical/major bugs, 5 medium bugs, 7 minor/cosmetic bugs
- **Documentation Quality:** All bugs must have clear reproduction steps and screenshots

### **Documentation Quality**
- **Clear and detailed bug reports** in Jira
- **Comprehensive test documentation**
- **Professional video presentation**
- **Actionable recommendations**
- **Jira reports and dashboards**

---

## 🏆 **Evaluation Criteria**

Your work will be evaluated based on:
1. **Testing Thoroughness** (35%)
   - Coverage of all features and edge cases
   - Quality and detail of test cases
   - Identification of both obvious and subtle defects

2. **Documentation Quality** (25%)
   - Professional test report structure
   - Clear and detailed bug reports in Jira
   - Comprehensive supporting documentation

3. **Video Presentation** (20%)
   - Professional delivery and content
   - Clear demonstration of findings
   - Effective communication of recommendations

4. **Project Management** (15%)
   - Effective Jira usage and organization
   - Regular updates and progress tracking
   - Team collaboration and task management

5. **Team Collaboration** (5%)
   - Effective teamwork and task distribution
   - Consistent communication and coordination

### **🎯 Bonus Points (Optional)**
- **Automation Testing** (Up to 10% bonus)
  - Implement automated smoke tests using Jest or PyTest
  - Create test scripts for critical user flows
  - Demonstrate automated test execution
  - Document automation strategy and results

---

## 📦 Phased Weekly Project Submission Requirements

All student groups must submit their entire project repository in phases, with a complete submission each week. This ensures continuous progress, feedback, and transparency.

### **Weekly Submission Structure**

#### **Week 1: Initial Setup & Planning**
- Due: **Wednesday, November 5, 2025**
- Repository initialized with project structure
- `tests` folder created
- Initial test plan and strategy documented (`tests/test-plan.md`)
- Team member roles and responsibilities documented
- Any initial setup scripts or environment notes

#### **Week 2: Test Design & Early Execution**
- Due: **Tuesday, November 11, 2025**
- Updated test plan and strategy
- Draft test cases and checklists (`tests/test-cases.md`)
- Early manual or automated test scripts (Jest, PyTest, Selenium, etc.)
- Initial defect/issue log (`tests/defect-log.md`)
- Documentation of any challenges or changes

#### **Week 3: Test Execution & Reporting**
- Due: **Tuesday, November 18, 2025**
- Expanded/updated test cases and scripts
- Results of executed tests (manual and automated)
- Updated defect/issue log with findings
- Screenshots, logs, or evidence of test execution
- Refined documentation and lessons learned

#### **Final Submission: Complete Project**
- Due: **Tuesday, November 18, 2025**
- All test files, scripts, and documentation in the `tests` folder
- Final test report and summary (`tests/final-report.md`)
- Complete defect/issue log
- All code, documentation, and deliverables committed to the repo
- Any additional materials required by the instructor

---

## 📚 **Learning Guidelines**

### **Documentation Usage**
- **Use this documentation as a guide** - not a substitute for your own planning
- **Apply critical thinking** to adapt these guidelines to your specific approach
- **Customize your testing strategy** based on your team's strengths and insights
- **Document your decisions** and reasoning in Jira comments

### **Independent Learning**
- **Research additional testing techniques** beyond what's provided
- **Explore testing tools** that might enhance your approach
- **Think creatively** about test scenarios and edge cases
- **Challenge assumptions** and test the unexpected

### **Team Collaboration**
- **Share knowledge** with team members
- **Provide constructive feedback** to peers
- **Document team decisions** and rationale
- **Reflect on collaboration** effectiveness

---

## 🔄 **Peer Feedback & Reflection**

### **Peer Review Process**
- **Week 2:** Review another team's testing approach
- **Week 3:** Provide feedback on test report drafts
- **Final Week:** Share insights and lessons learned

### **Reflection Requirements**
- **Individual Reflection:** Personal learning and growth
- **Team Reflection:** Collaboration effectiveness
- **Process Reflection:** Testing methodology insights
- **Future Improvement:** Recommendations for next time

---

## 📁 **Additional Documentation**

### **🧪 Testing Resources**
- [Functional Requirements Specification (FRS)](./functional-requirements.md) - Detailed functional requirements
- [Test Data](./test-data.md) - Sample data and test accounts
- [Video Presentation Guidelines](./video-guide.md) - Guidelines for 5-minute presentation
- [Jira Setup Guide](./jira-setup.md) - Detailed Jira configuration instructions

### **📋 Reference Materials**
- [Technical Specifications](./technical-specs.md) - Technology stack and architecture details
- [Test Environment Setup](./test-environment.md) - Tools and setup instructions
- [Submission Guidelines](./submission.md) - Complete submission instructions

---

## 🚀 **Getting Started**

1. **Review this project brief thoroughly** to understand your objectives
2. **Set up Jira project** following the [Jira Setup Guide](./jira-setup.md)
3. **Read the [FRS](./functional-requirements.md)** to understand what the app should do
4. **Set up your [Test Environment](./test-environment.md)** with required tools
5. **Access [Test Data](./test-data.md)** for your testing scenarios
6. **Begin systematic testing** of all features
7. **Document everything in Jira** - findings, issues, and recommendations
8. **Prepare your presentation** highlighting key discoveries

---

## 📞 **Support**

If you have questions about the documentation or need clarification:
- Review the [FAQ](./faq.md) section
- Contact the project team for additional support
- **Jira Support:** Use Jira help center for technical issues

---

**Good luck with your testing! Remember, thorough testing today prevents user frustration tomorrow.** 🧪✨

**Last Updated:** [Current Date]  
**Document Version:** 1.0  
**Project:** CleanCity - Waste Pickup Scheduler 

## 📤 Submission & Deliverables
See [Submission Guidelines](./submission.md) for full details on how to submit, file naming, and required deliverables.

## 🎬 Video Presentation
See [Video Presentation Guidelines](./video-guide.md) for detailed structure, timing, and creative ideas.

## ❓ Frequently Asked Questions
See [FAQ](./faq.md) for answers to common questions about the project, process, and requirements.

## 🗓️ Meeting Schedule & Protocols
See [Meeting Schedule](./meeting-schedule.md) for weekly agenda, preparation, and templates.

## 🧪 Test Data & Environment
See [Test Data](./test-data.md) and [Technical Specs](./technical-specs.md) for sample data, environment setup, and browser/device requirements.

## 🛠️ Jira/Github Kanban & Project Management
See [Jira Setup Guide](./jira-setup.md) for step-by-step Jira configuration, best practices, and troubleshooting.

**Note:** Students may use either Jira or GitHub Kanban (Projects) for project management. GitHub Kanban is free and integrated with your repository, making it a convenient choice for student teams.

---

## 📈 Course Enhancements for Modern QA Education

To further align this course with industry standards and real-world QA expectations, the following enhancements are recommended:

### Assessment & Deliverables
- **Project Work:** Capstone QA project including test plan, test cases, defect logging, automation scripts, and a final presentation/demo.
- **Weekly Assignments:** Short tasks (e.g., bug reports, test cases, tool usage).
- **Quizzes:** Reinforce ISTQB concepts and terminology.
- **Participation:** Group discussions, peer reviews, and tool demos.

### Modern QA Practices: CI/CD Integration (Optional)
- **Objectives:** Understand automated testing in CI/CD pipelines; exposure to tools like GitHub Actions, Jenkins.
- **Content:** Overview of CI/CD, automated tests in pipelines, tool demos.
- **Activity:** Demo of a simple CI pipeline running automated tests on code push.

### Accessibility Testing
- **Objectives:** Understand accessibility's role in software quality; learn basic accessibility testing techniques.
- **Content:** WCAG standards, tools (axe DevTools, WAVE, screen readers), common issues.
- **Activity:** Hands-on evaluation of a sample web page with accessibility tools.

### Soft Skills for Testers
- **Objectives:** Recognize the importance of communication, teamwork, and reporting in QA.
- **Content:** Effective bug reporting, communicating with stakeholders, teamwork in agile, feedback.
- **Activity:** Role-play defect reporting, collaborative test planning, group exercises.

---

*These enhancements ensure students gain practical, modern, and well-rounded QA skills, preparing them for ISTQB certification and real-world software testing roles.*

---

## 📂 Test Files, Automation, and Documentation Submission

All student groups must:
- Create a folder named `tests` in the root of their

