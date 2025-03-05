const readline = require("readline");

// Create a single readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get user input
function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
}

// 1. Temperature Conversion (Using Case Statement)
async function temperatureConversion() {
    console.log("Choose Conversion:");
    console.log("1. Celsius to Fahrenheit");
    console.log("2. Fahrenheit to Celsius");

    let choice = await getUserInput("Enter choice (1 or 2): ");

    if (choice == "1") {
        let degC = parseFloat(await getUserInput("Enter temperature in Celsius: "));
        if (degC < 0 || degC > 100) {
            console.log("Temperature should be between 0°C and 100°C.");
        } else {
            let degF = (degC * 9/5) + 32;
            console.log(`${degC}°C = ${degF.toFixed(2)}°F`);
        }
    } 
    else if (choice == "2") {
        let degF = parseFloat(await getUserInput("Enter temperature in Fahrenheit: "));
        if (degF < 32 || degF > 212) {
            console.log("Temperature should be between 32°F and 212°F.");
        } else {
            let degC = (degF - 32) * 5/9;
            console.log(`${degF}°F = ${degC.toFixed(2)}°C`);
        }
    } 
    else {
        console.log("Invalid choice! Please enter 1 or 2.");
    }

    // Close readline once all inputs are handled
    rl.close();
}

temperatureConversion();
