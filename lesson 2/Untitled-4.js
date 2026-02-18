// This program greets a user and calculates age

// Ask the user for their name
let name = prompt("What is your name?");

// Ask the user for their birth year
let birthYear = prompt("What year were you born?");

// Convert birth year to number and calculate age
let currentYear = new Date().getFullYear();
let age = currentYear - Number(birthYear);

// Create a function to greet the user
function greetUser(userName, userAge) {
  alert("Hello " + userName + "! You are " + userAge + " years old.");
}

// Call the function
greetUser(name, age);
