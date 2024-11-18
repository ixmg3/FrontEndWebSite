document.querySelectorAll('.star-rating input').forEach((input) => {
    input.addEventListener('change', () => {
        const ratingValue = input.value;

        if (ratingValue === '1') {
            document.getElementById('sound1').play();
        } else if (ratingValue === '5') {
            document.getElementById('sound5').play();
        }
    });
});