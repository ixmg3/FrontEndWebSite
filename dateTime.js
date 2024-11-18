function updateDateTime() {
    const dayElement = document.getElementById("day");
    const monthYearElement = document.getElementById("month-year");
    const timeElement = document.getElementById("time");

    const date = new Date();

    // Formatting options
    const dayOptions = { weekday: 'long' };
    const monthYearOptions = { month: 'long', year: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };

    // Format and display
    const day = date.toLocaleDateString('en-US', dayOptions);
    const monthYear = date.toLocaleDateString('en-US', monthYearOptions);
    const time = date.toLocaleTimeString('en-US', timeOptions);

    // Update the HTML elements
    dayElement.textContent = day;
    monthYearElement.textContent = monthYear;
    timeElement.textContent = time;
}

// Update the time every minute
setInterval(updateDateTime, 60000);
updateDateTime();  // Initial call to display the date and time immediately
