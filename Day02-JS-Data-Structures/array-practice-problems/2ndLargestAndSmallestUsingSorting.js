// 2. Sort the array and find the 2nd largest & 2nd smallest
function getRandomNumber() {
    return Math.floor(Math.random() * 900) + 100; // 3-digit number
}

let randomNumbers = Array.from({ length: 10 }, getRandomNumber);
console.log("Random Numbers:", randomNumbers);

randomNumbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", randomNumbers);
console.log("With Sorting:", { secondSmallest: randomNumbers[1], secondLargest: randomNumbers[randomNumbers.length - 2] });