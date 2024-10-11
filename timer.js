window.addEventListener('load', function() {
    var totalSeconds = 3600; // Example: 1 hour countdown (3600 seconds)

    function calculateTime() {
        var hour = Math.floor(totalSeconds / 3600);
        var minute = Math.floor((totalSeconds % 3600) / 60);
        var second = totalSeconds % 60;

        // Formatting the time values
        hour = hour < 10 ? '0' + hour : hour;
        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;

        // Display the timer
        document.getElementById('hour').innerHTML = hour;
        document.getElementById('min').innerHTML = minute;
        document.getElementById('sec').innerHTML = second;

        // Check if the countdown is over
        if (totalSeconds > 0) {
            totalSeconds--; // Decrease total seconds
        } else {
            clearInterval(timerInterval); // Stop the timer when it reaches 0
            alert('Time is up!');
        }
    }

    // Call calculateTime every second (1000ms)
    var timerInterval = setInterval(calculateTime, 1000);
});



// window.addEventListener('load', calculateTime);

// function calculateTime() {
//     var date = new Date();
//     var dayNumber = date.getDay();
//     var hour = date.getHours();
//     var minute = date.getMinutes();

//     var ampm = hour >= 12 ? 'PM' : 'AM';
//     var dayName = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];

//     // Convert hour to 12-hour format
//     hour = hour % 12;
//     hour = hour ? hour : 12; // Handle hour being 0

//     // Add leading zero if hour or minute is less than 10
//     hour = hour < 10 ? '0' + hour : hour;
//     minute = minute < 10 ? '0' + minute : minute;

//     document.getElementById('day').innerHTML = dayName[dayNumber];
//     document.getElementById('hour').innerHTML = hour;
//     document.getElementById('min').innerHTML = minute;
//     document.getElementById('ampm').innerHTML = ampm;

//     setTimeout(calculateTime, 200); // Update time every 200 milliseconds
// }




