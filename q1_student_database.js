// Ex.9 - 1. Student Database Management (CollegeDB)

// Create CollegeDB and the students collection, insert five students
use CollegeDB
db.createCollection("students")
db.students.insertMany([
  { rollNo: 101, name: "Arun", department: "CSE", age: 20, mark: 85 },
  { rollNo: 102, name: "Priya", department: "IT", age: 21, mark: 92 },
  { rollNo: 103, name: "Kumar", department: "CSE", age: 19, mark: 78 },
  { rollNo: 104, name: "Divya", department: "ECE", age: 20, mark: 88 },
  { rollNo: 105, name: "Ravi", department: "CSE", age: 22, mark: 67 }
])
show collections

// a. Display all student records
db.students.find({}, { _id: 0 })

// b. Retrieve a student using the roll number
db.students.findOne({ rollNo: 103 }, { _id: 0 })

// c. Students who scored more than 80 marks
db.students.find({ mark: { $gt: 80 } }, { _id: 0 })

// d. Update the marks of a particular student
db.students.updateOne({ rollNo: 101 }, { $set: { mark: 90 } })
db.students.findOne({ rollNo: 101 }, { _id: 0, name: 1, mark: 1 })

// e. Delete a student record using the roll number
db.students.deleteOne({ rollNo: 105 })
db.students.find({}, { _id: 0 })
