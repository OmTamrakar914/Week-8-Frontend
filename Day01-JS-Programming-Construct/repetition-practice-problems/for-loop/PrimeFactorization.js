// 6. Prime Factorization of a Number
function primeFactorization(n) {
    console.log(`Prime factors of ${n}:`);
    
    // Print the number of 2s that divide n
    while (n % 2 === 0) {
        console.log(2);
        n /= 2;
    }

    // Check odd numbers from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            console.log(i);
            n /= i;
        }
    }

    // If n is still prime and greater than 2, print it
    if (n > 2) console.log(n);
}

let factorNum = 10; 
primeFactorization(factorNum);