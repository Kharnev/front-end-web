// JavaScript Function

//Tanpa input (paramater) dan tanpa output
//cara pertama

function greetings1 () {
    console.log("Hello World");
}
greetings1();

//cara kedua
//fungsi yang disimpan dalam variabel

let greetings2 = function () {
    console.log("Hello World");
}
greetings2();

//Dengan input (parameter) dan output (return value)
//Cara pertama
function greetings3 (fullName) {
    return "Hello" + fullName
}

                        //Argument (Nilai yang akan masuk dalam parameter fullName)
let output1 = greetings3 ("Kharis");
console.log(output1);

//cara kedua
let greetings4 = function (fullName1) {
    return "Hello" + fullName1;
}

let output2 = greetings4 ("Kharis Awuy");
console.log(output2);

//function hoisting (berlaku pada cara pertama)

//global dan local dan blog scope
let x = 10; //global (bisa dipakai ke semua function)

function foo () {
    let y = 20; //lokal (hanya bisa dipakai ke function yang ini)
    let z = 30;
    console.log(x);
    console.log(y);
    if (z > x) { //blog scope = satuan blog terkecil {} (semua yang didalam kurung kurawal itu blog)    
        let a = 40;
        console.log(a);
    }
    //console.log(a); (error = sudah diluar blog scope {})
} 

//console.log(y); (error = sudah diluar local scope)
foo ();

