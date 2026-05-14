// Array containing bank transaction details
const transactions = [
  // Credit transaction of ₹5000
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }

];
// Get only credit transactions
const filterCredit = transactions.filter(
  transaction => transaction.type === "credit"
);
// Display credit transactions
console.log("Credit Transactions:");
console.log(filterCredit);
// Extract only transaction amounts
const transactionAmounts = transactions.map(
  transaction => transaction.amount
);
// Display all amounts
console.log("Transaction Amounts:");
console.log(transactionAmounts);
// REDUCE METHOD
// Calculate final account balance
// Credit → Add amount
// Debit → Subtract amount
const finalBalance = transactions.reduce((balance, transaction) => {
  // Add amount for credit transaction
  if (transaction.type === "credit") {
    return balance + transaction.amount;
  }
  // Subtract amount for debit transaction
  else {
    return balance - transaction.amount;
  }
}, 0);
// Display final balance
console.log("Final Balance:");
console.log(finalBalance);
// Find first debit transaction
const firstDebit = transactions.find(
  transaction => transaction.type === "debit"
);
// Display first debit transaction
console.log("First Debit Transaction:");
console.log(firstDebit);
// Find index of transaction having amount = 10000
const indexOf10000 = transactions.findIndex(
  transaction => transaction.amount === 10000
);
// Display index
console.log("Index of Transaction Amount 10000:");
console.log(indexOf10000);
