//student performance dashboard
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

let filtermark=students.filter(stuObj=>stuObj.marks>=40)
console.log(filtermark)

let grade=students.map(element=>{
if(element.marks>=90)
    return "A"
else if(element.marks>=75)
    return "B"
else if(element.marks>=60)
    return "c"
else
    return "D"
}
)
console.log("grade:",grade)

const averageMarks = students.reduce((sum, student) => sum + student.marks, 0) / students.length;
console.log(averageMarks);

let find=students.find(mark=>mark.marks==92)
console.log(find)

let findindex=students.findIndex(element=>element.name==="Kiran")
console.log(findindex)