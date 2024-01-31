// Access the golden rod color value in output.

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// console.log(colors['golden rod']);

// For this object below add a property named passenger capacity with value 5

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car.passenger = 5;

// console.log(car);

// Display the physics marks as output.

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// console.log(student.physics);


// Count the number of properties.

// Input:

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// const studentKey = Object.keys(student);

// console.log(studentKey.length);


// Loop through an object and print the key-value pairs with their types
// Output:

// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

// Input:

// let myObject = {

// name: 'John Doe',
// age: 25,
// city: 'Example City',
// isStudent: true
// };

// for (const key in myObject) {
//     console.log(`key: ${key} / type: ${typeof myObject[key]}`)
// }


// Write a function normalize, that replaces '-' with '/' in a date string.

// Example: normalize('20-05-2017') should return '20/05/2017'.
// let stor = "";
// function normalize (str) {
//     for (let i of str){
//         if (i == '-'){

//              str.replace('-','/');
//           }
//         console.log(i);
//      }
     
//   }

//  console.log(normalize('20-05-2017'));

//   function normalize(dateString) {
//     return dateString.replace(/-/g, '/');
// }

// const originalDate = "20-05-2017";
// const normalizedDate = normalize(originalDate);
// console.log(normalizedDate);



function add (ar, b) {
  if(ar.indexOf(b)){
    ar.push(b);
 }
return ar;
}

console.log(add([1, 2], 3));;





