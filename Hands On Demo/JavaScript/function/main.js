//---3 way of using the function in JS

// 1. Classic way 
//no param
function messageForUs(){
    var message = "HI FWS-2026-1-87";
    //console.log("HI FWS-2026-1-87");
    return console.log(message);
}
function messageFunction(){
    console.log("Im printing text using function!");
}

//with param
function sumOfTwoNumbers1(inputOne, inputTwo){
    var sum = inputOne + inputTwo; 
    return sum;
}

//2. using variable 
const sumOfTwoNumbers2 = function (inputOne, inputTwo){
    var sum = inputOne + inputTwo; 
    return sum;
}
//3. arrow function 
const sumOfTwoNumbers3 = (inputOne, inputTwo, inputThree) => inputOne+inputThree*inputTwo;

//---built in function 
function randomNumber(number){
    var result = Math.floor(Math.random(number)*number);
    return result;
}
//normal function
function messageNotification1(message){
    return message.toUpperCase();
}
//arrow function
const messageNotification = (message) => message.toUpperCase();

function addingElement(element1, element2){
    var arr = [];
    arr.push(element1);
    arr.push(element2);

    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

//calling of functions with in same file
// messageForUs();
// console.log(sumOfTwoNumbers1(1.5,5.67) + sumOfTwoNumbers2(5,3));
// console.log(sumOfTwoNumbers2(1,3));
// console.log(sumOfTwoNumbers3(2,3,4));
// console.log(randomNumber(3));
// console.log(messageNotification("test"));
// messageFunction();
addingElement("color", 2);

//importing function with in separate file
const {gradeChecking} = require("./gradeChecking");
gradeChecking(75);
