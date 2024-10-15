//Javascript Object


//----------------------------------------------
// deklarasi object
//--------------------------------cara pertama object literal
let jhon = {
    firstName : "Jhon", 
//  properti     nilai
    age : "30",
    isMarried : true,
    grade : [80,90,100],
    sayGreetings : function () {
        console.log("Hello myname is" + this.firstName);
    },
    //object inside object
    adress : {
        street : "Jl.Arnold Mononutu",
        city : "Minahasa Utara",
        province : "Sulawesi Utara",
        poscode : 95371,
    }
}

console.log(jhon);

//--------------------------cara kedua kata kunci new
let jane = new Object ();
(jane.firstName1 = "Jane", jane.age = "30", jane.married = true);

console.log(jane);


//------------------------------------------------------------
//cara mengakses properti dalam object
//-------------------------cara pertama (dot notation)

console.log(jhon.firstName); //jhon
console.log(jhon.age); // 30

//bisa juga digunakan untuk mengubah nilai yang sudah ditaruh
jhon.age = 31;

//bisa juga untuk menambah properti baru
jhon.job = "Teacher";
console.log(jhon);

//---------------cara kedua bracket notation
console.log(jhon["isMarried"]); //true

//cara menambah properti baru
jhon["nationality"] = "Indonesian";
console.log(jhon);

//Cara memanggil Object Method
jhon.sayGreetings();

//Cara memanggil Object inside object
console.log(jhon.adress.city); //Minahasa Utara

//Delete Properties dalam object kata kunci delete
delete jhon.grade;
console.log(jhon);




//===========================================================================
//Javascript COnditional
//1. If else
let numbers = 5;
if (numbers % 2 === 0) {
    console.log("bilangan genap");
} else {
    console.log("bilangan ganjil");
}

//2. if - else if , kondisinya banyak

// 100 - 80 A
// 80 - 60 B
// < 60 C

let nilai = 80
if (nilai >= 80 && nilai <=100){
    console.log("Grade A");
} else if (nilai <80 && nilai >=60){
    console.log("Grade B");
} else {
    console.log("Grade C");
}

let month = 1;
switch (month) {
    case 1 :
        console.log("January");
        break;
    case 2 :
        console.log("February");
        break;
    case 3 :
        console.log("Maret");
        break;
    default :
        console.log("Not Found");
        break
}

