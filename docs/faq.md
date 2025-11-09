# Frequently Asked Questions (FAQ)

## 📋 **Document Information**

**Document Version:** 1.0  
**Date:** October 30, 2025  
**Project:** CleanCity - Waste Pickup Scheduler  
**Prepared For:** QA Testing Teams  

---

## 🤔 **General Questions**

### **Q: What is the main purpose of this project?**
**A:** This is a comprehensive QA testing assessment where you'll test a real web application (CleanCity) to identify bugs, validate functionality, and demonstrate your testing skills. You'll work in teams of 3, use professional tools like Jira or GitHub Kanban (free alternative), and deliver a complete test report and presentation.

### **Q: How long do we have to complete the project?**
**A:** The project runs from November 5th to November 18th, 2025. You'll have weekly submissions every Wednesday, with the final submission due on November 18th.

### **Q: What if I can't attend the weekly meetings?**
**A:** Weekly meetings are mandatory for group leaders. If you can't attend, arrange for another team member to represent your group. Contact the Module instructor in advance if there are unavoidable conflicts.

### **Q: Can we work individually or do we have to work in teams?**
**A:** This is a team project. You must work in groups of 3 people. Team collaboration and coordination are part of the assessment criteria.

---

## 🛠️ **Technical Questions**

### **Q: What browsers do we need to test on?**
**A:** You need to test on Chrome, Firefox, Safari, and Edge. The latest versions of these browsers are required. See the [Test Environment Setup Guide](./test-environment.md) for detailed requirements.

### **Q: Do we need to install any special software?**
**A:** You'll need to set up a project management tool (Jira or GitHub Kanban, both free), install browser developer tools, and optionally install testing tools like screen recording software. See the [Test Environment Setup Guide](./test-environment.md) for a complete list.

### **Q: What if the application doesn't work on my computer?**
**A:** First, check the [Test Environment Setup Guide](./test-environment.md) for system requirements. If you're still having issues, contact the Module instructor with specific error details.

### **Q: Can we use automation tools?**
**A:** Yes! Automation testing is encouraged and can earn you bonus points (up to 10%). You can use Jest or PyTest for automated smoke tests. Document your automation strategy and results.

---

## 📊 **Project Management Tool Questions**

### **Q: How do we set up a project management tool?**
**A:** Follow the detailed [Jira Setup Guide](./jira-setup.md) for Jira, or use GitHub Kanban (Projects) for a free, integrated alternative. You'll create a project board for "CleanCity QA Testing" and set up columns for workflow.

### **Q: What types of issues should we create?**
**A:** Create Epics for major testing phases, Stories for feature testing requirements, Tasks for individual testing activities, and Bugs for defects you find. Use the custom fields for Environment, Severity, Steps to Reproduce, and Expected vs Actual (or equivalent in your chosen tool).

### **Q: How detailed should our bug reports be?**
**A:** Very detailed! Include clear titles, step-by-step reproduction steps, screenshots/videos, environment details, severity assessment, and impact analysis. Quality bug reports are a major part of your assessment.

### **Q: Can we update bug reports after creating them?**
**A:** Yes, you should update bug reports as you gather more information. Add comments, attach additional screenshots, and update the status as issues are resolved or investigated further.

### **Q: Should we include our project management board in the final submission?**
**A:** Yes! Export your complete project management board (all issues, comments, attachments) and include it as part of your final submission. This demonstrates your project management skills.

---

## 📅 **Submission Questions**

