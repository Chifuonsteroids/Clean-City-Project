# Test Data for CleanCity Application

## 📋 **Document Information**

**Document Version:** 1.0  
**Date:** [Current Date]  
**Project:** CleanCity - Waste Pickup Scheduler  
**Prepared For:** QA Testing Teams  

---

## 👤 **Test User Accounts**

### **Regular User Accounts**
```
Email: user1@test.com
Password: TestPass123
Role: User
Name: John Doe
Phone: +1-555-0101

Email: user2@test.com
Password: TestPass123
Role: User
Name: Jane Smith
Phone: +1-555-0102

Email: user3@test.com
Password: TestPass123
Role: User
Name: Mike Johnson
Phone: +1-555-0103
```

### **Admin User Accounts**
```
Email: admin@cleancity.com
Password: AdminPass123
Role: Admin
Name: System Administrator
Phone: +1-555-0001

Email: moderator@cleancity.com
Password: ModPass123
Role: Admin
Name: Content Moderator
Phone: +1-555-0002
```

### **Test Account for Registration Testing**
```
Email: newuser@test.com
Password: NewPass123
Name: New Test User
Phone: +1-555-9999
```

---

## 🗑️ **Sample Pickup Requests**

### **Pending Requests**
```json
{
  "id": 1,
  "userId": "user1@test.com",
  "pickupDate": "2025-07-15",
  "wasteType": "General",
  "quantity": "Medium",
  "status": "Pending",
  "specialInstructions": "Please ring doorbell when arriving",
  "address": "123 Main St, City, State 12345"
}
```

### **Confirmed Requests**
```json
{
  "id": 2,
  "userId": "user2@test.com",
  "pickupDate": "2025-07-12",
  "wasteType": "Recyclable",
  "quantity": "Large",
  "status": "Confirmed",
  "specialInstructions": "",
  "address": "456 Oak Ave, City, State 12345"
}
```

### **Completed Requests**
```json
{
  "id": 3,
  "userId": "user3@test.com",
  "pickupDate": "2025-07-10",
  "wasteType": "Organic",
  "quantity": "Small",
  "status": "Completed",
  "specialInstructions": "Backyard access",
  "address": "789 Pine Rd, City, State 12345"
}
```

---

## 📝 **Sample Blog Posts**

### **Published Posts**
```json
{
  "id": 1,
  "title": "5 Ways to Reduce Household Waste",
  "content": "Simple tips to cut down on daily waste and help the environment...",
  "author": "EcoTeam",
  "date": "2025-06-01",
  "tags": ["Tips", "Household"],
  "featured": true
}
```

### **Draft Posts**
```json
{
  "id": 4,
  "title": "Understanding Recycling Symbols",
  "content": "A quick guide to decoding recycling labels on packaging...",
  "author": "Admin",
  "date": "2025-05-20",
  "tags": ["Recycling", "Education"],
  "featured": false
}
```

---

## 👥 **Sample Community Posts**

### **User Posts**
```json
{
  "id": 1,
  "content": "Just scheduled my weekly pickup! CleanCity makes it so easy to keep our neighborhood clean.",
  "author": "Sarah J.",
  "date": "2025-06-01",
  "likes": 12,
  "comments": 3
}
```

### **Admin Posts**
```json
{
  "id": 3,
  "content": "Our street looks amazing after the cleanup event! Thanks everyone for participating.",
  "author": "Admin",
  "date": "2025-05-28",
  "likes": 15,
  "comments": 5
}
```

---

## 🧪 **Test Scenarios Data**

### **Form Validation Test Cases**

#### **Registration Form**
- **Valid Data:**
  - Email: valid@email.com
  - Password: ValidPass123
  - Confirm Password: ValidPass123
  - Name: Valid Name
  - Phone: +1-555-1234

- **Invalid Data:**
  - Email: invalid-email
  - Password: short
  - Confirm Password: mismatch
  - Name: ""
  - Phone: invalid-phone

#### **Login Form**
- **Valid Credentials:**
  - Email: user1@test.com
  - Password: TestPass123

- **Invalid Credentials:**
  - Email: user1@test.com
  - Password: WrongPassword

#### **Pickup Scheduling Form**
- **Valid Data:**
  - Date: Tomorrow's date
  - Waste Type: General
  - Quantity: Medium
  - Instructions: "Please ring doorbell"

- **Invalid Data:**
  - Date: Yesterday's date
  - Waste Type: (empty)
  - Quantity: (empty)
  - Instructions: (very long text > 200 chars)

### **Boundary Testing Data**

#### **Date Boundaries**
- **Minimum Date:** Tomorrow (24 hours from now)
- **Maximum Date:** 30 days from today
- **Invalid Dates:** Today, Yesterday, 31 days from today

