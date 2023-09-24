//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//1. Form variable JavaScript day 1
// a. Use comparison operator with 2 variables from task number 1, display true if the name of books have same name otherwise display false

//2. Create new 2 variables to contain price of your favourite books
// a. Compare the variables which one have the highest price
// b. Find the average price from those 2 variables using arithmetic operator
// c. Create new variable to use ternary operator to determine the value of variable, if the average price more than 500000 set value with string “Expensive” if less or equal set “Cheap”
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////
// Task 1. a
/////////////

// method 1
let favBook = `OnePiece Comic`
// const book = `Naruto Comic`
const book = `OnePiece Comic`


if (favBook === book ){
    console.log("ini perbandingan nama buku:", true)
} else {
    console.log("ini perbandingan nama buku:",false)
}
if (typeof(favBook) === typeof(book)){
    console.log("ini perbandingan tipe data buku:", true)
} else {
    console.log("ini perbandingan tipe buku:",false)
}


// method 2

console.log(favBook === book ?  true : false)
console.log(typeof(favBook) === typeof(book) ? true : false)

//////////
// Task 2
//////////

// const reynaldyBook = 40000
// const yourBook = 50000

const reynaldyBook = 40000
const yourBook = 30000

// const reynaldyBook = 40000
// const yourBook = 40000



// a

 // method 1
console.log(reynaldyBook > yourBook ? `Buku reynaldy lebih mahal Rp.${reynaldyBook - yourBook} dari punyamu` : `Bukumu lebih mahal Rp.${yourBook-reynaldyBook} dari buku Reynaldy`)

 // method 2
if(reynaldyBook>yourBook){
    console.log(`Buku reynaldy lebih mahal Rp.${reynaldyBook - yourBook} dari punyamu`)
} else if (reynaldyBook<yourBook){
   console.log(`Bukumu lebih mahal Rp.${yourBook-reynaldyBook} dari buku Reynaldy`) 
} else if(reynaldyBook==yourBook){
    console.log(`Harga Buku sama`) 
}

// b
const averageBook = (reynaldyBook + yourBook) / 2 
console.log(`Harga rata-rata buku Kamu dan Reynaldy adalah Rp.${averageBook}`)

// c 
console.log(averageBook >= 50000 ? `Harga rata-rata buku Kamu dan Reynaldy ternyata mahal` : `Harga rata-rata buku Kamu dan Reynaldy ternyata murah`)

////////////
//Logic Test
////////////

/* 
 Write a function max_of_two(a, b) that takes in two integers, a and b, and returns the maximum of the two numbers without using any arrays or built-in functions like max().

function max_of_two(a, b) {
    // Your logic here
  }
  
  console.log(max_of_two(10, 5));
  console.log(max_of_two(45, 66));
*/

function max_of_two(a, b) {
    // Your logic here

    // if (a>b){
    //     return a
    // } else if(a<b) {
    //     return b
    // } else{
    //     return "same numbers! please input different numbers"
    // }

    return  a>b  ? a : a<b ? b : "same numbers! please input different numbers" 
  }
  
  console.log(max_of_two(10, 5));
  console.log(max_of_two(45, 66));
  console.log(max_of_two(45, 45));