### **Q: What exactly is due each Wednesday?**
**A:** See the [Weekly Submission Requirements](./README.md#weekly-submission-requirements) section in the main README. Each week has specific deliverables including progress reports, Jira updates, and documentation.

### **Q: What format should our submissions be in?**
**A:** Weekly submissions should be in PDF format and include progress summaries, Jira screenshots, completed deliverables checklists, challenges encountered, and next week's plans.

### **Q: What if we miss a weekly submission deadline?**
**A:** Late submissions incur penalties: 10% deduction per day for weeks 1-2, 20% deduction per day for week 3. The final submission has no late acceptance.

### **Q: How do we submit our final deliverables?**
**A:** Upload your PDF report and video to Google Drive, set sharing to "Anyone with the link can view", and submit the sharing links through the designated submission portal. See [Submission Guidelines](./submission.md) for detailed instructions.

---

## 🎯 **Testing Questions**

### **Q: How many bugs should we find?**
**A:** You must find and document at least **15 bugs** in your project management tool (Jira or GitHub Kanban) by the end of the project. These should include:
- **At least 3 critical/major bugs** (high impact issues)
- **At least 5 medium bugs** (moderate impact issues)  
- **At least 7 minor/cosmetic bugs** (low impact issues)
- **Mix of categories:** functional, UI/UX, accessibility, and performance issues

Focus on quality over quantity - well-documented bugs with clear reproduction steps are more valuable than many poorly documented ones.

### **Q: What if we can't reproduce a bug we found?**
**A:** Document this in your project management tool! Intermittent bugs are common in real testing. Note the conditions when you found it, what you tried to reproduce it, and mark it as "Intermittent" or "Cannot Reproduce". However, intermittent bugs count toward your minimum total.

### **Q: Should we test on mobile devices?**
**A:** Yes! Mobile testing is required. You can use physical devices, browser responsive mode, or online simulators. Test both portrait and landscape orientations.

### **Q: What accessibility testing should we do?**
**A:** Test with screen readers (NVDA, VoiceOver), check keyboard navigation, verify color contrast, and use accessibility testing tools like axe DevTools and WAVE.

### **Q: Are there any hints about what bugs to look for?**
**A:** No hints provided! Part of being a good QA tester is developing your own testing strategy and discovering issues through systematic testing. Use the functional requirements to understand what the application should do, then test thoroughly to find where it doesn't work as expected.

### **Q: What if we can't find 15 bugs?**
**A:** If you're struggling to find bugs, try these approaches:
- Test edge cases and boundary conditions
- Try unusual user workflows
- Test with different browsers and devices
- Check accessibility compliance thoroughly
- Test performance with large datasets
- Look for UI/UX inconsistencies
- Test form validation thoroughly
- Check error handling scenarios

The application contains intentional flaws for testing practice, so thorough testing should reveal many issues.

---

## 📝 **Documentation Questions**

### **Q: How long should our final test report be?**
**A:** There's no strict page limit, but aim for comprehensive coverage. Include executive summary, test strategy, results, defect analysis, recommendations, and appendices with supporting documentation.

### **Q: What should we include in our video presentation?**
**A:** Your 5-minute video should cover project overview, key findings, demo of major issues, recommendations, and team collaboration insights. See [Video Presentation Guidelines](./video-guide.md) for detailed guidance.

### **Q: Do we need to include screenshots in our report?**
**A:** Yes! Screenshots and videos are essential for documenting bugs and demonstrating issues. Include them in both Jira bug reports and your final test report.

### **Q: Should we include our project management board in the final submission?**
**A:** Yes! Export your complete project management board (all issues, comments, attachments) and include it as part of your final submission. This demonstrates your project management skills.

---

## 👥 **Team Questions**

### **Q: How should we divide the work among team members?**
**A:** That's up to your team! Consider each member's strengths and interests. You might divide by features, testing types, or phases. Document your team structure and responsibilities in your project management tool.

### **Q: What if there's a conflict within our team?**
**A:** Try to resolve conflicts within your team first. If issues persist, contact the Module instructor. Remember that effective teamwork is part of your assessment.

### **Q: Can we get help from other teams?**
**A:** You can discuss general testing approaches and share learning resources, but each team should do their own testing and create their own deliverables. Plagiarism is not allowed.

### **Q: How do we handle team member absences?**
**A:** Plan for this possibility by documenting work in your project management tool and sharing knowledge regularly. If a team member is consistently unavailable, contact the Module instructor.

---

## 🎓 **Assessment Questions**

### **Q: How will our work be evaluated?**
**A:** Your work will be evaluated on testing thoroughness (35%), documentation quality (25%), video presentation (20%), project management (15%), and team collaboration (5%). Bonus points are available for automation testing.

### **Q: What if we find more bugs than other teams?**
**A:** Quality is more important than quantity. Focus on finding meaningful issues and documenting them well. A few well-documented critical bugs are better than many minor issues.

### **Q: Can we get feedback on our work before the final submission?**
**A:** Yes! Use the weekly meetings to get feedback on your progress. You can also ask questions during these sessions and get guidance on your approach.

### **Q: What happens if we don't complete all deliverables?**
**A:** Incomplete deliverables will result in lower grades. Focus on completing all required items to the best of your ability. Quality is more important than perfection.

---

## 🆘 **Getting Help**

### **Q: Where can we get help if we're stuck?**
**A:** 
1. Check this FAQ first
2. Review the relevant documentation
3. Ask during weekly meetings
4. Contact the Module instructor
5. Use Jira help center for technical issues

### **Q: What if we find a critical bug that breaks the application?**
**A:** Document it immediately in your project management tool with high severity. Include screenshots and detailed steps. These are exactly the types of issues you should be finding!

### **Q: Can we suggest improvements to the testing process?**
**A:** Absolutely! Your feedback is valuable. Share suggestions during weekly meetings or in your reflection documents. This shows critical thinking and engagement.

### **Q: What if we have technical difficulties with our tools?**
**A:** Document the issue and try alternative approaches. If you can't resolve it, contact the Module instructor with specific details about what you've tried and what error messages you're seeing.

---

## 📚 **Learning Questions**

### **Q: How can we improve our testing skills during this project?**
**A:** 
- Practice different testing techniques
- Research testing best practices
- Experiment with testing tools
- Learn from your team members
- Reflect on what works and what doesn't

### **Q: What resources can we use to learn more about testing?**
**A:** Check the learning resources sections in the documentation. Use online tutorials, testing blogs, and practice on other applications. The more you practice, the better you'll become.

### **Q: How can we prepare for real-world QA roles?**
**A:** Treat this project like a real job. Use professional tools, follow best practices, document everything, and collaborate effectively. This experience will be valuable for your career.

---

## 📋 For full project details, see:
- [README](./README.md) for project overview and requirements
- [Submission Guidelines](./submission.md) for all submission instructions
- [Video Presentation Guidelines](./video-guide.md) for video requirements
- [Meeting Schedule](./meeting-schedule.md) for meetings and protocols
- [Test Data](./test-data.md) for sample data and scenarios
- [Technical Specs](./technical-specs.md) for environment and compatibility
- [Jira Setup Guide](./jira-setup.md) for project management

**Remember: When in doubt, ask! It's better to clarify something early than to make assumptions that could affect your work.** 🤔✨ 
