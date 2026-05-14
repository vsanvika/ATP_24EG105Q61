// Import required functions from other modules

// Function to reduce product stock after successful order
import { reduceStock } from './product.js'

// Functions to manage cart operations
import { getCartItems, getCartTotal, clearCart } from './cart.js'

// Function to apply coupon discounts
import { applyDiscount } from './discount.js'


// Function to validate payment method entered by user
export function validatePaymentMethod(method) {

  // List of accepted payment methods
  const validMethods = ['card', 'upi', 'cod']

  // Check whether entered method exists in validMethods array
  return validMethods.includes(method.toLowerCase())
}


// Main function to process payment and place order
export function processPayment(paymentMethod, couponCode = null) {

  // Get all cart items
  const cartItems = getCartItems()

  // Calculate cart subtotal
  const subtotal = getCartTotal()

  // Check whether cart is empty
  if (cartItems.length === 0) {
    return {
      status: "failed",
      message: "Cart is empty"
    }
  }

  // Validate payment method
  if (!validatePaymentMethod(paymentMethod)) {
    return {
      status: "failed",
      message: "Invalid payment method"
    }
  }

  // Apply discount coupon if provided
  const discountDetails = applyDiscount(
    subtotal,
    couponCode,
    cartItems
  )

  // Extract discount amount and final total
  const { discount, finalTotal } = discountDetails

  // Simulating payment gateway success
  const paymentSuccess = true

  // If payment fails
  if (!paymentSuccess) {
    return {
      status: "failed",
      message: "Payment failed"
    }
  }

  // Reduce stock quantity for each purchased item
  cartItems.forEach(item => {

    reduceStock(item.id, item.quantity)

  })

  // Clear cart after successful order placement
  clearCart()

  // Return order summary
  return {
    orderId: generateOrderId(),
    items: cartItems,
    subtotal,
    discount,
    total: finalTotal,
    paymentMethod,
    status: "success",
    message: "Order placed successfully"
  };
}


// Function to generate unique order ID
function generateOrderId() {

  // Example: ORD1715678901234
  return 'ORD' + Date.now();

}
