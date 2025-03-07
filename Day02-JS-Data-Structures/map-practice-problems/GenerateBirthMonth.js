// 2. Generate Birth Months for 50 individuals between 1992 & 1993
function generateBirthMonths() {
    let birthMonthMap = new Map();

    // Initialize months
    for (let i = 1; i <= 12; i++) {
        birthMonthMap.set(i, []);
    }

    for (let i = 1; i <= 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1;
        birthMonthMap.get(month).push(i);
    }

    console.log("Individuals grouped by Birth Month:");
    for (let [month, individuals] of birthMonthMap.entries()) {
        if (individuals.length > 0) {
            console.log(`Month ${month}: Individuals ${individuals}`);
        }
    }
}

generateBirthMonths();