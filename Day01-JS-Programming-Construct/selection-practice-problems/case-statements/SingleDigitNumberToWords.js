// 1. Read a Single Digit Number and Write in Words using Switch
function numberToWord(num) {
    switch (num) {
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        default: return "Invalid Input";
    }
}

let digit = 2; 
console.log("Number in Words:", numberToWord(digit));