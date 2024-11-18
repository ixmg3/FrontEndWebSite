function validateForm() {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let errorMessages = "";

    if (username === "") {
        errorMessages += "Username is required.<br>";
    }

    if (email === "") {
        errorMessages += "Email is required.<br>";
    } else if (!validateEmail(email)) {
        errorMessages += "Please enter a valid email address.<br>";
    }

    if (password === "") {
        errorMessages += "Password is required.<br>";
    } else if (password.length < 8) {
        errorMessages += "Password must be at least 8 characters long.<br>";
    }

    if (confirmPassword === "") {
        errorMessages += "Confirm Password is required.<br>";
    } else if (password !== confirmPassword) {
        errorMessages += "Passwords do not match.<br>";
    }

    if (errorMessages !== "") {
        document.getElementById("errorMessages").innerHTML = errorMessages;
        return false;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        document.getElementById("errorMessages").innerHTML = "Username already taken. Please choose another one.";
        return false;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("You successfully signed up! Please log in.")
    window.location.href = "login.html";
    return false;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}