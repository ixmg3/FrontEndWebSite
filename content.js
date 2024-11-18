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

const giphyApiKey = 'GTOGrfWzEwuNaSRi5klx9PIyX1WiMdn8';

// Query terms for each card (related to Jujutsu Kaisen techniques)
const gifQueries = [
    'Jujutsu Kaisen Gojo Blue',
    'Jujutsu Kaisen Gojo Maximum Blue',
    'jujutsu kaisen gojo Red'
];

// Get the container to populate cards
const container = document.getElementById('gif-container');

// Function to fetch GIFs and create cards
gifQueries.forEach((query, index) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${encodeURIComponent(query)}&limit=1`)
        .then(response => response.json())
        .then(data => {
            if (data.data.length > 0) {
                const gifUrl = data.data[0].images.fixed_height.url; // Get the GIF URL
                const titles = [
                    'Cursed Technique Lapse: Blue',
                    'Cursed Technique Lapse – Maximum Cursed Energy Output: Blue',
                    'Cursed Technique Reversal: Red'
                ];
                const descriptions = [
                    'This technique allows him to create a vacuum capable of pulling in any object around him. When using this technique, anything within that range will be attracted at the same time.',
                    'As the title suggests, the technique is a more powerful version of Gojo\'s Cursed Technique Lapse: Blue with maximum energy. Through this technique, Gojo is able to create a gravitational field in a specific area.',
                    'Cursed Technique Reversal: Red has the opposite of Blue. If Blue attracts anything around him, Red is able to generate a repulsive force that repels anything within its attack range.'
                ];

                // Create and append the card
                const card = document.createElement('div');
                card.className = 'col-md-4';
                card.innerHTML = `
                    <div class="card mb-4" style="background-color: var(--text-light);">
                        <img src="${gifUrl}" class="card-img-top" alt="${titles[index]}">
                        <div class="card-body">
                            <h5 class="card-title">${titles[index]}</h5>
                            <p class="card-text">${descriptions[index]}</p>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            } else {
                console.error(`No GIFs found for query: ${query}`);
            }
        })
        .catch(error => console.error('Error fetching GIFs:', error));
});


// Call the function to update the greeting when the page loads
updateGreetingBasedOnTime();

