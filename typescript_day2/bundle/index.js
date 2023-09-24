"use strict";
const combineArrayElements = (caseArr) => {
    return caseArr.join(' ');
};
// Case 1
const case1 = [1, 'data', '3', 'result'];
const result1 = combineArrayElements(case1);
console.log(result1); // Output: '1 data 3 result'
// Case 2
const case2 = ['Bejo', 'has', '4', 'sport', 'car'];
const result2 = combineArrayElements(case2);
console.log(result2); // Output: 'Bejo has 4 sport car'
/////////////////////////////////////////////////////////////////////
const sumAllArrayElement = (arr) => {
    // Array with Empty value
    if (typeof arr[0] === 'undefined') {
        return 'invalid input';
    }
    // Check if the array contains only numbers
    if (arr.every(item => typeof item === 'number')) {
        // If it's an array of numbers, sum them up
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += Number(arr[i]); // Convert the item to a number before adding
        }
        return sum;
    }
    // Check if the array contains only strings
    if (arr.every(item => typeof item === 'string')) {
        // If it's an array of strings, concatenate them with a space
        const concatenatedString = arr.join(' ');
        return concatenatedString;
    }
    return 'invalid input';
};
// Test cases
console.log(sumAllArrayElement([1, 2, 3, 4])); // 10
console.log(sumAllArrayElement(['the', 'dolphins', 'of', 'zettacamp'])); // 'the dolphins of zettacamp'
console.log(sumAllArrayElement(['Bejo', 'has', 4, 'sport', 'car'])); // 'invalid input'
console.log(sumAllArrayElement([])); // // 'invalid input'
// Function to process the order
const productOrder = (productData) => {
    if (productData.quantity > productData.inStock) {
        return {
            name: productData.name,
            buyAble: false,
        };
    }
    else {
        return {
            name: productData.name,
            buyAble: true,
            totalPrice: productData.quantity * productData.price,
        };
    }
};
// Test cases
const order1 = {
    name: 'Coca-Cola',
    vendor: 'Coca-Cola Company',
    quantity: 5,
    inStock: 1000,
    price: 5000
};
console.log(productOrder(order1)); // { name: 'Coca-Cola', buyAble: true, totalPrice: 25000 }
const order2 = {
    name: 'Sari Roti',
    vendor: 'Toko Kue Sebelah',
    quantity: 2,
    inStock: 0,
    price: 10000
};
console.log(productOrder(order2)); // { name: 'Sari Roti', buyAble: false }
