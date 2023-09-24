// Books Object
const book = {
    name: "magazine",
    price: 1200,
    discount: 0, // %
    stock: 19,
    purchased: 10,
    credit: 4,
}

// Menggunakan fungsi Purchasing untuk mendapatkan pembelian dalam bentuk array objek
const purchases = Purchasing(book.name, book.price, book.discount, book.stock, book.purchased, book.credit);

// Fungsi untuk pembelian buku
function Purchasing(bookName, bookPrice, bookDiscount, bookStock, bookPurchased, bookCredit) {
    const purchases = [];
    const discount = bookDiscount; // %
    const tax = 10; // %
    const credit = bookCredit // month

// Fungsi untuk menghitung tanggal jatuh tempo dimulai dari bulan depan
function calculateDueDateMonthsAhead(monthsAhead) {
    const namaBulan = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ags", "Sep", "Oct", "Nov", "Des"]
    let day = 28
    const bulan = 8
    const monthIndex = bulan + monthsAhead > 12 ? (bulan + monthsAhead) - 12 : bulan + monthsAhead 
    const year = bulan + monthsAhead > 12 ? 2023 + (Math.floor((bulan + monthsAhead)/12)) : 2023

    if(day > 28 && namaBulan[monthIndex-1] === "Feb"){
        day = 28
    }
    if (day > 30 && namaBulan[monthIndex-1] === "Apr"){
        day = 30
    }
    if (day > 30 && namaBulan[monthIndex-1] === "Jun"){
        day = 30
    }
    if (day > 30 && namaBulan[monthIndex-1] === "Sep" ){
        day = 30
    }
    if (day > 30 && namaBulan[monthIndex-1] === "Nov" ){
        day = 30
    }


    const currentDate = `${day}:${namaBulan[monthIndex-1]}:${year}`
    return currentDate;
}


    for (let i = 1; i <= credit; i++) {
        // Object yang akan dikirimkan ke array purchses
        const purchase = {
            name: bookName,
            amountStock: bookStock - bookPurchased >= 0 ? bookStock - bookPurchased : 0,
            amountPurchased: bookPurchased,
            info: bookStock >= bookPurchased ? "Stock dapat dibeli" : "Stock Tidak Mencukupi",
            price: bookPrice,
            amountDiscount: 0,
            priceAfterDiscount: 0,
            amountTax: 0,
            priceAfterTax: 0,
            totalPrice: 0,
            monthlyCredit:0,
            payed:0,
            minus:0,
            dueDate: calculateDueDateMonthsAhead(i)
        };

        // Menhitung Jumlah Diskon
        const jumlahDiskon = (bookPrice * discount) / 100;
        purchase.amountDiscount = jumlahDiskon;

        // Menghitung Harga Setelah Discount
        const afterDiscount = bookPrice - jumlahDiskon;
        purchase.priceAfterDiscount = afterDiscount;

        // Menghitung Jumlah Pajak
        const amountTax = (afterDiscount * tax) / 100;
        purchase.amountTax = amountTax;
        
        // Menhitung Harga Setelah Dipotong Pajak
        const priceAfterTax = afterDiscount + amountTax;
        purchase.priceAfterTax = priceAfterTax;

        // Menghitung Total Harga Buku
        const totalBookPrice = priceAfterTax * purchase.amountPurchased;
        purchase.totalPrice = totalBookPrice

        // Menghitung Biaya yang harus dibayar perbulan
        const monthlyCredit = totalBookPrice / credit
        purchase.monthlyCredit = Math.ceil(monthlyCredit)

        // Menhitung Jumlah Yang Sudah dibayar
        const pricePayed = monthlyCredit * i
        purchase.payed = Math.ceil(pricePayed)

        // Menghitung jumlah sisa yang harus dibayar
        const priceMinus = totalBookPrice - pricePayed
        purchase.minus = Math.ceil(priceMinus) 
        
        // Kondisi Untuk Menghentikan looping jika stok tidak mencukupi
        if (purchase.info === "Stock Tidak Mencukupi") {
            purchase.payed = 0
            purchase.minus = 0
            purchases.push(purchase);
            break; // Menghentikan looping jika stok tidak mencukupi
        }

        purchases.push(purchase);
        
    }

    return purchases;
}

// Menampilkan informasi pembelian
console.table(purchases);
console.log(purchases);
