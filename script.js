// ==========================
// 🎯 Part 1: Basics
// ==========================

// Variable declarations
let name = "David";
let age = 22;

// Conditional check
if (age >= 18) {
  console.log(name + " is an adult.");
  document.getElementById("greeting").innerText = "Hello " + name + "! You are an adult.";
} else {
  console.log(name + " is a minor.");
}

// ==========================
// ❤️ Part 2: Functions
// ==========================

// Function 1: Display a custom message
function showMessage() {
  document.getElementById("message").innerText = "You clicked the button! 🎉";
}

// Function 2: Calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total: " + calculateTotal(50, 3)); // example use

// ==========================
// 🔁 Part 3: Loops
// ==========================

// For loop - Generate fruit list
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let list = document.getElementById("fruits-list");

for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.innerText = fruits[i];
  list.appendChild(li);
}

// While loop - Countdown
let count = 5;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// ==========================
// 🌐 Part 4: DOM Manipulation
// ==========================

// 1. Select element by ID and change style on button click
let toggleBtn = document.getElementById("toggle-btn");
let toggleText = document.getElementById("toggle-text");

toggleBtn.addEventListener("click", function () {
  toggleText.classList.toggle("highlight");
});

// 2. Creating a new element dynamically
let newPara = document.createElement("p");
newPara.innerText = "This paragraph was added with JavaScript!";
document.body.appendChild(newPara);

// 3. Listening for user input (prompt example)
let userColor = prompt("Enter your favorite color:");
document.body.style.backgroundColor = userColor || "lightblue";
