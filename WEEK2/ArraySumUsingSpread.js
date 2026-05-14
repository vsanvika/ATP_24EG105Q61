// Function to calculate sum using for...of loop
// Rest operator (...) collects all arguments into an array
function findSum(...numbers) {
    // Initialize sum variable
    let sum = 0
    // Loop through each number
    for (let number of numbers) {
        // Add current number to sum
        sum = sum + number
    }
    // Display final sum
    console.log("Sum using for...of loop:", sum)
}
// Function call
findSum(13, 89, 99, 67, 56)
// Function to calculate sum using reduce() method
function findSumUsingReduce(...numbers) {
    // reduce() adds all array elements
    let sum = numbers.reduce(
        (accumulator, element) => accumulator + element, 0)
    // Display final sum
    console.log("Sum using reduce method:", sum)
}


// Function call
findSumUsingReduce(13, 89, 99, 67, 56)
