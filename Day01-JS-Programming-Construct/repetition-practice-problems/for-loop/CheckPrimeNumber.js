
// 3. Check if a Number is Prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let num = 29; 
console.log(`${num} is ${isPrime(num) ? "Prime" : "Not Prime"}`);