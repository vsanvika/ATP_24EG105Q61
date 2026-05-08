// This program compares two numbers and finds the largest among them.
// ============================================

// Program: Biggest of Two Numbers
// Description: Compares two numbers and prints which is larger,
//              or if they are equal.
// ============================================

// Declare two numbers to compare
let a = 10
let b = 10

// Compare and determine the result
if (a > b) {
    // If 'a' is greater than 'b', print 'a'
    console.log(`${a} is the largest number`)
}
else if (b > a) {
    // If 'b' is greater than 'a', print 'b'
    console.log(`${b} is the largest number`)
}
else {
    // If both are equal
    console.log("Both numbers are equal")
}