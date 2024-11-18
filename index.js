document.addEventListener("keydown", function (event) {
    // Select all focusable nav links on the current page
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    let currentIndex = -1;

    // Identify the currently focused nav link
    navLinks.forEach((link, index) => {
        if (document.activeElement === link) {
            currentIndex = index;
        }
    });

    // Handle the left arrow key (ArrowLeft)
    if (event.key === "ArrowLeft") {
        if (currentIndex > 0) {
            navLinks[currentIndex - 1].focus();
        }
    }
    // Handle the right arrow key (ArrowRight)
    else if (event.key === "ArrowRight") {
        if (currentIndex < navLinks.length - 1) {
            navLinks[currentIndex + 1].focus();
        }
    }
});

function updateGreetingBasedOnTime() {
    const date = new Date();
    const hours = date.getHours();
    let greeting;

    if (hours >= 5 && hours < 12) {
        greeting = "Good morning!";
    } else if (hours >= 12 && hours < 17) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    // Update the document title
    document.title = greeting;
}

// Call the function to update the greeting when the page loads
updateGreetingBasedOnTime();

