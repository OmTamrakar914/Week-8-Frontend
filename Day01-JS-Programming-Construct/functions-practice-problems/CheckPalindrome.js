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

// 2. Function to Check if a Number is a Palindrome
function isPalindrome(num) {
    let strNum = num.toString();
    let reversedStr = strNum.split("").reverse().join("");
    return strNum === reversedStr;
}

// Async function to check if two numbers are palindromes
async function checkPalindromeNumbers() {
    let num1 = await getUserInput("Enter first number: ");
    let num2 = await getUserInput("Enter second number: ");

    console.log(`${num1} is ${isPalindrome(num1) ? "a Palindrome" : "not a Palindrome"}`);
    console.log(`${num2} is ${isPalindrome(num2) ? "a Palindrome" : "not a Palindrome"}`);

    rl.close(); // Close readline interface after input is complete
}

// Run the function
checkPalindromeNumbers();
