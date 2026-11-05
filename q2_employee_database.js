// Ex.9 - 2. Employee Database (CarePlus Clinic Doctors and Staff)

// Create EmployeeDB, insertMany() creates the employees collection
use EmployeeDB
db.employees.insertMany([
  { empId: "E101", name: "Dr. Karthik", department: "Cardiology", salary: 95000, experience: 9 },
  { empId: "E102", name: "Dr. Anitha", department: "General Medicine", salary: 72000, experience: 5 },
  { empId: "E103", name: "Rahul", department: "Reception", salary: 32000, experience: 2 },
  { empId: "E104", name: "Dr. Sneha", department: "General Medicine", salary: 68000, experience: 4 },
  { empId: "E105", name: "Dr. Meena", department: "Paediatrics", salary: 82000, experience: 6 }
])

// a. Display all employees
db.employees.find({}, { _id: 0 })

// b. Employees earning more than Rs.40,000
db.employees.find({ salary: { $gt: 40000 } }, { _id: 0, name: 1, department: 1, salary: 1 })

// c. Update the salary of an employee
db.employees.updateOne({ empId: "E103" }, { $set: { salary: 36000 } })
db.employees.findOne({ empId: "E103" }, { _id: 0, name: 1, salary: 1 })

// d. Employees in descending order of salary
db.employees.find({}, { _id: 0, name: 1, salary: 1 }).sort({ salary: -1 })

// e. Count the employees in a particular department
db.employees.countDocuments({ department: "General Medicine" })
