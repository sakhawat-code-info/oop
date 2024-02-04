// # js-problems-part1-practice-tasks

// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.














// ---

// ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 

// sample-input: 
// const numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// <br/>

// sample-input: 

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0


// function findNumber (arr, num){
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (element === num) {
//             result++;
//         }
        
//     }
//     return result;
// }

// const print = findNumber(numbers, 25);

// console.log(print);


// ----
// ### Task-3: 
// Write a function to count the number of vowels in a string.



// const myStr = 'This is string of my number to find vowlel';

// function strVowels(params) {
//     let result = 0;
//     for (let i = 0; i < params.length; i++) {
//         const element = params[i].toLowerCase();
//         const smallcar = element.toLowerCase();
//         if (smallcar === 'a' || smallcar === 'e' || smallcar === 'i' || smallcar === 'o' || smallcar === 'u') {
//             result++;
//         }
//     }
//     return result + " vowels found.";
// }


// const print = strVowels(myStr);


// console.log(print);






// ---
// ### Task-4: 
// Write a function to find the longest word in a given string.


const str = "this is llllllllllllllllonnnnnnng sting";





function longword (str){
    
    const strArray = str.split(" ");
    const strWordSize = [];
    
    for (let i = 0; i < strArray.length; i++) {
        const element = strArray[i];
        strWordSize.push(element.length)
    }

    const maxWordSize = Math.max(...strWordSize)
    console.log(maxWordSize);
}


longword(str);

// console.log(element);





// sample-input: 
// I am learning Programming to become a programmer

// sample-output: Programming

// ----
// ### Task-5: 
// Generate a random number between 10 to 20.