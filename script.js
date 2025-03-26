
var userName = document.getElementById('username');
var password = document.getElementById('userpassword');
var userErr = document.getElementById('userError');
var passErr = document.getElementById('passError');
var flag = 1;



function validateForm() {
   if (userName.value == ""){
      userErr.innerHTML = "Please enter your username";
      flag = 0;
   } else if (userName.value.length < 3){
      userErr.innerHTML = "Username must be at least 3 characters";
      flag = 0;
   }else{
      userErr.innerHTML = "";
      flag = 1;
   } //end of username validation

   if (password.value == ""){
      passErr.innerHTML = "Please enter your password";
      flag = 0;
   } else if (password.value.length < 6){
      passErr.innerHTML = "Password must be at least 6 characters";
      flag = 0;
   }else{
      passErr.innerHTML = "";
      flag = 1;
   } //end of password validation
   
   if (flag){
      return true;
   } else {
      return false;
   } //end of flag validation
}