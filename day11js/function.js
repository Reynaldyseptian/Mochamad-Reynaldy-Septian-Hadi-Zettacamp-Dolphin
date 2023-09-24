///////////
// FUNCTION
///////////

/*
  Block Kode:
   1. memiliki nama
   2. dapat digunakan secara berulang
   3. dapat memiliki input dan output
    
   Note :
    1. input data adalah proses dimana kita dapat memberikan value kepada function untuk digunakan
    2. Output adalah proses yang dilakukan oleh function dalam menghasilkan value sehingga dapat disimpan di variable
*/

// Syntax Function

/* 

keyword 'function' + nama + () + {}

() -> tempat menulis parameter

parameter adalah tempat menyimpan input

{} -> tempat menulis task yang akan dikerjakan saat function dijalanakan

*/

///////////////////////
// Function Declaration
///////////////////////

function firstStep(){
  var name = `Ozzie`
  console.log(`Vocalis Black Sabbath adalah ${name}`)
}

// Vocalis Black Sabbath adalah Ozzie
// Vocalis Black Sabbath adalah Ozzie
// Vocalis Black Sabbath adalah Ozzie

firstStep()
firstStep()
firstStep()

///////////////////////
// Function Expression
///////////////////////

var SeccondStep = function(){
  console.log(`Hidup seperti Larry`)
}

// Hidup seperti Larry
SeccondStep()

/////////////////////
//Perbedaan Keduanya
/////////////////////

/// Hoisted ///
// (dijalankan terlebih dahulu)

// Hijau Daun
leaf();

function leaf() {
  console.log(`Hijau Daun`);
}

/// Not Hoisted ///

// daun is not a function
daun();

var daun = function () {
  console.log(`Klorofil`);
};

/////////////////
// Arrow Function
/////////////////

// var SeccondStep = function () {
//   console.log(`Hidup seperti Larry`);
// };

// // Hidup seperti Larry
// SeccondStep();

// // Atau

// var SeccondStep = () => {
//   console.log(`Hidup seperti Larry`);
// };
