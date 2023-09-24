/*
Try create a book purchasing function that has parameters detail of a book, percentage of the discount, percentage of tax. Then display all the parameters with additional data:
1. Amount of discount
2. Price after discount
3. Amount of tax
4. Price after tax

Note:
The function must have at least:
Constant variable
Boolean, number, string variable
Assignment, addition, addition, subtraction, multiplication, division operator
*/



// Task 1

// Books Object
const book = {
    name: "rolling stone magazine",
    price: 100000,
    discount: false,
}



Purchasing(book.name, book.price, book.discount)
// Purchasing(book)

// function Purchasing(a){
//     const purcashBook = {
//         name: a.name,
//         price: a.price,
//         amountDiscount: 0,
//         priceAfterDiscount:0,
//         amountTax:0,
//         priceAfterTax:0
//     }

//     const discount = 15 // %
//     const tax = 10 // %

//     if (a.discount){
//         // Counting Amount Discount
//         const jumlahDiskon = (a.price * discount) / 100
//         purcashBook.amountDiscount = jumlahDiskon

//         // Counting Price After Discount
//         const afterDiscount = a.price - jumlahDiskon
//         purcashBook.priceAfterDiscount =  afterDiscount

//         // Counting Amount Tax
//         const amountTax = (afterDiscount * tax) / 100
//         purcashBook.amountTax = amountTax

//         //Counting Price After Tax
//         purcashBook.priceAfterTax = afterDiscount + amountTax

//     } else if (!a.discount){
//         // Counting Amount Discount
//         const jumlahDiskon = 0
//         purcashBook.amountDiscount = jumlahDiskon

//         // Counting Price After Discount
//         const afterDiscount = a.price - jumlahDiskon
//         purcashBook.priceAfterDiscount =  afterDiscount

//         // Counting Amount Tax
//         const amountTax = (afterDiscount * tax) / 100
//         purcashBook.amountTax = amountTax

//         //Counting Price After Tax
//         purcashBook.priceAfterTax = afterDiscount + amountTax

//     }

//     // return purcashBook
//     return console.table(purcashBook)
// }

function Purchasing(a, b, c){
    const purcashBook = {
        name: a,
        price: b,
        amountDiscount: 0,
        priceAfterDiscount:0,
        amountTax:0,
        priceAfterTax:0
    }

    const discount = 15 // %
    const tax = 10 // %

    if (c){
        // Counting Amount Discount
        const jumlahDiskon = (b * discount) / 100
        purcashBook.amountDiscount = jumlahDiskon

        // Counting Price After Discount
        const afterDiscount = b - jumlahDiskon
        purcashBook.priceAfterDiscount =  afterDiscount

        // Counting Amount Tax
        const amountTax = (afterDiscount * tax) / 100
        purcashBook.amountTax = amountTax

        //Counting Price After Tax
        purcashBook.priceAfterTax = afterDiscount + amountTax

    } else if (!c){
        // Counting Amount Discount
        const jumlahDiskon = 0
        purcashBook.amountDiscount = jumlahDiskon

        // Counting Price After Discount
        const afterDiscount = b - jumlahDiskon
        purcashBook.priceAfterDiscount =  afterDiscount

        // Counting Amount Tax
        const amountTax = (afterDiscount * tax) / 100
        purcashBook.amountTax = amountTax

        //Counting Price After Tax
        purcashBook.priceAfterTax = afterDiscount + amountTax

    }

    // return purcashBook
    return console.table(purcashBook)
}


// console.table(Purchasing(book))

