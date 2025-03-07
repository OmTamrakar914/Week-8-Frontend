// 4. Find triplets whose sum is zero
function findTriplets(arr) {
    let n = arr.length;
    let triplets = [];

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return triplets;
}

let nums = [-1, 0, 1, 2, -1, -4]; 
console.log("Triplets summing to zero:", findTriplets(nums));