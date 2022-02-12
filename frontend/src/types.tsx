interface User {
  "username" : String, // Unique
  "password" : String, // Hashed password
  "employee": Boolean, // Boolean for whether user is an employee
}
interface Customer extends User {
  "previous_orders": Donut[], // List of donuts they've ordered
}; 

interface Drone {
  "id" : Number, // Unique drone ID
  "charge" : Number, // Remaining charge % [0,100]
}

interface Donut {
  "name" : String, // Unique doughnut name
  "price" : number, // Price in donutbucks (or whatever the world uses these days)
  "description": String, // Longer description of doughnut
  "imageurl": String,
}

interface Address {
  'street': String,
  'city': String,
  'state': String,
  'zip': String,
}

interface Order {
  "user" : User, // User
  "price" : Number, // Price of all donuts, ±tax.
  "donuts": Donut[], // List of ordered doughnuts
  "quantities": Number[], // Parallel list to doughnuts with the number of doughnuts being bought.
  "destination": Address, // Location that the order is being sent to.
}

export type {User, Donut, Drone, Order, Customer, Address}