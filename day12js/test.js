////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Update your book purchasing function to have parameter amount of stock & amount of purchased book. Then calculate total price & display the result.
//
// Note:
// The function must have at least:
// for loop iteration
// break when amount of book is already out of stock
// Display text if amount of book after purchasing can be purchased again or not
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Books Object
const book = {
    name: "rolling stone magazine",
    price: 100000,
    discount: 15,
    stock: 3,
    purcashed: 5
}



Purchasing(book.name, book.price, book.discount, book.stock, book.purcashed)

function Purchasing(bookName, bookPrice, bookDiscount, bookStock, bookPurcashed){
    // Object Yang akan di Display
    const purcashBook = {
        name: bookName,
        amountStock: bookStock,
        amountPurchased: bookPurcashed,
        info:"",
        price: bookPrice,
        amountDiscount: 0,
        priceAfterDiscount:0,
        amountTax:0,
        priceAfterTax:0,
        totalPrice:0
    }
     
    // Ketentuan discount dan tax
    const discount = bookDiscount // %
    const tax = 10 // %

    // Mencari Info Stock
    for(i = 1; i <= bookPurcashed; i++){
        if(bookStock >= i){
            purcashBook.amountStock -= 1
            purcashBook.info = "Stock dapat dibeli"
        }else if(bookStock < i){
            purcashBook.amountStock = bookStock
            purcashBook.info = "Stock Tidak Mencukupi"
            break
        }
    }
    
    // Menghitung total Harga
    if (purcashBook.info === "Stock dapat dibeli"){
        // Counting Amount Discount
        const jumlahDiskon = (bookPrice * discount) / 100
        purcashBook.amountDiscount = jumlahDiskon

        // Counting Price After Discount
        const afterDiscount = bookPrice - jumlahDiskon
        purcashBook.priceAfterDiscount =  afterDiscount

        // Counting Amount Tax
        const amountTax = (afterDiscount * tax) / 100
        purcashBook.amountTax = amountTax

        //Counting Price After Tax
        const priceAfterTax = afterDiscount + amountTax
        purcashBook.priceAfterTax = priceAfterTax

        // Counting Total Price
        purcashBook.totalPrice = priceAfterTax * purcashBook.amountPurchased

    } else if (purcashBook.info === "Stock Tidak Mencukupi"){
        // Counting Amount Discount
        const jumlahDiskon = (bookPrice * discount) / 100
        purcashBook.amountDiscount = jumlahDiskon

        // Counting Price After Discount
        const afterDiscount = bookPrice - jumlahDiskon
        purcashBook.priceAfterDiscount =  afterDiscount

        // Counting Amount Tax
        const amountTax = (afterDiscount * tax) / 100
        purcashBook.amountTax = amountTax

        //Counting Price After Tax
        const priceAfterTax = afterDiscount + amountTax
        purcashBook.priceAfterTax = priceAfterTax

        // Counting Total Price
        purcashBook.totalPrice = priceAfterTax * purcashBook.amountStock
        purcashBook.amountPurchased = purcashBook.amountPurchased - purcashBook.amountStock
        purcashBook.amountStock = 0
    }

    // return purcashBook
    return console.table(purcashBook)
}


// console.table(Purchasing(book))