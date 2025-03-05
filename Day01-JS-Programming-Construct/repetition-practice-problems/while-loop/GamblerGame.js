// 4. Gambler's Game - Start with Rs 100, bet Re 1 until broke or reach Rs 200

let money = 100, betCount = 0, winCount = 0;
const goal = 200;

while (money > 0 && money < goal) {
    betCount++;
    let betResult = Math.random() < 0.5; // 50-50 chance

    if (betResult) {
        money++; // Win Rs 1
        winCount++;
    } else {
        money--; // Lose Rs 1
    }

    console.log(`Bet ${betCount}: ${betResult ? "Win" : "Lose"} | Money: Rs ${money}`);
}

console.log(`Game Over! Total Bets: ${betCount}, Wins: ${winCount}`);
console.log(money === goal ? "Gambler reached the goal of Rs 200!" : "Gambler is broke!");
