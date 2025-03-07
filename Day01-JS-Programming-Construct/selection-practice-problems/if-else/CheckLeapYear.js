// 3. Check if a Year is a Leap Year
const year = parseInt(process.argv[2]);  // Taking input from command line
if (year >= 1000 && year <= 9999) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year");
    } else {
        console.log(year + " is NOT a Leap Year");
    }
} else {
    console.log("Enter a valid 4-digit year");
}