// 1. Print table of powers of 2 up to 2^n or until 256

let n = 10;
let i = 0;
let power = 1;
console.log(`Powers of 2 up to 2^${n} (max 256):`);
while (i <= n && power <= 256) {
    console.log(`2^${i} = ${power}`);
    power *= 2;
    i++;
}
