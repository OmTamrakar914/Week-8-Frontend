// 1. Generate 10 random 3-digit numbers, store in an array, and find 2nd largest and 2nd smallest without sorting
function getRandomNumber() {
    return Math.floor(Math.random() * 900) + 100; // 3-digit number
}

function findSecondLargestAndSmallest(arr) {
    let firstLargest = -Infinity, secondLargest = -Infinity;
    let firstSmallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num;
        } else if (num > secondLargest && num !== firstLargest) {
            secondLargest = num;
        }

        if (num < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = num;
        } else if (num < secondSmallest && num !== firstSmallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

let randomNumbers = Array.from({ length: 10 }, getRandomNumber);
console.log("Random Numbers:", randomNumbers);
console.log("Without Sorting:", findSecondLargestAndSmallest(randomNumbers));