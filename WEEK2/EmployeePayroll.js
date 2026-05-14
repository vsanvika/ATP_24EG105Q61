
// Array containing employee details
const employees = [
  {
    id: 201,
    name: "Amit",
    salary: 45000,
    department: "IT"
  },
  {
    id: 202,
    name: "Neha",
    salary: 60000,
    department: "HR"
  },
  {
    id: 203,
    name: "Rahul",
    salary: 75000,
    department: "IT"
  },
  {
    id: 204,
    name: "Pooja",
    salary: 30000,
    department: "Sales"
  }

];

// Get employees belonging to IT department

let itEmployees = employees.filter(
  employee => employee.department === "IT"
);

// Display IT employees
console.log("IT Department Employees:");
console.log(itEmployees);

// Calculate net salary with 10% bonus
const employeesWithNetSalary = employees.map(employee => ({

  // Employee name
  name: employee.name,

  // Original salary
  salary: employee.salary,

  // Bonus amount (10%)
  bonus: employee.salary * 0.10,

  // Final net salary
  netSalary: employee.salary + employee.salary * 0.10

}));

// Display updated salary details
console.log("Employees with Net Salary:");
console.log(employeesWithNetSalary);
// Calculate total salary of all employees
const totalSalary = employees.reduce(
  (sum, employee) => sum + employee.salary, 0);
// Display total salary
console.log("Total Salary of Employees:");
console.log(totalSalary);
// Find employee whose salary is 30000
const empWith30000 = employees.find(
  employee => employee.salary === 30000
);
// Display employee details
console.log("Employee with Salary 30000:");
console.log(empWith30000);
// Find index of employee named "Neha"
const nehaIndex = employees.findIndex(
  employee => employee.name === "Neha"
);
// Display index
console.log("Index of Employee Neha:");
console.log(nehaIndex);
