// let emailId = document.querySelector(".input-group #email");
// let password = document.querySelector(".input-group #password");
// let signupBtn = document.querySelector("#Sign-up");
// let loginId = document.querySelector("#loginEmail");
// let loginpass = document.querySelector("#loginPass");
// let loginBtn = document.querySelector("#login-btn");

// signupBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     const emailVal = emailId.value;
//     const passwordVal = password.value;

//     // Save both email and password
//     localStorage.setItem("userId", emailVal);
//     localStorage.setItem("userPass", passwordVal);

//     console.log("Signup Email:", emailVal);
//     console.log("Signup Password:", passwordVal);

//     alert("Sign-up successful!");
    
// });

// document.querySelector(".email").addEventListener("click", () => {
//     document.querySelector(".login-form").style.display = "none";
//     document.querySelector(".signup-form").style.display = "block";
// });

// document.querySelectorAll('.back-btn').forEach(btn => {
//     btn.addEventListener("click", () => {
//         document.querySelector(".signup-form").style.display = "none";
//         document.querySelector(".signin-form").style.display = "none";
//         document.querySelector(".login-form").style.display = "block";
//     });
// });

// document.querySelector("#LogInLink").addEventListener("click", () => {
//     document.querySelector(".signup-form").style.display = "none";
//     document.querySelector(".signin-form").style.display = "block";
// });

// document.querySelector("#SignUpLink").addEventListener("click", () => {
//     document.querySelector(".signin-form").style.display = "none";
//     document.querySelector(".signup-form").style.display = "block";
// });

// document.querySelectorAll(".input-group input").forEach(input => {
//     input.addEventListener("input", function () {
//         validateInput(this);
//     });
// });

// function validateInput(input) {
//     let isValid = true;

//     if (input.type === "text") {
//         isValid = input.value.trim().length >= 3;
//     } else if (input.type === "email") {
//         isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
//     } else if (input.type === "password") {
//         isValid = input.value.length >= 6;
//     }

//     input.classList.remove("valid", "invalid");

//     if (isValid) {
//         input.classList.add("valid");
//     } else {
//         input.classList.add("invalid");
//     }
// }

// loginBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     const loginIds = loginId.value;
//     const loginpasss = loginpass.value;

//     const LocaluserId = localStorage.getItem("userId");
//     const Localuserpass = localStorage.getItem("userPass");

//     if (loginIds === LocaluserId && loginpasss === Localuserpass) {
//         alert("Login Successful");
//     } else {
//         alert("Invalid credentials");
//     }
// });
// localStorage.clear();

document.querySelector(".email").addEventListener("click", () => {

window.location.href = "login.html";
})