console.log("Task 1.")
console.log("=======")
function welcomeMessage(firstName, currentTime) {
    return "Good " + currentTime + ", " + firstName + "!";
  }
  
  console.log(welcomeMessage("Alice", "Morning"));
  console.log()


console.log("Task 2.")
console.log("=======")
const square = (num) => num * num;

console.log(square(5));
console.log()


console.log("Task 3.")
console.log("=======")
let shoes = ["Nike", "Adidas", "Puma"];

shoes.push("Reebok");

console.log("Total shoes:", shoes.length);
console.log()


console.log("Task 4.")
console.log("=======")
let inventory = [10, 0, 5, 2, 0];

for (let i = 0; i < inventory.length; i++) {
  if (inventory[i] === 0) {
    console.log("Out of Stock!");
  } 
  else if (inventory[i] < 5) {
    console.log("Low Stock - Reorder Soon!");
  } 
  else {
    console.log("Stock is Healthy.");
  }
}
console.log()


console.log("Task 5.")
console.log("=======")
function applyDiscount(totalAmount) {
    if (totalAmount >= 200) {
      return totalAmount * 0.8;
    } 
    else if (totalAmount >= 100) {
      return totalAmount * 0.9;
    } 
    else {
      return totalAmount;
    }
  }
  
  console.log(applyDiscount(250));
  console.log(applyDiscount(150));
  console.log(applyDiscount(50));
  console.log()