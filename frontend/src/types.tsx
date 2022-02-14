interface User {
  "username" : string, // Unique
  "password" : string, // Hashed password
  "employee": boolean, // boolean for whether user is an employee
}

interface Customer extends User {
  "previous_orders": Donut[], // List of donuts they've ordered
};

interface Drone {
  "id" : number, // Unique drone ID
  "charge" : number, // Remaining charge % [0,100]
  "destinations": string[] // Drone's current route
}

interface Donut {
  "name" : string, // Unique doughnut name
  "price" : number, // Price in donutbucks (or whatever the world uses these days)
  "description": string, // Longer description of doughnut
  "imageurl": string,
}

interface Address {
  'street': string,
  'city': string,
  'state': string,
  'zip': string,
}

interface Order {
  "user" : User, // User
  "price" : number, // Price of all donuts, ±tax.
  "donuts": Donut[], // List of ordered doughnuts
  "quantities": number[], // Parallel list to doughnuts with the number of doughnuts being bought.
  "destination": Address, // Location that the order is being sent to.
}

export type {User, Donut, Drone, Order, Customer, Address}
