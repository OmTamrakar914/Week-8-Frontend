const readline = require("readline");

// Create a single readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get user input (returns a Promise)
function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer.trim())); // Trim input to remove extra spaces
    });
}

// Function to check if a number is prime
function isPrime(num) {
    num = parseInt(num);
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join(""), 10);
}

//  4. Async function to check prime and palindrome prime
async function checkPrimeAndPalindromePrime() {
    let num = await getUserInput("Enter a number: ");
    num = parseInt(num);

    if (isPrime(num)) {
        console.log(`${num} is Prime.`);
        let palindromeNum = getPalindrome(num);
        console.log(`Palindrome of ${num} is ${palindromeNum}`);
        
        if (isPrime(palindromeNum)) {
            console.log(`Palindrome ${palindromeNum} is also Prime!`);
        } else {
            console.log(`Palindrome ${palindromeNum} is NOT Prime.`);
        }
    } else {
        console.log(`${num} is NOT a Prime number.`);
    }

    rl.close(); // Close the readline interface after processing
}

// Run the function
checkPrimeAndPalindromePrime();
