// Shopping cart summary for an e-commerce website
// Array containing cart product details
const cart [
  {id: 101,name: "Laptop",price: 60000,quantity: 1,inStock: true},
  {id: 102,name: "Mouse",price: 800,quantity: 2,inStock: true},
  {id: 103,name: "Keyboard",price: 1500,quantity: 1,inStock: false},
  {id: 104,name: "Monitor",price: 12000,quantity: 1,inStock: true}
];
// FILTER METHOD
// Get products that are currently in stock
let instockProduct = cart.filter( cartObj => cartObj.inStock === true)
// Display in-stock products
console.log(instockProduct)
// MAP METHOD
// Calculate total price for each product
// totalPrice = price × quantity
const productTotals = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
// Display total price of each product
console.log(productTotals);
// REDUCE METHOD
// Calculate grand total of cart
let grandtotal = cart.reduce((acc, cartObj) => acc + cartObj.price * cartObj.quantity,0)
// Display grand total
console.log(grandtotal)
// FIND METHOD
// Find product named "Mouse"
let findMouse = cart.find(cartObj => cartObj.name === "Mouse")
// Display Mouse product details
console.log(findMouse)
// FINDINDEX METHOD
// Find index of product named "Keyboard"
let index = cart.findIndex(cartObj => cartObj.name === "Keyboard")
// Display index
console.log(index)
