// Initial Patient list
const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert(patientList);

// Global Variables
const message1 = 'Enter the new patient name:'
const message2 = 'Please select which name you would like to'


// Start of the Request
const command = prompt('Choose one: update, delete, add, reorder');

// 1. If the user typed in 'add', prompt them for a patient name, add that patient to the list, and display the list. 

if(command == "add" || command == "Add" || command == "ADD"){

  const patient = prompt(message1);

  patientList.push(patient);

  alert(patientList);
}

// 2. If the user typed in 'update', prompt them for a patient name,  prompt them for a new name, update the name to the new name, and display the list. 

if(command == "update" || command == "Update" || command == "UPDATE"){

  const replacePatient = prompt(`${message2} replace (case sensitive!):`);
  const updatePatient = prompt(message1);

  const newIndex = patientList.indexOf(replacePatient);
  if (newIndex != -1){
      patientList[newIndex] = updatePatient;
  }
  
  alert(patientList);
}

// 3. If the user typed in 'delete', prompt them for a patient name, delete that patient, and display the list.
if(command == "delete" || command == "Delete" || command == "DELETE"){

  const deletePatient = prompt(`${message2}  delete (case sensitive!):`);

  const newIndex = patientList.indexOf(deletePatient);
  if (newIndex != -1){
      // alert(patientList);
      patientList.splice(newIndex,1);
      // alert(patientList);
  }

  alert(patientList);
}

// 4. If the user typed in 'reorder', prompt them for a patient name, prompt them for another patient name, switch the two entered patients, and display the list.

if(command == "reorder" || command == "Reorder" || command == "REORDER"){

  const reorderPatient = prompt(`${message2}  reorder (case sensitive!):`);
  const changePatient = prompt(`${message2} other patient (case sensitive!):`);
  var i;
  var r;
  var t;

  for (i=0; i < patientList.length; i++) {
    if (patientList[i] === reorderPatient) {
        r = i             
    }else if (patientList[i] === changePatient){
        t = i
    }
  }

  // for (i=0; i < patientList.length; i++) {
  //   if (patientList[i] === changePatient) {
  //       t = i             
  //   }
  // }

  for (i=0; i < patientList.length; i++) {
    if (i === r) {
          patientList.splice(i,1)
          patientList.splice(i,0,changePatient);         
    }else if(i === t){
          patientList.splice(i,1);
          patientList.splice(i,0,reorderPatient);  
    }

  }
  alert(patientList);
  

  // -----------------------First Attempt----------------
//   const ReorderIndex = patientList.indexOf(reordername)
//   alert(`${ReorderIndex} 1st index`);
//   const ChangeIndex = patientList.indexOf(changePatient)
//   alert(`${ChangeIndex} 2nd index`);


//   for ( let i = 0; i < patientList.length; i++ ) {
//     if (i === Reorderindex) {
//        alert(`${patientList} before reorder`);
//       patientList.splice(ReorderIndex,0,changePatient);
//       alert(`${patientList} before removed and added changepaitent`);

//     }else if (i=== ChangeIndex){
//       alert(`${patientList} before change`);
//       patientList.splice(ChangeIndex,0,reorderPatient);
//       alert(`${patientList} before removed and added reorderpaitent`);
//     } 
//     else{

//     }
  
// }

  // alert(patientList);
}