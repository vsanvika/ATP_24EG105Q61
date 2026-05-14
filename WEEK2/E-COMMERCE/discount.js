// Object containing all available coupon codes and their details
const coupons = {

  // 10% discount coupon applicable for orders above ₹1000
  'WELCOME10': {
    type: 'percentage',
    value: 10,
    minAmount: 1000
  },

  // Flat ₹500 discount applicable for orders above ₹5000
  'FLAT500': {
    type: 'flat',
    value: 500,
    minAmount: 5000
  },

  // 20% discount only for electronics category products
  // Applicable for orders above ₹10000
  'ELECTRONICS20': {
    type: 'percentage',
    value: 20,
    minAmount: 10000,
    category: 'electronics'
  }
};


// Function to validate whether a coupon can be applied
export function validateCoupon(couponCode, cartTotal, cartItems) {

  // Get coupon details using coupon code
  const coupon = coupons[couponCode]

  // Check if coupon exists
  if (!coupon) {
    return {
      valid: false,
      message: "Invalid coupon code"
    }
  }

  // Check minimum cart amount condition
  if (cartTotal < coupon.minAmount) {
    return {
      valid: false,
      message: `Minimum amount should be ${coupon.minAmount}`
    }
  }

  // Check category-specific coupon eligibility
  if (coupon.category) {

    // Verify whether cart contains products from required category
    const hasCategoryItem = cartItems.some(
      item => item.category === coupon.category
    )

    // If no matching category product found
    if (!hasCategoryItem) {
      return {
        valid: false,
        message: "Coupon not applicable for these products"
      }
    }
  }

  // If all validations pass
  return {
    valid: true,
    message: "Coupon applied successfully"
  }
}


// Function to calculate discount amount
export function calculateDiscount(couponCode, cartTotal) {

  // Get coupon details
  const coupon = coupons[couponCode]

  // Calculate percentage discount
  if (coupon.type === 'percentage') {
    return (cartTotal * coupon.value) / 100
  }

  // Calculate flat discount
  if (coupon.type === 'flat') {
    return coupon.value
  }

  // Default discount if no matching type
  return 0
}


// Main function to apply coupon discount
export function applyDiscount(cartTotal, couponCode, cartItems) {

  // If user has not entered any coupon code
  if (!couponCode) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: "No coupon applied"
    };
  }

  // Validate coupon before applying
  const validation = validateCoupon(couponCode, cartTotal, cartItems);

  // If validation fails
  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };
  }

  // Calculate discount amount
  const discount = calculateDiscount(couponCode, cartTotal)

  // Calculate final payable amount
  const finalTotal = cartTotal - discount

  // Return final billing details
  return {
    originalTotal: cartTotal,
    discount,
    finalTotal,
    message: "Discount applied successfully"
  };
}
