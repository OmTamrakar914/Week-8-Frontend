// 2. Check if a Given Day and Month is Between March 20 and June 20
const day = parseInt(process.argv[2]);  // Taking input from the command line
const month = parseInt(process.argv[3]);

if (
    (month === 3 && day >= 20) || 
    (month === 4) || 
    (month === 5) || 
    (month === 6 && day <= 20)
) {
    console.log("True");
} else {
    console.log("False");
}