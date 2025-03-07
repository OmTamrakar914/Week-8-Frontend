// 1. Rolling a die until one number reaches 10 times
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollUntilTenTimes() {
    let rollCounts = new Map();
    let maxReached = false;

    // Initialize the map with values 0 for each die face
    for (let i = 1; i <= 6; i++) {
        rollCounts.set(i, 0);
    }

    while (!maxReached) {
        let roll = rollDie();
        rollCounts.set(roll, rollCounts.get(roll) + 1);

        if (rollCounts.get(roll) === 10) {
            maxReached = true;
        }
    }

    console.log("Final Roll Counts:", Object.fromEntries(rollCounts));

    let maxValue = Math.max(...rollCounts.values());
    let minValue = Math.min(...rollCounts.values());

    let maxNumbers = [...rollCounts.entries()].filter(([key, value]) => value === maxValue).map(([key]) => key);
    let minNumbers = [...rollCounts.entries()].filter(([key, value]) => value === minValue).map(([key]) => key);

    console.log("Number(s) with Maximum Rolls:", maxNumbers);
    console.log("Number(s) with Minimum Rolls:", minNumbers);
}

rollUntilTenTimes();