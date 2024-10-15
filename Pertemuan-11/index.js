//String literal, arrow function, default paraameter

// String Literal

let fullName = "Jhon Doe";
let age = 33;
let address = "Manado";

let kalimat = `Halo nama saya ${fullName}, umur saya ${age}, dan saya tinggal di ${address}` 

console.log(kalimat);

// Arrow function

function sayGreetings (fullName) {
    return `Hello ${fullName}`;
}

console.log(sayGreetings("John Doe"));

// const sayGreetings2 = (fullName) => {
//     return `Hello ${fullName}`;
// };

//Implicit return value
const sayGreetings2 = (fullName) => `Hello ${fullName}`;

// Arrow funtion pada IIFE
let output1 = (() => `Hello`)();

console.log(output1);

//Arrow function pada callback
let numbers = [1,2,3,4,5];
let output2 = numbers.map((item) => item);
console.log(output2);


//Default parameter
const sayGreetings3 = (fullName, age) => {
    if (fullName === undefined) {
        fullName = "Kharis"
    }
    {
    if (age === undefined) {
        age = "19"
    }
    }
    console.log(`Hello my name is ${fullName} umur saya ${age} tahun`);
};

sayGreetings3();