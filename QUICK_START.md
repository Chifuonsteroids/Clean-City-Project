# 🚀 Quick Start Guide - CleanCity App

## Option 1: HTML Version (No Installation Required)

**Perfect for immediate testing!**

1. **Download the files:**
   - `index.html`
   - `styles.css` 
   - `script.js`

2. **Run the app:**
   - Double-click `index.html` to open in your browser
   - Or right-click and "Open with" your preferred browser

3. **Start testing immediately!**

## Option 2: React Version (With Node.js)

**For advanced users who want the full React experience**

1. **Install Node.js** from https://nodejs.org/
2. **Open terminal/command prompt** in the project folder
3. **Run these commands:**
   ```bash
   npm install
   npm start
   ```
4. **Open** http://localhost:3000 in your browser

## 🧪 Testing the Intentional Flaws

### 1. Home Page - Missing Date Validation
- **Test**: Submit form without selecting a date
- **Bug**: No validation error appears
- **Expected**: Should show "Date is required" error

### 2. Dashboard - Location Filter Bug  
- **Test**: Filter by "Eldoret" location
- **Bug**: Shows Nairobi requests instead
- **Expected**: Should show only Eldoret requests

### 3. Feedback Page - Validation Issues
- **Test**: Enter invalid Request ID like "ABC123" or special characters
- **Bug**: Form accepts invalid formats
- **Expected**: Should validate format like "REQ001"

### 4. Awareness Page - Accessibility Issues
- **Test**: Use screen reader on images
- **Bug**: No alt-text descriptions
- **Expected**: Images should have descriptive alt-text

### 5. Admin Panel - UI Update Bug
- **Test**: Click "Mark as Scheduled" button
- **Bug**: UI doesn't update visually
- **Expected**: Status should change immediately

## 📱 Test on Different Devices

- **Desktop**: Test all features and responsive design
- **Mobile**: Check mobile navigation and table scrolling
- **Tablet**: Verify grid layouts and form usability

## 🔧 Browser Testing

Test in multiple browsers:
- Chrome
- Firefox  
- Safari
- Edge

## 📋 Sample Test Data

**Request IDs for testing:**
- REQ001 - John Doe (Nairobi)
- REQ002 - Jane Smith (Kisumu) 
- REQ003 - Mike Johnson (Mombasa)
- REQ004 - Sarah Wilson (Eldoret)
- REQ005 - David Brown (Nairobi)

## 🎯 Testing Checklist

- [ ] Form validation (all pages)
- [ ] Filter functionality (Dashboard)
- [ ] Accessibility (Awareness page)
- [ ] UI state management (Admin panel)
- [ ] Data persistence (localStorage)
- [ ] Responsive design (mobile/tablet)
- [ ] Navigation between pages
- [ ] Error handling and messages
- [ ] Boundary testing (long inputs, special characters)
- [ ] Cross-browser compatibility

## 🆘 Need Help?

1. **Check SETUP_INSTRUCTIONS.md** for detailed setup help
2. **Read README.md** for comprehensive documentation
3. **Use browser DevTools** for debugging
4. **Test with different browsers** and devices

---

**Happy Testing! 🧪✨**

*This app is designed specifically for QA students to practice finding and documenting bugs.* 