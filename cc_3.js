// Customer Tracker Application
// This script demonstrates basic CRUD operations on customer data using JavaScript arrays and objects.

// Step 1: Initialize Customer Records
// Create an array of customer objects with name, email, and purchases
const customers = [
  {
    name: "John Smith",
    email: "john.smith@email.com",
    purchases: ["Laptop", "Mouse"]
  },
  {
    name: "Maria Lopez",
    email: "maria.lopez@email.com",
    purchases: ["Phone Case"]
  },
  {
    name: "David Kim",
    email: "david.kim@email.com",
    purchases: ["Headphones", "Keyboard", "Monitor"]
  }
];

// Step 2: Add New Customer
// Add a new customer to the array using push()
customers.push({
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  purchases: ["Tablet"]
});

// Step 3: Remove Customer
// Remove the first customer from the array using shift()
customers.shift(); // Removes John Smith

// Step 4: Update Customer Information
// Update Maria's email address
customers[0].email = "maria.newemail@email.com";
// Add a new purchase to David's purchases
customers[1].purchases.push("Webcam");

// Step 5: Display Customer Summary
// Log each customer's information to the console
customers.forEach(customer => {
  console.log(
    `${customer.name} | Email: ${customer.email} | Total Purchases: ${customer.purchases.length}`
  );
});
