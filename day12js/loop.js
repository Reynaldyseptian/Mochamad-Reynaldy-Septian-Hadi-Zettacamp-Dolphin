/////////
// For Of
//////////

const cars = ["hehei", "hoho", "wkwk"];

let text = "";
for (let x of cars) {
  text += x;
  console.log(x)
}

///////////
// For Loop
///////////

/*
     1. Membuat Variabel Sebagai Acuan (init)
     2. Mengevaluasi Condition
        a. True : menjalankan task (langkah no3)
        b. False : Keluar dari loop
     3. Menjalankan task
     4. Menjalankan modification, kembali ke langkah no2
*/

// init, condition, task, modification

// for (init ; condition ; modification ){

//     task
// }

/////////////////////////
// Menampilkan angka 1-5
/////////////////////////

// for (var i = 1 ; i <= 5 ; i++){
//     console.log(`Number : ${i}`)

// }

/////////////////////////
// Menampilkan angka Genap
/////////////////////////

// for( var i = 10 ; i >= 0 ;i-- ){
//    if(i % 2 ==0 ) {
//     console.log(`${i} adalah bilangan Genap`)
//    } else {
//     console.log(`${i} adalah bilangan GANJIL`)
//    }
   
// }





///////////////////////////////////////////////////
// Mencari angka random (0-99) yang dapat dibagi 5
///////////////////////////////////////////////////



// Infinite Loop : loop yang selalu true

// while(true){

//     // mendapat angka random 0-99  
//     var rand = Math.floor(Math.random() * 100)
//   // menampilkan angka random
//   console.log(rand)
//     // jika angka random habis dibagi 
//     if (rand % 5 == 0){
//   // Hentikan proses loop
//       break
  
//     }
//   }
  
/////////////////////////////////////////////////////////////////////////////////////////////////
// Continue : Mengabaikan semua proses yang ada setelah keyword ini dan lanjut ke loop berikutya
/////////////////////////////////////////////////////////////////////////////////////////////////

// Print 1- 10. melewati angka yang habis dibagi 3

// loop sampai angka 10
for ( var i = 1 ; i <= 10 ; i++){
    // Jika i = habis dibagi tiga, maka:
     if (i % 3 == 0){
    // Melanjutkan tanpa memproses angka i tsb
        continue
     }
    // menampilkan hasil proses
    console.log(`Print : ${i}`)
}

/* What is loop? Loop statement adalah statement pada
Javascript yang memungkinkan kita mengulang pekerjaan yang serupa
selama kondisi tertertentu terpenuhi

when? saat adaa suatu pengulangan sebuah prosss yang serupa

why? karena ini adalah cara terbaik dalam menulis kode untuk menangani suatu prosess yang serupa

how? 

*/

// while loop / do while / for loop

// while loop

/* 
 ATURAN UTAMA LOOP (UNTUK SRMUA JENIS LOOP)

  "Selama condition bernilai 'true', maka task yang ada akan dikerjakan"
*/

/*
   Alur proses
 
   Alur A: while dan for

   Alur B: do while

*/
/*
syntax

while(condition){
    task
}
*/

/////////////////////////////
// Menampilkan angka 1 sampai 5
/////////////////////////////


/*
     Alur prosses while loop

     1. membuat variabel dengan nilai awal sebagai acuan loop (init)
     2. mengevaluasi condition 
       a. Condition : true, memproses yang ada
       b. condition : false, keluar dari block loop
     3. Setelah menyelesaikan task yang ada di dalam block, memodifikasi / merubah nilai pada variabel initnya
     4. kembali ke langkah 2
 */

// Init
// var number = 1

// while(number <= 5){
//     console.log(`Number : ${number}`)

//     number++
// }

// console.log("selesai loop")


//////////////
// Do While Loop
///////////////



/*
do {
    task
} while (condition)
*/

////////////////////////////////////////
// menampilkan angka 1-5 dengan do while
////////////////////////////////////////

/*
    Alur proses DO WHILE

    1. membuat variable init
    2. menjalankan task, menjalankan modifikasi
    3. melakukan evaluasi kondisi
       a. condition : true, kembali ke step 2
       b. condition : false, keluar dari block do while
       
*/

// membuat variable init

// var number = 0
// //menjalankan task
// do {
//     // menampilkan nilai number
//     console.log(`Number : ${number} `)
// // menjumlahkan nilai number dengan 1
// number++

// // Evaluasi condition
// } while (number <=5 )

// console.log(`selesai do while`)


// ////////////////////////////////////////
// // menampilkan angka 1-5 dengan while
// ////////////////////////////////////////

// var number = 0

// while ( number <=5){
//     console.log(`Number : ${number}`)
//     number++
// }

// console.log(`selesai while`)


// perbedaannya adalah ketika inet sejak awal sudah false 'do while' ttp menjalankannya dulu sedangkan while tidak


// ////////////////////////////////////////
// // menampilkan angka Ganjil dan Genap
// ////////////////////////////////////////


// Init
// var number = 3

// do {
//      // evaluasi apakah number merupakan bilangan genap
//     if(number % 2 == 0 ){
//      // jika number bilangan genap   
//    console.log(`${number} adalah GENAP`)
//     } else {
//     // jika number bilangan ganjil
//         console.log(`${number} adalah GANJIL`)
//     }
// // Modification, menambah nilai pada number dengan suatu nilai
// number++
// // evaluasi condition, untuk menentukan apakah sebuah task akan dikerjakan ulang
// } while (number <=10 )

