// 3. Prime factorization and storing prime factors in an array
function primeFactors(n) {
    let factors = [];
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    return factors;
}

let num = 60;
console.log(`Prime Factors of ${num}:`, primeFactors(num));