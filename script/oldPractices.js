
// problem one 
// const arr = [25, 28, 48, 98, 26, 58, 12, 6, 90];

// function findMax(params) {
//     let maxValue = params[0];

//     for (let i = 0; i < params.length; i++) {
//         const element = params[i];
//         if (maxValue < element) {
//             maxValue = element;
//         }
//     }        
//     return maxValue;
// }
// const fmax = findMax(arr);
// console.log(fmax);


// problem 2 


// function woodCalculator(chairQuentity = 0, tableQuentity = 0, bedQuentity = 0) {
//     if (typeof chairQuentity === 'number' && typeof tableQuentity === 'number' && typeof bedQuentity === 'number') {
//         const chairWood = 3 * chairQuentity;
//         const tableWood = 7 * tableQuentity;
//         const bedWood = 10 * bedQuentity;

//         const totalWoodNeeded = chairWood + tableWood + bedWood;

//         return totalWoodNeeded;
//     } else {
//         return "Please give me a number";
//     }
// }

// let bia1 = woodCalculator(true);
// console.log(bia1);

// three 

// const phoneObjArr = [
//     { brand: 'Samsung', price: 12000, pixel: '18px', batarry: "1400amp" },
//     { brand: 'op', price: 12000, pixel: '18px', batarry: "1400amp" },
//     { brand: 'sk', price: 7000, pixel: '18px', batarry: "1400amp" },
//     { brand: 'dm', price: 14000, pixel: '18px', batarry: "1400amp" },
//     { brand: 'fg', price: 90000, pixel: '18px', batarry: "1400amp" },
//     { brand: 'wf', price: 1500, pixel: '18px', batarry: "1400amp" },
//     { brand: 'wf', price: 1700, pixel: '18px', batarry: "1400amp" },
// ]

// function minPhonePrise(phoneObjArr) {
//     let minPhonePriseIs = phoneObjArr[0].price;
//     for (const iterator of phoneObjArr) {
//         if (minPhonePriseIs > iterator.price) {
//             minPhonePriseIs = iterator.price
//         }
//     }
//     return minPhonePriseIs;
// }
// const print = minPhonePrise(phoneObjArr);
// console.log(print);



// four 
// const billObj = [
//     {itemName: "Shampo", price: 300, quantity: 2},
//     {itemName: "saban", price: 100, quantity: 5},
//     {itemName: "morish", price: 30, quantity: 3},
//     {itemName: "jinga", price: 20, quantity: 10}
// ]

// function billPrint(billObj) {
//     let totalAmount = 0;
//     for (const item of billObj) {
//         totalAmount += item.price * item.quantity;
//     }
//     return totalAmount;
// }
// const print = billPrint(billObj);
// console.log(print);


// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.


const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function salaryWithIncrement(arr) {
    let totalPay = 0;
    for (const iterator of arr) {
        totalPay += ((iterator.experience > 0 ? iterator.experience : 1) * iterator.increment) + iterator.starting;
        // return (iterator.increment * iterator.);
        // let incremt = 0;
        // for (let i = 0; i < iterator.experience; i++) {
        //     incremt += iterator.increment;
        // }
        // console.log(iterator.starting + incremt);
        // totalPay += iterator.starting + incremt
    }
    return totalPay;
}
const print = salaryWithIncrement(employees)
console.log("Total Salary Pay " + print);













