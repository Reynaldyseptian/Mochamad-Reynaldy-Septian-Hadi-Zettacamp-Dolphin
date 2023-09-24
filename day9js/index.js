////////////
//VARIABLE//
///////////



// Cara membuat variable
// Mnggunakan keyword var

var sky = "blue"

// cara menampilkan data dalam variablenya adalah
console.log(sky)

/* 
A. Aturan dalam membuat Variable
 1. Sebuah nama tidak boleh mnggunakan spasi
   contoh: First name (salah)  Firstname (benar)
           My address (salah)   Myaddress (benar) */
    // Contoh praktik

var firstname = "Rehan"
console.log (firstname) //benar

/* var my Address = "cihampelas"
console.log (my Address) salah harusnya adalah*/

var myAddress = "cihampelas"
console.log (myAddress)

 /*2. Sebuah Variable hanya dapat dimulai dengan: Huruf, Underscore atau lambang dolar
    Contoh: Phonenumber, _age, $quantity (benar)
            1hour, 7days (salah) */
    //contoh praktik

var hour = "enamPuluh"
var _age = "Sembilan" 
var $quantity = "dua_belas"

console.log (hour)
console.log (_age)
console.log ($quantity)

    
 /*3. Sebuah variable hanya dapat terkontaminasi oleh
   huruf, angka, underscore, dan dollar sign.
    contoh: totalbill, My_birthday, $cloud9 */
 /*4. Sebuah variable sangat sensitif (case sensitive)
     contoh: nextday dan Nextday adalah berbeda (huruf kecil huruf besar) */    

/*
B. Gaya bahasa penulisan variable yang umum biasa orang gunakan
 1. Camel Case
    adalah cara penulisan dimana setiap huruf awal dari suatu kata menggunakan huruf kecil dan untuk
    huruf kedua dan seterusnya menggunakan huruf besar.
        Contoh: myNumber, ourLastNight
        Info tambahan: Biasanya camel Case digunakan oleh developer2 yang menggunakan javascrip
2. Snake Case
    Adalah cara penulisan dimana semua huruf menggunakan huruf kecil dan kalau ada kata yang lebih dari 1
    akan disambungkan dengan underline
        Contoh: rumhah_sakit_hasansadikin , kamar_mandi
        Info tambahan: bisanya digunakan oleh devloper2 yg menggunakan phyton

Aturan harus diikuti kalau gaya bahasa boleh memilih yang menyesuaikan
*/

/*
C. Perbedaan Var Let dan Const
1. deklarasi var adalah scope global atau scope function sementara let dan const adalah scope blok.
2. variabel var dapat diperbaharui dan dideklarasikan ulang didalam scope nya; variabel let dapat diperbaharui namun tidak dapat dideklarasikan ulang; variabel const juga tidak dapat          diperbaharui maupun di deklarasikan ulang.
3. Semuanya akan dinaikkan ke atas scope nya. Namun variabel  var akan diinisialisasi dengan  undefined, let dan const tidak akan diinisialisasi
4. Sementara  var dan let bisa dideklarasikan tanpa diinisialisasi,const harus diinisialisasi terlebih dahulu pada saat pendeklarasian nya.
*\

// Contoh praktik

var firstname = "Rehan"
console.log (firstname) //benar

/* var my Address = "cihampelas"
console.log (my Address) salah harusnya adalah*/

var myAddress = "cihampelas"
console.log (myAddress)


/* 
Kenapa kita butuh Variable?
1.Dilihat dari fungsinya variable ini digunakan untuk menyimpan data sementara baik itu dari hasil inputan
   user atau dari data sebuah prosses yg di buat dalam suatu program
2. Untuk mempermudah kita dalam pengambilan data  
   */

// Cara muda copy paste shift + ALT + arrow kebawah atau menggunakan var



/////////////
//DATA TYPES
/////////////

/*
 Ada beberapa tipe data pada Variable
1. String
  Biasanya menggunakan tanda kutip ""
  Contoh: "Rey", "kantor", "1234"
  
2. Number
  ada tipe number: 
  1. Integer : 1234 , 3456
  2. Float   : 0.32 , 7.52 , 28.979

3. Boolean
  sebuah data adalah tipe data true and flase, biasanya digunakan dalam
  logic statement dan conditional statement

4. Object dan Array
  Jika sampai sini kita mengetahui bahwa Variable hanya mampu menyimpan
  satu data maka dengan object dan array kita bisa menyimpan lebih dari satu
  data.
 Object:  {firstName: "Tanjiro", lastName: "Kamado"}
 Array: ["Sunday","Monday","Tuesday"]
5. Undifined
 adalah tipe data variable yang belum pernah kita isi dengan data atau nilai.
 Jadi ketika bikin suatu variable yg belum pernah kita isi dengan data maka
 vairabel ini bisa kita sebut undefined atau kosong.

6.Null
 Adalah tipe data kosong atau tidak memiliki data apapun.
 yang memiliki keterangan null atau kosong
*/

//CONTOH PRAKTIK
// 1. String

var greeting = "Hello"
var toDay = "saturday"
var she = "shalsa"

console.log (greeting)

// 2. Number

// A. Interger

var intOne = 1
var intTwo = 234
var intThree = 765865

console.log (intThree)

// B. Float

var perfect = 9.99
var twentyTwo = 22.9

console.log (twentyTwo)

// 3. Boolean

var graduate = true
var sick = false

// 4. Object and array

// Object, menyimpan data lebih dari satu, Objecet dapat memiliki variable

var name = {fistName: "Reynaldy", lastName: "Septian"}

console.log (name.fistName)
console.log (name.lastName)

// Array, minyimpan data lebih dari satu, setiap data akan diwakili oleh nomor index

var days = ["saturday", "Sunday","monday"]

console.log(days[0])
console.log(days[1])
console.log(days[2])

// 5 & 6 Undefined dan Null
// Mewakili variable yang tidak memiliki nilai atau data apapun

var undefined
console.log(undefined)

var nll = null
console.log(nll)

// Mncarti tau jenis data bisa diketahui menggunakan 
// typeof
// contoh

var lang = "language"
typeof(lang)

var result = typeof(lang)
console.log(result)




