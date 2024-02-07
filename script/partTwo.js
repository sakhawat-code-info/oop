// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

// function lowestNumber(heightsArry) {
//     let lowheight = heightsArry[0];
//     for (let i = 0; i < heightsArry.length; i++) {
//         const element = heightsArry[i];
//         if (lowheight > element) {
//             lowheight = element
//         }
//     }
//     console.log(lowheight);
// }

// lowestNumber(heights2);

// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// function smallCarName(nameArr) {
//     let smNameLen = nameArr[0];

//     for (const items of nameArr) {
//         if (smNameLen.length > items.length) {
//             smNameLen = items;
//         }
//     }
//     console.log(smNameLen);
// }

// smallCarName(heights2);


// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronics Budget that takes in the number of laptop, tablets, and mobile and returns the total money required.

// const arr = [35000, 15000, 20000]

// function calculateElectronics(array) {
//     let totalMoney = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         totalMoney += element;
//     }
//     return totalMoney;
// }

// const print = calculateElectronics(arr);
// console.log(print);

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input

//     const phones = [
//         { model: "PhoneA", brand: "Iphone", price: 95000 },
//         { model: "PhoneB", brand: "Samsung", price: 40000 },
//         { model: "PhoneC", brand: "Oppo", price: 26000 },
//         { model: "PhoneD", brand: "Nokia", price: 35000 },
//         { model: "PhoneE", brand: "Iphone", price: 105000 },
//         { model: "PhoneF", brand: "HTC", price: 48000 }
//     ];

// function findAveragePhonePrice(array) {
//     let sum = 0;
//     const arraylen = array.length;
//     for (const items of array) {
//         sum += items.price;
//     }
//     return sum / arraylen;
// }

// const print = findAveragePhonePrice(phones);
// console.log(print);


// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];


        function salaryWithIncrement(employees) {
            let totalPay = 0;
            for (const iterator of employees) {
                // totalPay += (iterator.experience * iterator.increment) + iterator.starting;
                // return (iterator.increment * iterator.);
                let incremt = 0;
                for (let i = 0; i < iterator.experience; i++) {
                    incremt += iterator.increment;
                }
                // console.log(iterator.starting + incremt);
               totalPay += iterator.starting + incremt;
            }
            return totalPay;
        }



const print = salaryWithIncrement(employees)

console.log(print);