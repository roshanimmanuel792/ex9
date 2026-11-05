// Ex.9 - 4. Library Database (CarePlus Clinic Medical Library)

// Create LibraryDB and the books collection
use LibraryDB
db.books.insertMany([
  { bookId: "B101", title: "Gray's Anatomy", author: "Henry Gray", category: "Anatomy", price: 2400 },
  { bookId: "B102", title: "Harrison's Principles of Internal Medicine", author: "J. Larry Jameson", category: "Medicine", price: 3200 },
  { bookId: "B103", title: "Fundamentals of Nursing", author: "Patricia Potter", category: "Nursing", price: 1800 },
  { bookId: "B104", title: "Clinical Nursing Skills", author: "Patricia Potter", category: "Nursing", price: 1550 },
  { bookId: "B105", title: "Pharmacology Made Easy", author: "Ravi Kumar", category: "Pharmacology", price: 950 }
])

// a. All books written by a specified author
db.books.find({ author: "Patricia Potter" }, { _id: 0, title: 1, author: 1 })

// b. Books belonging to a particular category
db.books.find({ category: "Nursing" }, { _id: 0, title: 1, category: 1 })

// c. Update the price of a book
db.books.updateOne({ bookId: "B105" }, { $set: { price: 850 } })
db.books.findOne({ bookId: "B105" }, { _id: 0, title: 1, price: 1 })

// d. Books sorted alphabetically by title
db.books.find({}, { _id: 0, title: 1, price: 1 }).sort({ title: 1 })

// e. Count the books in the collection
db.books.countDocuments()
