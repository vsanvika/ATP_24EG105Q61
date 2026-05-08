
function largest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } 
    else if (b >= a && b >= c) {
        return b;
    } 
    else {
        return c;
    }
}

// Call the function with sample values and print the result
let result = largest(10, 30, 6);
console.log(`The largest number is ${result}`)