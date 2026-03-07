// rule of programming languanges
// 1.syntax/code (words,spelling)
// 2.programming grammar/cobination of syntax
// 3.Data -> initialized 
// 4.Data -> processed -> Information

// Javascript 
// - with HTML and CSS perform events in the browser(validation, popup, click and other events)
// - talk to the server/ it can be server itself
// - CRUD (Create, Read, Update, Delete)

//variable and datatypes
let lengthOfHouse = 4.5; // number
let nameOfUser1 = "Alfren",nameOfUser2 = "Bridget",conversation = "Hello", stepsTaken= 100;//string
let isAvailable = true; //bolean true or false


console.log(conversation, nameOfUser1);// concatenation, adding two or more strings
console.log(conversation, isAvailable);
console.log(conversation, nameOfUser1, nameOfUser2, stepsTaken);

//objects -- list of items
// 1.arrays
// 2.objects/collection

let arrayOfColors = ["red", "blue", "green"];//array list
//index - 0 - nth index
//element - value in array
console.log(arrayOfColors[3])
let converstionObject = {
    userName : "Alfren",
    age : 21,
    stepsTaken: "200",
    convesation:"Hi!",
    arrayOFName:["Harold", "Fretz", "Lennard", "Sendy"],
};

let nameSpecif = converstionObject.arrayOFName;

console.log(converstionObject.userName, converstionObject.stepsTaken + 1, converstionObject.arrayOFName[2]);
console.log(nameSpecif[0]);

