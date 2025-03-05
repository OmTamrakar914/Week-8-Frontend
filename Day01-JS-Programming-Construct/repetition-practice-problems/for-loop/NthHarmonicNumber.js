
// 2. Print the nth Harmonic Number (Hn = 1 + 1/2 + 1/3 + ... + 1/n)

let harmonicN = 5;
let sum = 0;
for (let i = 1; i <= harmonicN; i++) {
    sum += 1 / i;
}
console.log(`Harmonic Number H(${harmonicN}) = ${sum.toFixed(4)}`);
