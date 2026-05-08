// ============================================
// Program: Searching an Element in an Array
// Description: Implements linear search using a function
//              to find the index of a target element in an array.
// ============================================

/**
 * Linear search function to find element in array.
 * @param {Array} arr - The array to search
 * @param {*} x - The element to find
 * @returns {number} - Index of the element, or -1 if not found
 */
function search(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (x === arr[i]) {
            return i; // Return the index when element is found
        }
    }
    return -1 // Return -1 if element is not in the array
}

// Define array and element to search
let arr = [10, 89, 56, 45, 65]
let x = 9

// Perform the search
let result = search(arr, x)
console.log("Array:", arr)
console.log("Element to search:", x)

// Display result based on search outcome
if (result !== -1) {
    console.log(`Element ${x} found at index ${result}`)
} else {
    console.log(`Element ${x} not found in the array`)
}