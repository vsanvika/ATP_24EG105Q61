// Student Performance Dashboard

// Array containing student details
const students = [

  // Student 1
  { id: 1, name: "Ravi", marks: 78 },

  // Student 2
  { id: 2, name: "Anjali", marks: 92 },

  // Student 3
  { id: 3, name: "Kiran", marks: 35 },

  // Student 4
  { id: 4, name: "Sneha", marks: 88 },

  // Student 5
  { id: 5, name: "Arjun", marks: 40 }
];


// ---------------------------------------------------
// FILTER METHOD
// Filter students who passed (marks >= 40)
// ---------------------------------------------------

let filtermark = students.filter(
  stuObj => stuObj.marks >= 40
)

// Display passed students
console.log(filtermark)


// ---------------------------------------------------
// MAP METHOD
// Assign grades based on student marks
// ---------------------------------------------------

let grade = students.map(element => {

  // Grade A for marks >= 90
  if (element.marks >= 90)

    return "A"

  // Grade B for marks >= 75
  else if (element.marks >= 75)

    return "B"

  // Grade C for marks >= 60
  else if (element.marks >= 60)

    return "c"

  // Grade D for marks below 60
  else

    return "D"
}
)

// Display grades
console.log("grade:", grade)


// ---------------------------------------------------
// REDUCE METHOD
// Calculate average marks of all students
// ---------------------------------------------------

const averageMarks = students.reduce(

  (sum, student) => sum + student.marks,

  0

) / students.length;

// Display average marks
console.log(averageMarks);


// ---------------------------------------------------
// FIND METHOD
// Find student whose marks are 92
// ---------------------------------------------------

let find = students.find(
  mark => mark.marks == 92)
// Display student details
console.log(find)
// Find index of student named "Kiran"
let findindex = students.findIndex(
  element => element.name === "Kiran"
)

// Display indexconsole.log(findindex)
