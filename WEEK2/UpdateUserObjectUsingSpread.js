// Original user object
const user = {
    name: "Ravi",
    city: "Hyderabad"
};
// Create a new updated object using spread operator
// Spread operator (...) copies all properties from user
// and adds a new property "age"
const updatedUser = {...user,age: 25};
// Display original object
// Original object remains unchanged
console.log("Original User Object:");
console.log(user);
// Display updated object
console.log("Updated User Object:");
console.log(updatedUser);
// Verify objects are different
console.log("Are both objects different?");
console.log(user !== updatedUser); 
