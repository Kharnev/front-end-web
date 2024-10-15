//IIFE dan callback

//no paramater dan argument
(function () {
    console.log("Hello World");
  })();

//with parameter dan argument
  (function (fullName) { //parameter
    console.log("Hello" + fullName) ;
  })("Kharis Awuy"); //argument


//with parameter dan argument dan return value
let output = (function (fullName) { //return value - parameter
    return ("Hello" + fullName) ;
  })("Kharis Awuy"); //argument

//Callback Function
//no paramter dan argumen dan return value
function sayHello (callback) {
    callback();
}

function greetings () {
    console.log("Hello Callback Function") ;
}

sayHello(greetings) ;

// 
sayHello (function () {
    console.log("Hello Callback Function") ;
}) ;

//With parameter dan argumen dan return value
function sayHello (callback) {
    //Logic
    let output1 = callback("Kharis  Awuy");
    return output1;
}

let output1 = sayHello (function (fullName) {
    return "Hello" + fullName;
}) ;

console.log(output1);