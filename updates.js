document.addEventListener("keydown", function (event) {
    const navLinks = document.querySelectorAll("#navbar .nav-link");
    let currentIndex = -1;

    // Find which link is currently focused
    navLinks.forEach((link, index) => {
        if (document.activeElement === link) {
            currentIndex = index;
        }
    });

    // Arrow Left (keyCode 37) moves focus to the previous item
    // Arrow Right (keyCode 39) moves focus to the next item
    if (event.key === "ArrowLeft") {
        if (currentIndex > 0) {
            navLinks[currentIndex - 1].focus();
        }
    } else if (event.key === "ArrowRight") {
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

document.getElementById('search-updates').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const updates = document.querySelectorAll('#updates-list .contentbox');

    updates.forEach(update => {
        const text = update.textContent.toLowerCase();
        update.parentElement.style.display = text.includes(query) ? '' : 'none';
    });
});


// Call the function to update the greeting when the page loads
updateGreetingBasedOnTime();

