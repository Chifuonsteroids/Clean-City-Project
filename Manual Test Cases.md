Detailed Manual Test Cases
TC ID	Page	Objective	Preconditions	Steps	Test Data	Expected Result
TC01	Home	Validate required fields	App open	Leave all fields blank and click Submit	—	Error messages shown
TC02	Home	Successful form submission	—	Fill all fields and submit	John Doe, Nairobi, General	“Request Submitted Successfully” appears
TC03	Home	Check localStorage persistence	Request submitted	Refresh page	—	Data remains visible
TC04	Dashboard	Filter requests by location	Requests exist	Select “Kisumu”	—	Only Kisumu entries shown
TC05	Feedback	Submit invalid Request ID	—	Enter XYZ999, click Submit	—	Error message shown
TC06	Feedback	Submit valid Request ID	REQ001 exists	Enter REQ001, Reason: Missed Pickup	—	“Feedback received” message
TC07	Awareness	Validate missing alt text	—	Run accessibility test	—	Missing alt attributes flagged
TC08	Admin	Update status and verify counters	Logged in as admin	Change request status to Completed	—	Status & counter update correctly
TC09	Global	Validate navigation	—	Click each nav link	—	Corresponding page loads
TC10	Global	Mobile layout check	—	Resize window to mobile view	—	Menu collapses, no overlap