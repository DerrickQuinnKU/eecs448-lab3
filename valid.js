
window.addEventListener('DOMContentLoaded', (event) => {
  let password = document.getElementById("pword");
  let confirmpassword = document.getElementById("pword-2");
  let validate = document.getElementById("validate");
  validate.addEventListener("click", () =>{
    if(password.value != confirmpassword.value){
      alert("Try again, the passwords don't match.");
    }
    else if(password.value.length < 8){
      alert("Try again, the password is too short.");
    }
    else{
      alert("Congratulations, the passwords match and are long enough!");
    }
  })
});
