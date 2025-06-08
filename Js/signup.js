let form  = document.getElementById("signup-container");
let fName = document.getElementById("first-name");
let lName = document.getElementById("last-name");
let email = document.getElementById("mail");
let passwords = document.getElementById("password");
let ConfirmpassWords = document.getElementById("confirm-password");
let Number = document.getElementById("number");
document.getElementById("LogInLink").addEventListener("click", function() {
    window.location.href = "login.html"; // Redirect to login page
});
// Number Validation


let fEroor = document.getElementById("fError");
let lEroor = document.getElementById("lError");
let nEroor = document.getElementById("nError");
let mEroor = document.getElementById("mError");

let pEroor = document.getElementById("pError");
let cpEroor = document.getElementById("cpError");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  // First Name Validation
  let firstName = fName.value.trim();
  let firstNameLength = firstName.length;
  fEroor.innerText = "";
  if (!firstName) {
    fEroor.innerText = `first name required`;
    valid = false;
  } else if (firstNameLength < 3) {
    fEroor.innerText = `length should be more than 3`;
    valid = false;
  } else if (firstNameLength > 15) {
    fEroor.innerText = `length should not exceed 15`;
    valid = false;
  }

  // Last Name Validation
lastName = lName.value.trim();

  // Password Validation
  let password = passwords.value.trim();
  let lengthOfPass = password.length;
  pEroor.innerText = "";
  if (!password) {
    pEroor.innerText = `password required`;
    valid = false;
  } else if (lengthOfPass < 6) {
    pEroor.innerText = `length should be more than 6`;
    valid = false;
  } else if (lengthOfPass > 15) {
    pEroor.innerText = `length should not exceed 15`;
    valid = false;
  }

  // Confirm Password Validation
  let ConfirmpassWord = ConfirmpassWords.value.trim();
  cpEroor.innerText = "";
  if (valid && ConfirmpassWord != password) {
    cpEroor.innerText = `password is not matching`;
  }

  //number Validation
    nEroor.innerText = "";
  let numberValue = Number.value.trim();
  if (!numberValue) {
    nEroor.innerText = "number required";
    valid = false;
  } else if (!/^\d{10}$/.test(numberValue)) {
    nEroor.innerText = "enter a valid 10-digit number";
    valid = false;
  }
  // Email Validation
  mEroor.innerText = "";
  let emailValue = email.value.trim();
  if (!emailValue) {
    mEroor.innerText = "email required";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    mEroor.innerText = "enter a valid email address";
    valid = false;
  }

  // to store the data in local storage
  if(valid){
   let userData ={
    useFirstName: firstName,
    useLastName: lastName,
    useEmail: emailValue,
    usePassword: password,
    useNumber: numberValue

   } 

   localStorage.setItem("userdata",JSON.stringify(userData));
   alert("Signup successful");
   window.location.href = "login.html";

  //  Window.location.href = "login.html"; // Redirect to login page after successful signup
    
  }
});