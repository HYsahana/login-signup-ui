// Function to switch between Login and Signup forms
function switchForm(form) {
    if (form === 'login') {
        document.getElementById("login-box").style.display = "block"; // Show login form
        document.getElementById("signup-box").style.display = "none"; // Hide signup form
    } else {
        document.getElementById("login-box").style.display = "none"; // Hide login form
        document.getElementById("signup-box").style.display = "block"; // Show signup form
    }
}

// Login Form Validation
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById("loginEmail").value.toLowerCase();
    const password = document.getElementById("loginPassword").value;

    let valid = true;

    // Validate Email
    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        valid = false;
    }

    // Validate Password Length
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        valid = false;
    }

    if (valid) {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        // Check if stored user exists
        if (!storedUser) {
            alert("Account not found.");
        } else {
            // If email matches, check if password matches too
            if (email === storedUser.email) {
                if (password === storedUser.password) {
                    alert("Login Successful!");
                } else {
                    alert("Invalid email or password.");
                }
            } else {
                alert("Account not found.");
            }
        }
    }

    // Clear the email and password fields after login attempt (success or failure)
    document.getElementById("loginEmail").value = '';
    document.getElementById("loginPassword").value = '';
});

// Signup Form Validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value.toLowerCase();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;

    let valid = true;

    // Validate Name Length
    if (name.length < 3) {
        alert("Name must be at least 3 characters.");
        valid = false;
    }

    // Validate Email
    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        valid = false;
    }

    // Validate Password Strength
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/.test(password)) {
        alert("Password must be at least 6 characters, include an uppercase letter, a number, and a special character.");
        valid = false;
    }

    // Check if Passwords Match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        valid = false;
    }

    // Check if Email is Already Registered
    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === email) {
        alert("This email is already registered. Please log in.");
        valid = false;
    }

    if (valid) {
        // Save User to LocalStorage
        localStorage.setItem("user", JSON.stringify({ email, password }));
        alert("Signup Successful!");
    }

    // Clear the signup fields after signup attempt (success or failure)
    document.getElementById("signupName").value = '';
    document.getElementById("signupEmail").value = '';
    document.getElementById("signupPassword").value = '';
    document.getElementById("signupConfirmPassword").value = '';
});

// Email Validation Function
function validateEmail(email) {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return regex.test(email); // Returns true if email matches the regex pattern
}
