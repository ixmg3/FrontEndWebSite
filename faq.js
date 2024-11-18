// Get all accordion headers
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling; // Get the content div that follows the header

        // Toggle display of the content
        if (content.style.maxHeight) {
            content.style.maxHeight = null; // Hide content
            content.style.padding = '0 1rem'; // Reset padding
            this.classList.remove('active'); // Remove active class
        } else {
            content.style.maxHeight = content.scrollHeight + "px"; // Set max height for transition
            content.style.padding = '1rem'; // Add padding for visible content
            this.classList.add('active'); // Add active class
        }
    });
});

// Select all navigation items
const navLinks = document.querySelectorAll('#navbar .nav-link navbar');

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

// Call the function to update the greeting when the page loads
updateGreetingBasedOnTime();

