// 1. Print the table of powers of 2 up to 2^n

let n = 5;
console.log(`Powers of 2 up to 2^${n}:`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}