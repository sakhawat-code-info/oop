// # array-looping-tasks

// ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.

// **Input:**
// const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// // // **Output:**

// // // `['orange', 'yellow', 'green', 'blue', 'red']`

// // // ---
// const output = []

// // for (let i = colors.length-1; i >= 0; i--) {
// //     const element = colors[i];
// //     // console.log(element);
// //     output.push(element);
// // }

// for (const color of colors) {
//     // console.log(color);
//     output.push(color)
// }

// console.log(output);



// ### Task 2

// Write a JavaScript code to get the even numbers from an array using any looping technique.

// **Input:**
const numbers = [12, 98, 5, 41, 23, 78, 46];

// **Output:**

// `[12, 98, 78, 46]`

// ---

// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element % 2 === 0) {
//         output.push(element)
//     }
// }

// console.log(output);




// ### Task 3

// Use a for...of loop to concatenate all the elements of an array into a single string.

// **Input:**
// var array_number = ['Tom', 'Tim', 'Tin', 'Tik']

// // **Output:**

// // `'TomTimTinTik'`
// let output = "";

// for (const iterator of array_number) {
//     output += iterator;
// }

// console.log(output);






// ---

// ### Task 4 (Hard)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// **Input:**
const statement = 'I am a hard working person';

// **Output:**

// `'person working hard a am I'`

// ---

// const state = statement.split(' ');

// let output = "";
// for (let i = state.length - 1; i >= 0; i--) {
//     const element = state[i] + " ";
//     output += element
// }

// console.log(output);

