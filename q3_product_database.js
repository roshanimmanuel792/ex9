// Ex.9 - 3. Product Database (CarePlus Clinic Pharmacy)

// Create ProductDB and the products collection
use ProductDB
db.products.insertMany([
  { productId: "P101", name: "Paracetamol 500mg (strip)", category: "Medicine", price: 40, stock: 500 },
  { productId: "P102", name: "Cough Syrup 100ml", category: "Medicine", price: 120, stock: 80 },
  { productId: "P103", name: "Digital Thermometer", category: "Equipment", price: 550, stock: 25 },
  { productId: "P104", name: "BP Monitor", category: "Equipment", price: 1850, stock: 10 },
  { productId: "P105", name: "Pulse Oximeter", category: "Equipment", price: 1200, stock: 0 },
  { productId: "P106", name: "Wheelchair", category: "Mobility", price: 6500, stock: 4 },
  { productId: "P107", name: "First Aid Kit", category: "Supplies", price: 450, stock: 60 }
])

// a. Products belonging to a specific category
db.products.find({ category: "Equipment" }, { _id: 0, name: 1, category: 1, price: 1 })

// b. Products priced between Rs.500 and Rs.2,000
db.products.find({ price: { $gte: 500, $lte: 2000 } }, { _id: 0, name: 1, price: 1 })

// c. Increase the stock quantity of a product
db.products.updateOne({ productId: "P104" }, { $inc: { stock: 15 } })
db.products.findOne({ productId: "P104" }, { _id: 0, name: 1, stock: 1 })

// d. Delete products whose stock quantity is zero
db.products.deleteMany({ stock: 0 })

// e. The five most expensive products
db.products.find({}, { _id: 0, name: 1, price: 1 }).sort({ price: -1 }).limit(5)
