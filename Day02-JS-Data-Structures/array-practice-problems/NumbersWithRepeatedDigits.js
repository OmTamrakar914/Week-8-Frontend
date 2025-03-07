// 5. Find numbers from 0-100 where digits are repeated (like 11, 22, etc.)
function findRepeatedDigits(num) {
    let result = [];
    for (let i = 10; i < num; i++) {
        let str = i.toString();
        if (str[0] === str[1]) {
            result.push(i);
        }
    }
    return result;
}

var num=100;
console.log("Repeated digit numbers:", findRepeatedDigits(num));