// ============================================
// Program: Finding Smallest Number in an Array
// Description: Iterates through an array to find and print
//              the smallest number.
// ============================================

// Define the array of numbers
let arr = [10, 3, 5, 39, 56, 89, 70]

// Initialize min with the first element of the array
let min = arr[0];

// Loop through the array starting from index 1
for (let i = 1; i < arr.length; i++) {
    // Update min if current element is smaller
    if (arr[i] < min) {
        min = arr[i];
    }
}

// Print the smallest number found
console.log(`The smallest number is: ${min}`)