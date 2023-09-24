//////////////////////
// Javascript Operator
//////////////////////

/*
Operator adalah simbol yang dapat digunakan untuk memberi tahu mesin JavaScript untuk melakukan tindakan, operasi, atau melakukan perhitungan, entah itu perhitungan matematika maupun logika. Nilai atau variabel yang dibutuhkan untuk melakukan operasi disebut operan. 

Types of JavaScript Operators
There are different types of JavaScript operators:

a. Arithmetic Operators
b. Assignment Operators
c. Comparison Operators
d. Logical Operators
e. Bitwise Operators
f. Ternary Operators
g. Type Operators
h. Strings Operators

*/

// Contoh penggunaan

///////////////////////////
// A. Arithmetic Operators
///////////////////////////

let myPoin = 2
let yourPoin = 5

 // 1. penjumlahan
const combinePoin = myPoin + yourPoin
console.log(combinePoin) // 7

 // 2. pengurangan
 const minusPoin = yourPoin - myPoin
 console.log(minusPoin) // 3

 // 3. Perkalian
 const 	multiplicationPoin = myPoin * yourPoin
 console.log(	multiplicationPoin) // 10

 // 4. pembagian
 const divisionPoin = yourPoin / myPoin
 console.log(divisionPoin) // 2.5

 // 5. Modulus,  mencari sisa pembagian
 const modulusPoin = yourPoin % 2
 console.log(modulusPoin) // 1

 // 6. Increment, kenaikan ++ dari poin
 myPoin++
 let increPoin = myPoin
 console.log(increPoin) // 3

 // 7. Decrement, penurunan -- dari poin
 yourPoin--
 let decrePoin = yourPoin
 console.log(decrePoin) // 4

 // 8. Exponentiation, ** kuadrat (sama seperti Math.Pow)
const ourPoin = 4
const exponOurPoin = 4 ** 2
console.log(exponOurPoin)

/*
As in traditional school mathematics, the multiplication is done first.
Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-). 
 */



/////////////////////////
//B. Assignment Operators
//////////////////////////
 
// =
let a = 2;
a = 4; // a = 4
console.log(a); // 4

// +=
let b = 6;
b += 4; // b = 6 + 4
console.log(b); // 10

// -=
let c = 5;
c -= 2; // c = 5 - 2
console.log(c); // 3

// *=
let d = 5;
d *= 2; // d = 5 * 2
console.log(d); // 10

// /=
let e = 5;
e /= 2; // e = 5 / 2
console.log(e); // 2.5

// %=
let f = 5;
f %= 2; // f = 5 % 2
console.log(f); // 1

// **=
let g = 5;
g **= 2; // g = 5 ** 2
console.log(g); // 25

/////////////////////////
//C. Comparition Operators
//////////////////////////

/*
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator 
*/

///////////////////////////
// D. Logical Operators
///////////////////////////

/*
Operator logika biasanya digunakan dalam conditional statement atau pernyataan bersyarat seperti if.

Operator logika && dan || dapat digunakan untuk menggabungkan nilai agar menghasilkan satu nilai Boolean yang sesuai dengan logika.

Jika nilai atau operan bukan Boolean maka akan dikonversi menjadi Boolean. Kedua operator tersebut membutuhkan dua operan.

Sedangkan ! (negasi) mengembalikan nilai kebalikan Boolean saat ini.
*/

// contoh

const sudahMandi = true
const sudahBelajar = true
const sudahTidur = false

// &&

if (sudahMandi && sudahBelajar){
    console.log("kamu sudah mandi dan sudah belajar")
}else if(!sudahMandi && sudahBelajar){
    console.log("kamu belum mandi tapi sudah belajar")
}else if(sudahMandi && !sudahBelajar){
    console.log("kamu sudah mandi tapi belum belajar")
}

// ||

if(sudahMandi || sudahTidur){
    console.log("kamu sudah mandi atau sudah tidur")
}else{
    console.log("kamu belum mandi atau tidur")
}

///////////////////////
// E. Bitwise Operator
//////////////////////

/*
Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
*/

///////////////////////
// F. Ternary Operators
//////////////////////

let favComic = `OnePiece Comic`
const comic = `Naruto Comic`

console.log(favComic === comic ?  true : false)
console.log(typeof(favComic) === typeof(comic) ? true : false)

///////////////////
// G. Type Operator
///////////////////

/*
typeof	Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type
*/

console.log("tipe data dari favComic adalah" ,typeof(favComic))

///////////////////////
// H. Strings Operator
//////////////////////

// example 1 

let favBook = `OnePiece Comic`
const book = `Naruto Comic`

favBook = 'Jujutsu Kaisen'
// book = 'DragonBall'

console.log(favBook)
console.log(book)


// example 2

let books = book + ` and `+ favBook
let books2 = `${book} and ${favBook}`

console.log(books)
console.log(books2)