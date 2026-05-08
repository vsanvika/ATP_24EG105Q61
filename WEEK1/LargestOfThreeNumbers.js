// ============================================
// Program: Largest of Three Numbers
// Description: Finds and prints the largest among three numbers
//              using if-else if-else conditional statements.
// ============================================

// Declare three numbers to compare
let a = 10
let b = 55
let c = 6

// Compare all three and determine the largest
if (a > b && a > c) {
    // 'a' is greater than both 'b' and 'c'
    console.log(`${a} is the largest number`)
} 
else if (b > a && b > c) {
    // 'b' is greater than both 'a' and 'c'
    console.log(`${b} is the largest number`)
} 
else {
    // 'c' is the largest (or equal to the largest)
    console.log(`${c} is the largest number`)
}