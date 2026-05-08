// ============================================
// Program: Sum of Array Numbers Using Functions
// Description: Uses a reusable function to calculate
//              the sum of all elements in an array.
// ============================================

/**
 * Calculates the sum of all numbers in an array.
 * @param {number[]} arr - Array of numbers
 * @returns {number} - Sum of all elements
 */
 function arraySum(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum;
}

// Define the array and compute the sum
let arr=[7,9,20,34,8]
let result=arraySum(arr)
console.log("sum of array numbers:",result)