# 🧾 CleanCity QA Summary Report

**Date:** 9 Nov 2025
**Prepared by:** QA Lead Edwin Kariuki.
**Project:** CleanCity – Waste Pickup Scheduler
**Tech Stack:** React 18.2.0 · React Router DOM 6.3.0 · CSS3 · localStorage

---

## 🎯 Objective

The goal of this testing cycle was to verify that the CleanCity web application functions smoothly for end users — from submitting waste pickup requests to managing feedback and admin tasks — while also confirming that data stored in localStorage remains consistent across sessions.

Testing also focused on accessibility and usability to ensure the platform works well across devices and screen sizes.

---

## 🧠 Test Overview

| Area | Scope | Outcome |
| :--- | :--- | :--- |
| Functional Testing | 39 manual test cases covering all key modules | ✅ Executed |
| Exploratory Testing | 10 focused charters exploring edge cases | ✅ Completed |
| Automation | 5 initial smoke test scripts using React Testing Library | ⚙️ Implemented |
| Defect Log | 12 issues identified and logged | 🚧 Under Review |

---

## 📊 Key Observations

* **Form Validation Needs Hardening**
    Some form fields accept invalid or incomplete input (e.g., spaces-only names, past dates). These issues can lead to inconsistent data and must be addressed before production release.

* **localStorage Stability**
    Clearing browser storage while the app is running triggers JSON parsing errors. A safety check should be added before reading data.

* **Accessibility Gaps**
    Several awareness-page images are missing alt text, causing Lighthouse accessibility scores to drop below 85%. These can be easily fixed with proper labels.

* **Admin Panel Reliability**
    The “Update Status” button sometimes activates prematurely, and request counters don’t refresh immediately after status changes. This could confuse administrators managing requests.

* **Mobile Responsiveness**
    The hamburger menu overlaps with the brand logo on smaller screens. Layout tweaks or a breakpoint adjustment would resolve it.

---

## 🐞 Defect Summary

| Severity | Count | Examples |
| :--- | :--- | :--- |
| Critical | 2 | D04 – Feedback validation fails for invalid IDs; D08 – Admin button misbehavior |
| Major | 3 | D01 – Name accepts blank spaces; D06 – Missing image alt-text; D09 – Stats not updating |
| Minor | 2 | D02 – Past date allowed; D10 – Navbar overlap |
| **Total Open Defects** | **7 of 12 logged** | **—** |

---

## ⚙️ Automation Summary

Early automation was introduced using React Testing Library, focusing on key workflows:

* Pickup form validation and submission
* localStorage persistence
* Dashboard filtering
* Feedback ID validation
* Navigation consistency

These scripts are now ready to integrate into a continuous integration pipeline (e.g., GitHub Actions or Jenkins).

---

## 🚀 Recommendations

* Fix validation logic for forms to reject empty or malformed input.
* Add safe guards for localStorage parsing and missing data.
* Improve accessibility with complete alt attributes and keyboard navigation.
* Refactor Admin panel scripts to ensure counter synchronization.
* Run responsive regression tests before next release.

---

## ✅ QA Verdict

CleanCity is functionally sound for demo and educational use but **not yet production-grade**.
Once the above issues are resolved, a short regression cycle and accessibility retest are recommended before sign-off.
