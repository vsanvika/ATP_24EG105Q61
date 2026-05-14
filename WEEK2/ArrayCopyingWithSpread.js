// Original array containing initial fruits
let fruits = ["apple", "banana"]


// Creating a new array using the spread operator (...)
// The spread operator copies all elements from 'fruits'
// and adds a new fruit "orange"
let moreFruits = [...fruits, "orange"]


// Display original array
console.log("Original Fruits Array:");
console.log(fruits);


// Display updated array
console.log("Updated Fruits Array:");
console.log(moreFruits);


// Check whether both arrays are different
console.log("Are both arrays different?");
console.log(fruits !== moreFruits); // true
