//Daily Temperature Analyzer

const temperature=[32,35,28,40,38,30,42]

//temperature greater than 35
const temp=temperature.filter(temp=>temp>35)
console.log(temp)

//celsius to farenheit
const tempfarenheit=temperature.map(temp=>(temp*1.8)+32)
console.log(tempfarenheit)

//average
const average=temperature.reduce((accumulator,temp)=>accumulator+temp)/temperature.length
console.log(average)

//first temperature greater than 40
const t=temperature.find(element=>element>40)
console.log(t)

//index of 28
let index=temperature.findIndex(temp=>temp===28)
console.log(index)