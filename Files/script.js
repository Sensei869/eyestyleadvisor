const container = document.querySelector('.container'),
 pwShowHide = document.querySelector('.showHidePw'),
 pwFields = document.querySelector('.password');

// JS Code to Hide or SHow Password & change icon
// pwShowHide.forEach(eyeIcon => {
// eyeIcon.addEventListener("click",()=>{
//     pwFields.forEach(pwField =>{
//         if(pwField.type ==="password"){
//             pwField.type = "text";
//         }
//             else{
//                 pwField.type = "password";
//             }
        
//     })
// })
// })

function myFunction() {
    var x = document.getElementById("password-field");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }



// console.log("hello world", pwFields.value())