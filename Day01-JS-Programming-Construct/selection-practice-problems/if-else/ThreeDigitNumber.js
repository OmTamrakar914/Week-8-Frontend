// 1. Read 5 Random 3-Digit Values and Find Min & Max
let numbers = [];
for (let i = 0; i < 5; i++) {
    let num=Math.floor(Math.random() * 900) + 100; // Generates a 3-digit number (100-999)
    numbers.push(num); 
}

let min=numbers[0];
let max=numbers[0];
for(let i=0;i<5;i++){
   if(min>numbers[i]){
    min=numbers[i];
   }
   if(max<numbers[i]){
    max=numbers[i];
   }
}
console.log("Generated Numbers:", numbers);
console.log("Minimum Value:", min);
console.log("Maximum Value:", max);