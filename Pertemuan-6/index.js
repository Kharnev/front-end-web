//Array dan object

//deklarasi array
//dekalrasi variabel array
//cara 1 array literal
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//cara 2 kata kunci new
let numbers2 = new Array (6, 7, 8, 9, 10);
console.log(numbers2);

//tipe data dalam array
let numbers3 = [1, 2, 3, 4, 5]; //number atau angka/integer

let student = ["jhon", "kharis", "neville", "awuy"]; //string

let mixed = ["kharis", 20, true, [80, 90, 100]]; //campuran - string, integer, boolean [integer]
console.log(mixed);

//menampilkan length dari array
console.log(numbers3.length);
console.log(student.length);
console.log(mixed.length);

//mengakses elemen dalam array/mengambil data tertentu di dalam array
//melalui index
console.log(numbers2[2]);
console.log(student[1]);
console.log(mixed[2]);
console.log(mixed[3][1]);

//mengakses elemen terakhir dalam array
console.log(numbers3[[numbers3.length - 1]]);

//array method

//to string
let array = [1, 2, 3, "halo", false, true];
console.log(array);
console.log(array.toString());

//join
console.log(array.join(" "));
console.log(array.join("-"));
console.log(array.join("!!!!!!!!!"));

//push - tambah elemen di index terakhir
array.push("selamat pagi");
console.log(array);

//pop - menghapus elemen terakhir
array.pop();
console.log(array);

//shift - menambah elemen di index paling awal
array.shift("selamat pagi");
console.log(array);

//unshift - menghapus elemen di index paling awal
array.unshift();
console.log(array);

//splice - menambah elemen di index yang dipilih
array.splice(3, 0, 4, 5);
console.log(array);

//concatination - menggabungkan variabel ke variabel lainnya
let buah = ["pisang", "apel", "jeruk"]
let sayur = ["tomat", "bayam", "wortel"]
let biji = ["kedelai", "kacang tanah", "kacang polong"]

let makanan = buah.concat(sayur, biji);
console.log(makanan);

//slice - mengambil beberapa element pada sebuah array, dan ditaruh pada array baru
let sayuran = makanan.slice(3, 6);
console.log(sayuran);

