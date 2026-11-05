// Ex.9 - 5. Query Operations on the students Collection (run after q1)
use CollegeDB

// a. Students whose marks are greater than or equal to 75
db.students.find({ mark: { $gte: 75 } }, { _id: 0 })

// b. Students whose age is less than 21
db.students.find({ age: { $lt: 21 } }, { _id: 0 })

// c. Students belonging to either CSE or IT
db.students.find({ department: { $in: ["CSE", "IT"] } }, { _id: 0 })

// d. Top three students based on marks
db.students.find({}, { _id: 0 }).sort({ mark: -1 }).limit(3)

// e. Update multiple student records using updateMany()
db.students.updateMany({ department: "CSE" }, { $inc: { mark: 5 } })
db.students.find({ department: "CSE" }, { _id: 0 })
