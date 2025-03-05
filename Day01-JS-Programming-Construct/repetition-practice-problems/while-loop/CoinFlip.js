// 3. Flip Coin till Heads or Tails wins 11 times

let heads = 0, tails = 0;

while (heads < 11 && tails < 11) {
    let flip = Math.random() < 0.5 ? "Heads" : "Tails";
    flip === "Heads" ? heads++ : tails++;
    console.log(`Flip: ${flip} | Heads: ${heads} | Tails: ${tails}`);
}

console.log(`${heads === 11 ? "Heads" : "Tails"} wins 11 times!`);
