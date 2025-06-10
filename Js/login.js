// Function to validate the form inputs
    const form = document.querySelector('form');
 
    const mail = document.getElementById('loginEmail');
    const password = document.getElementById('loginPass');

    const mError = document.getElementById('mError');
    const pError = document.getElementById('pError');
    document.getElementById("SignUpLink").addEventListener("click", function() {
        window.location.href = "signup.html"; // Redirect to signup page
    });
    document.querySelector(".back-btn").addEventListener("click", function() {
        window.location.href = "User.html"; // Redirect to home page
    });

    form.addEventListener('submit', (e) => {    
        e.preventDefault();
        let valid = true;
        // Username Validation
      
    
        // Email Validation
        let userEmail = mail.value.trim();
        mError.innerText = "";
        if (!userEmail) {
            mError.innerText = `Email is required`;
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
            mError.innerText = `Invalid email format`;
            valid = false;
        }
        // Password Validation
        let userPassword = password.value.trim();
        let lengthOfPass = userPassword.length;
        pError.innerText = "";
        if (!userPassword) {
            pError.innerText = `Password is required`;
            valid = false;
        } else if (lengthOfPass < 6) {
            pError.innerText = `Password should be more than 6 characters`;
            valid = false;
        } else if (lengthOfPass > 15) {
            pError.innerText = `Password should not exceed 15 characters`;
            valid = false;
        }

        if(valid){
            let loginData =
            {
                email: userEmail,
                password: userPassword
            };
            console.log(loginData);

            //to comare signup data with login data
            let signupData = JSON.parse(localStorage.getItem("userdata")) || {};
            console.log(signupData);
            console.log(signupData.useFirstName);
            console.log(signupData.useEmail);
            
            
           if (
  loginData.email === signupData.useEmail &&
  loginData.password === signupData.usePassword
){
 alert(`welcome ${signupData.useFirstName}`);
 window.location.href = "Home.html"; // Redirect to home page after successful login
                console.log("Login successful");
            }else {
                alert("Invalid username or password");
            }

        }
    })

