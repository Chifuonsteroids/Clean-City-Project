Initial Defect Log
Defect ID	Feature	Description	Severity	Priority	Steps to Reproduce	Expected Result	Actual Result	Status
D01	Home	“Full Name” field accepts only spaces	Major	High	Enter spaces and submit	Validation error	Form submits	Open
D02	Home	Date field allows past dates	Minor	Low	Pick past date	Prevent past selection	Allowed	Open
D03	Feedback	Invalid Request ID sometimes passes	Critical	High	Enter “XYZ999”	Error shown	Silent fail	Open
D04	Awareness	Missing alt text for several images	Major	Medium	Run Lighthouse audit	All have alt text	Missing	Open
D05	Admin	“Update Status” enabled without request selected	Critical	High	Open Admin page, don’t select request	Button disabled	Enabled incorrectly	Open
D06	Admin	Counters not updating after status change	Major	High	Change status	Counters update	Counters stale	Open
D07	Global	Mobile navbar overlaps brand text	Minor	Medium	Resize to mobile	Layout adjusts	Overlaps	Open