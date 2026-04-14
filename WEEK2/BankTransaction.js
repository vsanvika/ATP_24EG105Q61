const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

const filtercredit=transactions.filter(trans=>trans.type==="credit")
console.log(filtercredit)

const transactionamount=transactions.map(trans=>trans.amount)
console.log(transactionamount)

const finalBalance = transactions.reduce((acc, trans) => {
  if (trans.type === "credit") {
    return acc + trans.amount
  } else {
    return acc - trans.amount
  }
}, 0);

console.log(finalBalance)

const firstDebit = transactions.find(trans => trans.type === "debit")
console.log(firstDebit)

const indexOf10000 = transactions.findIndex(trans => trans.amount === 10000);
console.log(indexOf10000);