// 3. Read a Number 1, 10, 100, 1000, etc., and Display Unit, Ten, Hundred,...
function placeValue(num) {
    if (num === 1) return "Unit";
    else if (num === 10) return "Ten";
    else if (num === 100) return "Hundred";
    else if (num === 1000) return "Thousand";
    else if (num === 10000) return "Ten Thousand";
    else if (num === 100000) return "Lakh";
    else return "Invalid Input";
}

let place = 1000; 
console.log("Place Value:", placeValue(place));