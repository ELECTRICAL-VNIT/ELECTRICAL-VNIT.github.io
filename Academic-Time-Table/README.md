# VNIT ACADEMIC TIME TABLE

This repository contains a template of Time Table as per the Subject Slots of VNIT.

See the template [here](https://abd-01.github.io/Academic-Time-Table/template/index.html).

<!-- ![timetable](https://user-images.githubusercontent.com/63636498/126876032-b155b40f-a5b1-41b9-b7bf-1241a36cd505.png) -->
![timetable](https://user-images.githubusercontent.com/63636498/127013280-d2bd89ce-08f1-4ffe-b326-2ef84f013d5a.png)

* [EEE 5th Sem](https://abd-01.github.io/Academic-Time-Table/EEE_Sem5/index.html)
* [EEE 3rd Sem](https://abd-01.github.io/Academic-Time-Table/EEE_Sem3/index.html)
* [EEE 7th Sem](https://abd-01.github.io/Academic-Time-Table/EEE_Sem7/index.html)
* 
* Open to contribution.

# How to Use.

1. Download the [template](https://github.com/ABD-01/Academic-Time-Table/tree/main/template) folder.

2. Add the Subject Names in `subjects.js` file.
	```javascript
	"slot#": {
	    name: "Subject Name",
	    link: "Lecture Link"
	  }
	```
3. Add the Practical Batches in `subjects.js` file.

	`B#` is batch no. #. (eg. `CS-I (B5)` is Control Systems-I Batch 5)
	```javascript
	  [
	    ['slotB (B3)', 'slotC (B4)', 'slotD (B5)', 'slotE (B1)', 'slotF (B2)'], // All Practicals of slot: Wed 4:00pm-4:45pm
	    ['slotG (B2)', 'slotH (B3)', 'slotA (B4)']           // All Practicals of slot:  Wed 5:00pm-5:45pm
	  ],
	.
	.
	.
	  [
	    ['slotB (B5)', 'slotC (B1)'], // All Practicals of slot: Fri 4:00pm-4:45pm
	    ['slotG (B5)']           // All Practicals of slot: Fri 5:00pm-5:45pm
	  ], 
  	```
	Add all the practical subjects of same slot in same array.(as shown in code above). Leave the array blank if no subject is alloted to that slot. 

3. Done.

