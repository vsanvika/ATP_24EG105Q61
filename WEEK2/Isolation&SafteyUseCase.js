//Create a deep copy of order
      //Modify in copied object:
           // i. customer.address.city
           // ii. items[0].price
            //iii. Verify original object remains unchanged
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

let deepcopy=structuredClone(order)
deepcopy.customer.address.city="knr"
deepcopy.items[0].price=110000
console.log(order)
console.log(deepcopy)