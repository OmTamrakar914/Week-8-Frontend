// 5. Compute Factorial of a Number
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log(`${n}! = ${fact}`);
}

let factorialNum = 7; 
factorial(factorialNum);