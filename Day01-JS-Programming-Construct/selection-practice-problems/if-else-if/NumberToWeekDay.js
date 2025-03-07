// 2. Read a Number and Display the Weekday
function numberToWeekday(num) {
    if (num === 1) return "Sunday";
    else if (num === 2) return "Monday";
    else if (num === 3) return "Tuesday";
    else if (num === 4) return "Wednesday";
    else if (num === 5) return "Thursday";
    else if (num === 6) return "Friday";
    else if (num === 7) return "Saturday";
    else return "Invalid Input";
}

let dayNumber = 4; 
console.log("Day of the Week:", numberToWeekday(dayNumber));