#### **Text Input Boundaries**
- **Name:** 2-50 characters
- **Email:** Valid email format
- **Password:** 8+ characters
- **Instructions:** 0-200 characters

#### **Numeric Boundaries**
- **Phone:** Valid phone format
- **Quantity:** Small, Medium, Large only

---

## 🔍 **Edge Case Test Data**

### **Special Characters in Inputs**
```
Name: O'Connor-Smith Jr.
Email: test+tag@domain.com
Phone: +1 (555) 123-4567
Instructions: "Special chars: !@#$%^&*()_+-=[]{}|;':\",./<>?"
```

### **Unicode and International Characters**
```
Name: José María García-López
Email: 测试@example.com
Instructions: 中文测试数据
```

### **Very Long Inputs**
```
Name: Very Long Name That Exceeds The Maximum Character Limit And Should Be Rejected By The System
Email: verylongemailaddress@verylongdomainname.com
Instructions: Very long instructions that exceed the 200 character limit and should be rejected by the system validation rules...
```

### **Empty and Whitespace Inputs**
```
Name: "   " (whitespace only)
Email: ""
Password: ""
Instructions: "   " (whitespace only)
```

---

## 📊 **Performance Test Data**

### **Large Dataset for Load Testing**
- **Users:** 1000+ user accounts
- **Pickup Requests:** 5000+ requests
- **Blog Posts:** 100+ articles
- **Community Posts:** 2000+ posts
- **Comments:** 10000+ comments

### **Storage Limits**
- **localStorage Limit:** ~5-10MB per domain
- **Test Data Size:** Monitor localStorage usage during testing

---

## 🎯 **Accessibility Test Data**

### **Screen Reader Test Content**
- **Alt Text:** Test images with and without alt text
- **ARIA Labels:** Test form fields with and without ARIA labels
- **Keyboard Navigation:** Test all interactive elements
- **Color Contrast:** Test text with various background colors

### **Mobile Test Data**
- **Device Sizes:** iPhone SE, iPhone 12, iPad, Android devices
- **Orientation:** Portrait and landscape modes
- **Touch Targets:** Minimum 44x44px for touch interactions

---

## 🔒 **Security Test Data**

### **XSS Test Payloads**
```html
<script>alert('XSS')</script>
<img src="x" onerror="alert('XSS')">
javascript:alert('XSS')
```

### **SQL Injection Test Payloads**
```
' OR '1'='1
'; DROP TABLE users; --
' UNION SELECT * FROM users --
```

### **Input Sanitization Tests**
```
<strong>Bold Text</strong>
<script>alert('test')</script>
<img src="x" onerror="alert('test')">
```

---

## 📱 **Browser Compatibility Test Data**

### **Browser-Specific Features**
- **Chrome:** Latest version features
- **Firefox:** Mozilla-specific features
- **Safari:** WebKit-specific features
- **Edge:** Chromium-based features

### **Device-Specific Features**
- **Desktop:** Mouse and keyboard interactions
- **Tablet:** Touch and pen interactions
- **Mobile:** Touch, gesture, and orientation changes

---

## 📋 **Test Environment Setup Data**

### **Network Conditions**
- **Fast 3G:** 1.6 Mbps down, 768 Kbps up
- **Slow 3G:** 780 Kbps down, 330 Kbps up
- **Offline:** No network connection

### **Storage Conditions**
- **Full localStorage:** Simulate storage limit reached
- **Cleared localStorage:** Fresh browser state
- **Corrupted Data:** Invalid JSON in localStorage

---

## 🎬 **Video Recording Test Data**

### **Demo Scenarios for Video**
1. **User Registration Flow**
2. **Pickup Scheduling Process**
3. **Admin Panel Functions**
4. **Blog and Community Features**
5. **Accessibility Testing**
6. **Cross-Browser Testing**
7. **Mobile Responsiveness**
8. **Performance Testing**

### **Bug Demonstration Data**
- **Critical Bugs:** System-breaking issues
- **Major Bugs:** Significant functionality issues
- **Minor Bugs:** UI/UX issues
- **Cosmetic Bugs:** Visual issues

---

## 📋 For full project details, see:
- [README](./README.md) for project overview and requirements
- [Submission Guidelines](./submission.md) for all submission instructions
- [Video Presentation Guidelines](./video-guide.md) for video requirements
- [FAQ](./faq.md) for common questions
- [Meeting Schedule](./meeting-schedule.md) for meetings and protocols
- [Technical Specs](./technical-specs.md) for environment and compatibility
- [Jira Setup Guide](./jira-setup.md) for project management tool setup (Jira or GitHub Kanban are both acceptable)

This test data should be used to create comprehensive test scenarios and validate all aspects of the CleanCity application functionality. 