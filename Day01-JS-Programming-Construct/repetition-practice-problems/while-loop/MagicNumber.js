const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMagicNumber() {
    console.log("Think of a number between 1 to 100");
    let low = 1, high = 100;

    function askQuestion() {
        let mid = Math.floor((low + high) / 2);
        rl.question(`Is your number greater than ${mid}? (yes/no): `, (answer) => {
            if (answer.toLowerCase() === "yes") {
                low = mid + 1;
            } else {
                high = mid;
            }

            if (low < high) {
                askQuestion(); // Repeat the question
            } else {
                console.log(`Your magic number is: ${low}`);
                rl.close(); // Close input stream
            }
        });
    }

    askQuestion(); // Start the questioning loop
}

findMagicNumber();
