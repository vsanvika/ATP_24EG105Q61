//shopping cart summary for an e-commerce website.
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

let instockProduct=cart.filter(cartObj=>cartObj.inStock===true)
console.log(instockProduct)

const productTotals = cart.map(item => ({
 name: item.name,
  totalPrice: item.price * item.quantity
}));
console.log(productTotals);

let grandtotal=cart.reduce((acc,cartObj)=>acc+cartObj.price*cartObj.quantity,0)
console.log(grandtotal)

let findMouse=cart.find(cartObj=>cartObj.name==="Mouse")
console.log(findMouse)

let index=cart.findIndex(cartObj=>cartObj.name==="Keyboard")
console.log(index)