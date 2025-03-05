
// 4. Unit Conversion Based on User Input
function unitConversion(option, value) {
    switch (option) {
        case 1: // Feet to Inches
            return `${value} feet = ${value * 12} inches`;
        case 2: // Feet to Meters
            return `${value} feet = ${(value * 0.3048).toFixed(2)} meters`;
        case 3: // Inches to Feet
            return `${value} inches = ${(value / 12).toFixed(2)} feet`;
        case 4: // Meters to Feet
            return `${value} meters = ${(value / 0.3048).toFixed(2)} feet`;
        default:
            return "Invalid Option";
    }
}

let option = 2;
let value = 10; 
console.log("Conversion Result:", unitConversion(option, value));