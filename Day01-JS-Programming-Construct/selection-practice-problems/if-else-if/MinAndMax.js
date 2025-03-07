// 4. Perform Arithmetic Operations and Find Min & Max
function arithmeticOperations(a, b, c) {
    let result1 = a + b * c;
    let result2 = a % b + c;
    let result3 = c + a / b;
    let result4 = a * b + c;

    let max = Math.max(result1, result2, result3, result4);
    let min = Math.min(result1, result2, result3, result4);

    console.log(`Results: 
    1. a + b * c = ${result1}
    2. a % b + c = ${result2}
    3. c + a / b = ${result3}
    4. a * b + c = ${result4}`);

    console.log("Maximum Value:", max);
    console.log("Minimum Value:", min);
}

let a = 5, b = 3, c = 7; 
arithmeticOperations(a, b, c);