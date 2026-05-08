// ============================================
// Program: Sum of Array Numbers
// Description: Calculates the total sum of all numbers
//              in an array using a for loop.
// ============================================

// Define the marks array
let marks = [90, 78, 65, 98]

// Initialize sum accumulator to 0
let sum = 0

// Loop through each element and add to sum
for (let i = 0; i < marks.length; i++) {
    sum += marks[i]
}

// Print the array and total sum
console.log("Marks:", marks)
console.log("Total Marks:", sum)
