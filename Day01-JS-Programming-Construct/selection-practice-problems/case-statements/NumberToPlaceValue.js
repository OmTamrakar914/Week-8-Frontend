// 3. Read a Number 1, 10, 100, 1000, etc., and Display Unit, Ten, Hundred...
function placeValue(num) {
    switch (num) {
        case 1: return "Unit";
        case 10: return "Ten";
        case 100: return "Hundred";
        case 1000: return "Thousand";
        case 10000: return "Ten Thousand";
        case 100000: return "Lakh";
        default: return "Invalid Input";
    }
}

let place = 1000;
console.log("Place Value:", placeValue(place));