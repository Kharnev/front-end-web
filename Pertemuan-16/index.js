/// Asynchronous JS --> multi thread

// Pararel --> proses nya start sama"
// setTimeout(() => {
//     console.log("Proses 1");
// }, 3000)

// console.log("Proses 2");

// setTimeout (() => {
//     console.log("Proses 3");
// },  5000)

// console.log("Proses 4");


// Concurent --> saling nunggu == tunggu proses 1 selesai baru proses 2 jalan
//ES5
// setTimeout (() => {
//     console.log("Proses 1");
//     setTimeout (() => {
//         console.log("Proses 2");
//         setTimeout (() => {
//             console.log("Proses 3");
//             setTimeout (() => {
//                 console.log("Proses 4");
//             }, 3000)
//         }, 3000)
//     }, 3000)
// }, 3000)

//ES6 == Promise
let condition = true
let = newPromise = new Promise((resolve, reject) => {
    if(condition) {
        resolve ("Berhasil")
    } else {
        reject ("Gagal")
    }
});

// Pakai promise -- Then - catch
newPromise.then((result) => console.log(result));

//Pakai Async - await -- harus dinut dalam fungsi

const consumePromise = async () => { // tambah asnyc
    let result = await newPromise; // tambah await
    console.log(result);
}

consumePromise();

//Pakai promise yang sudah ada
// Fetch
fetch ("https://jsonplaceholder.typicode.com/users")
    .then ((response) => response.json())
    .then ((json) => console.log(json));

(async () => {
    let response = await fetch ("https://jsonplaceholder.typicode.com/users")
    let json = await response.json ();

})



/// Synchronous JS --> single thread --> dijalankan secara cepat dalam antrian
// console.log("proses 1");
// console.log("proses 2");
// console.log("proses 3");
// console.log("proses yang memakn waktu yang lama"); // nunggu ini dulu baru bisa ke proses selanjutnya == blocking
// console.log("proses 4");