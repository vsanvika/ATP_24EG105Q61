  const order = {
  orderId: "ORD1001",
  customer: {
   name: "Anita",
   address: {
       city: "Hyderabad", 
    pincode: 500085
   }
},
items: [
    { product: "Laptop", price: 70000 }
  ]
};
// Create a deep copy of the order object
// structuredClone() creates a completely independent copy
let deepCopy = structuredClone(order);
// Modify values in copied object

// i. Change customer city
deepCopy.customer.address.city = "Karimnagar";

// ii. Change product price
deepCopy.items[0].price = 110000;
// Display original object
// Original object remains unchanged
console.log("Original Order Object:");
console.log(order);
// Display modified deep copied object
console.log("Modified Deep Copy Object:");
console.log(deepCopy);
// Verification
console.log("Is original object unchanged?");
console.log(order.customer.address.city === "Hyderabad"); 
console.log(order.items[0].price === 70000); 
