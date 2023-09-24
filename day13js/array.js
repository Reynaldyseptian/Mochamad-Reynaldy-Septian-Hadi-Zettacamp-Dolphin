//////////////
// syntax array
////////////

// let things = [`books`, `pen`, `clock`]

// console.log(things) // [ 'books', 'pen', 'clock' ]

// var random = [23, `Michael`, true, 3.14]
// console.log(random) // [ 23, 'Michael', true, 3.14 ]
// console.table(random)

//// cara mengakses 1 nilai dalam array
// index,  adalah nomor pendataan dalam sebuah array. dimulai dari 0
// console.log(`Things 1 :` + things[1]) // Things 1 :pen


//////////
// Mengubah Data
////////////

// let things = [`books`, `pen`, `clock`]
// things[0] = `paper` 
// things[2] = `shoes`

// console.log(things) // [ 'paper', 'pen', 'shoes' ]

//////////////////////
//// create new index
///////////////////////
// things[3] = 'shoes'

// console.log(things) // [ 'paper', 'pen', 'shoes', 'shoes' ]

// things[5] = `glass`

// console.log(things)
// // [ 'paper', 'pen', 'shoes', 'shoes', <1 empty item>, 'glass' ]

// console.log(things[4]) // undifined

// ///////////////////
// // lenght of array
// //////////////////

// console.log(`leng dari array things : ${things.length}`) //
//    // leng dari array things : 6


//////////////////////////////////////////
// Push : menambahkan value pada index terakhir
// POP : Menghapus value pada index terakhir
///////////////////////////////////////////

// // PUSH
// let random = ["book", "pen", "clock"]

// random.push("jacket")
// // // Bisa update beberapa data
// random.push("apple", "banana")
// // // Bisa ditambahkan juga dengan type data lain seperti integer dan bolean
// random.push(23, true, {name:"reynaldy"}, ["hehey","hohohohoho"])
// console.table(random)
// console.log(random)

// // POP
// // Menghilangkan satu satu/ setiap proses hanya 1x pop

// // setiap sytax pop keluar maka data paling belakang akan dihapus
// random.pop()

// console.table(random)


//////////////////////////////////////////
// UNSHIFT : menambahkan value pada index PERTAMA
// SHIFT : Menghapus value pada index PERTAMA
///////////////////////////////////////////

// // unshift

// // sebelum diubah
// console.table(random)

// // menambah satu data
// random.unshift("jacket")
// // bisa menambah 2 data tapi yang akan masuk duluan adalah data yang paling belakang
// random.unshift("apple", "banana")
// // bisa menambahkan type data lain seperti integer dan bolean
// random.unshift["pencil", 3, true]

// console.table(random)

// // unshift
// // kurang lebih sama dengan pop hanya saja dimulai dari yang depan

// random.shift()

// random.shift()

// console.table(random)


//////////////////////////////////////
// Splice : menghapus dan menambahkan data
/////////////////////////////////////

/*
  syntax
  array.splice(index, amount, new data )

  index: index awal dimulainya oprasi 
  amount : jumlah data yang akan dihapus, mulai dari (index)
  new data : data baru yang akan ditambahkan di titik index dimulai
*/



//////////////////
// Menghapus data
/////////////////
// aturannya : jika index ditengah dihapus maka index sesudah index tsb akan mengisi bagian yang kosongnya


// let things = ["book", "pen", "clock", "paper"]
// // (menhilangkan dari index ke 1, dihapus sebanyak 2 data)
// things.splice(1, 2)

// console.log(things) // [ 'book', 'paper' ]

////////////////////
// menambahkan data
///////////////////

let things = ["book", "pen", "clock", "paper"]

// contoh 1
// dibaca (dari index pertama, data yang dihapus sebanyak 0, dan akan dimasukan data "table")
things.splice(1, 0, "table")
// [ 'book', 'table', 'pen', 'clock', 'paper' ]
console.log(things)

// contoh 2

// things.splice(3, 0, "HandPhone", "Robot")
// // [ 'book', 'pen', 'clock', 'HandPhone', 'Robot', 'paper' ]
// console.log(things)

//////////////////////////////////////
// Menghapus dan menambahkan data baru
//////////////////////////////////////

// let things = ["book", "pen", "clock", "paper"]
// // dibaca (dari index kedua, akan dihapus sebanyak 2 data, lalu ditambahkan "robot" dan "rat")
// things.splice(2, 2, "robot", "Rat")
// // [ 'book', 'pen', 'robot', 'Rat' ]
// console.log(things)


/////////
// Delete
/////////

// Mengapus tanpa dan men'undifined index yang di hapus

// let things = ["book", "pen", "clock", "paper"]

// delete things[0]

// delete things [1]
// // [ <2 empty items>, 'clock', 'paper' ]
// console.log(things)

////////
// MAPS
////////

// const sweetArray = [2, 3, 4, 5, 35]
// const sweeterArray = sweetArray.map(sweetItem => {
//     return sweetItem * 2
// })

// console.log(sweeterArray)