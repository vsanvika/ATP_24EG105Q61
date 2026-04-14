//Online Course Name Processor
const courses = ["javascript", "react", "node", "mongodb", "express"];

//filter() courses with name length > 5
let filtered=courses.filter(course=>course.length>5)
console.log(filtered)

//map() to convert course names to uppercase
const uppercase=courses.map(course=>course.toUpperCase())
console.log(uppercase)

//reduce() to generate a single string:"JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
const courseString=uppercase.reduce((result,course)=>{return result +" | " +course})
console.log(courseString)

//find() the course "react"
const findreact=courses.find(course=>course==="react")
console.log(findreact)

//findIndex() of "node"
const nodeindex=courses.findIndex(course=>course==="node")
console.log(nodeindex)