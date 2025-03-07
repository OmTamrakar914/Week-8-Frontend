// 5. Unit Conversion

// a. Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log(`${inches} inches = ${feet.toFixed(2)} feet`);

// b. Convert Rectangular Plot (60ft x 40ft) to meters
let lengthFeet = 60, widthFeet = 40;
let lengthMeters = lengthFeet * 0.3048;
let widthMeters = widthFeet * 0.3048;
console.log(`Rectangular Plot: ${lengthFeet}ft x ${widthFeet}ft = ${lengthMeters.toFixed(2)}m x ${widthMeters.toFixed(2)}m`);

// c. Calculate the area of 25 such plots in acres
let areaOfOnePlotMeters = lengthMeters * widthMeters;
let totalAreaMeters = areaOfOnePlotMeters * 25;
let totalAreaAcres = totalAreaMeters / 4046.86; // 1 acre = 4046.86 sq meters
console.log(`Total Area of 25 Plots: ${totalAreaAcres.toFixed(2)} acres`);