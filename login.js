function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessages = document.getElementById("errorMessages");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem("username", username); // Set session
        window.location.href = "index.html";
    } else {
        errorMessages.textContent = "Account not found. Please check your username and password.";
    }
}

function logout() {
    localStorage.removeItem("username");
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");

    if (username) {
        document.getElementById("signupButton").style.display = "none";
        document.getElementById("loginButton").style.display = "none";

        document.body.insertAdjacentHTML('beforeend', `Logged into ${username}`);
    }
    else {
        document.getElementById("logoutButton").style.display = "none";
    }
});