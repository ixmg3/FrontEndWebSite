const colors = ["#809bce", "#95b8d1", "#b8e0d2", "#d6eadf", "#f4f4f4"];

let currentIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex++;

    if (currentIndex >= colors.length) {
        currentIndex = 0;
    }
}
