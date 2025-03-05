// 4. Find Prime Numbers in a Given Range

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function primeInRange(start, end) {
    console.log(`Prime numbers between ${start} and ${end}:`);
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

let rangeStart = 10, rangeEnd = 50;
primeInRange(rangeStart, rangeEnd);