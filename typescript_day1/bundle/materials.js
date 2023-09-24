"use strict";
// Typescript: adalah bahasa permrograman tingkat tinggi yang merupakan superset dari javascript, yg mana semua semua kode javascript itu valid juga dalam typescript
/////////////////////////
// Preparation Typescript
/////////////////////////
// npm i -g typescript : untuk mengistal typescript secara global
// tsc -v : untuk melihat versi typescript mana yang sudah terinstal
// tsc --init : untuk melakukan inisiasi typescript dalam folder yg spesifik. Perintah ini akan membuat file tsconfig.json di direktori proyek. tsconfig.json adalah file konfigurasi TypeScript yang memungkinkan untuk menentukan berbagai pengaturan proyek, seperti opsi kompilasi, linting, dan banyak lagi."  
// "outDir": "./bundle", : Pengaturan ini dalam tsconfig.json menunjukkan bahwa hasil kompilasi TypeScript akan ditempatkan dalam direktori ./bundle
// "rootDir": "./src" , : Pengaturan ini dalam tsconfig.json menunjukkan bahwa direktori ./src adalah direktori sumber kode TypeScript yang akan dikompilasi.
///////////////////////////////////////////////
// Typescript Assignment and Type Interference
///////////////////////////////////////////////
// Typescript Assignment: dalam typescript kita dapat(biasanya) memberikan Assigment tipe data menggunakan : disebelah nama variabel
let namaSaya = "Reynaldy Septian"; // : string ini adalah assigment pada varabel namaSaya sebagai strings
console.log(typeof namaSaya);
// Typescript Type Interference: typescript sebenarnya akan secara otomatis memberikan assigment terhadap variabel meski belum dideklarasikan tipe datanya
let age = 102; // meskipun blm dideklarasikan tapi typescript ini secara otomatis akan mengerti kalau variabel age ini adalah number
console.log(typeof age);
//////////////////////////
//Javascript VS Typescript
//////////////////////////
/*

1. Tipe Data Statis vs. Tipe Data Dinamis:
   - JavaScript: JavaScript adalah bahasa pemrograman dengan tipe data dinamis. Ini berarti Anda tidak perlu mendeklarasikan tipe data variabel saat membuatnya, dan tipe data variabel dapat berubah selama eksekusi program.
   - TypeScript: TypeScript adalah bahasa pemrograman dengan tipe data statis. Ini berarti Anda harus mendeklarasikan tipe data untuk variabel saat membuatnya, dan kesalahan tipe akan terdeteksi selama kompilasi.

2. Pendeteksian Kesalahan Tipe:
   - JavaScript: Kesalahan tipe dalam JavaScript umumnya terdeteksi saat program berjalan, yang dapat menyebabkan masalah di lingkungan produksi.
   - TypeScript: TypeScript mendeteksi kesalahan tipe selama kompilasi kode, sehingga memungkinkan Anda untuk menemukan dan memperbaiki kesalahan sebelum program dijalankan.

3. Kompilasi:
   - JavaScript: Kode JavaScript dieksekusi langsung oleh mesin JavaScript di browser atau server tanpa tahap kompilasi sebelumnya.
   - TypeScript: Kode TypeScript harus dikompilasi menjadi JavaScript sebelum dijalankan. Ini dilakukan dengan TypeScript Compiler (tsc), yang menghasilkan kode JavaScript dari kode TypeScript.

4. Dukungan Tipe:
   - JavaScript: JavaScript tidak memiliki sistem tipe data yang kuat.
   - TypeScript: TypeScript mendukung berbagai jenis tipe data seperti angka, string, boolean, array, tupel, dan tipe kustom yang dapat didefinisikan.
*/
/////////////////////////////
// Type data dalam Typescript
/////////////////////////////
// Strings
let namaKucing = "bintik";
console.log(`tipe data dari ${namaKucing} adalah: `, typeof namaKucing);
// Number
let umurKucing = 2;
console.log(`tipe data dari ${umurKucing} adalah: `, typeof umurKucing);
// Boolean
let isKucingFat = true;
console.log(`tipe data dari ${isKucingFat} adalah: `, typeof isKucingFat);
// null dan Undifined
let x = null;
let y = undefined;
// Object
let person = { name: "Alice", age: 25 };
console.log(person);
// Array strings
let namaKucings = ["bintik", "oren", "sapi"];
console.log("nama-nama kucing: ", namaKucings);
// Array Number 
let umurKucings = [2, 2, 3];
console.log("umur para kucing: ", umurKucings);
// Array boolean 
let isKucingsFat = [true, false, false];
console.log("apakah para kucing gendut: ", isKucingsFat);
// Tuple
let dataKucing = ["bintik", 2, true];
console.log(`data dari kucing ${dataKucing[0]} adalah: `, dataKucing);
let temanAku = {
    nama: "Guntur",
    isKampret: true,
    umur: 25
};
let temanKamu = {
    nama: "Johan",
    isKampret: true,
};
console.log(temanAku);
console.log(temanKamu);
let reynaldySeptian = "Laki-laki";
console.log({ reynaldySeptian });
let gisell = true;
console.log({ gisell });
