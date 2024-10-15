// Javascript Loop and Array Build-in Method

//Javascript Loop

//1. for loop

for (let i = 1; 1 <= 10; i++) {
    console.log(i);
}

//2. while loop

let n = 1; //harus berikan nilai awal diluar codingan while
while (n <= 10) {
    console.log(n);
    n++;  //nilai akhir supaya tidak loop forever
}

//3. do-while loop

let m = 1;
do {
    console.log(m);
    m++;
}while (m <= 10);


// Array build-in method
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//menampilkan elemen dalam array saru persatu
for (let x = 0; x <= 5; x++) {
    console.log(numbers[x]);
}

// array object
let student = [
    {
        id : 1,
        firstName : "Jhon",
        isActive : true,
        grade : 80,
    },
    {
        id : 2,
        firstName : "Jane",
        isActive : false,
        grade : 90,
    },
    {
        id : 3,
        firstName : "kharis",
        isActive : true,
        grade : 100,
    },
];

//array build-in method cara terbaru

//1. forEach()
student.forEach(function (item) {
    console.log(item);
});

//2. map()
let output = student.map (function (item) {
    return (item);
});
console.log(item);

//3. filter()
let filteredStudent = student.filter (function (item) {
    return item.isActive === false;
});
console.log(filteredStudent);

//4. find()
let findStudent = student.find (function (item) {
    return item.isActive === false;
});
console.log(findStudent);


// exercise
let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp;Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este",
    "Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

let index = countries.findIndex (function (item) {
    return item === "Togo";
});
console.log(index);


let filter = countries.filter (function (item) {
    return item.slice (-3);
});

console.log(filter);