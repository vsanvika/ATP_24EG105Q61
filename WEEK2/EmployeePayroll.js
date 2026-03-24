
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

let itEmployees=employees.filter(element=>element.department==="IT")
console.log(itEmployees)

const employeesWithNetSalary = employees.map(emp => ({netSalary: emp.salary + emp.salary * 0.10}));
console.log(employeesWithNetSalary);

const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary);

const empWith30000 = employees.find(emp => emp.salary === 30000);
console.log(empWith30000);

const nehaIndex = employees.findIndex(emp => emp.name === "Neha");
console.log(nehaIndex);