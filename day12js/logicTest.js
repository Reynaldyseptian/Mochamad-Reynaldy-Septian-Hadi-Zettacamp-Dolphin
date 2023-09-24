// Title: Unique Characters

// Description:
// Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

// Example:
// console.log(hasUniqueCharacters("abcdefg")); // Output: true
// console.log(hasUniqueCharacters("hello")); // Output: false
// */


function hasUniqueCharacters(str) {
    const strLower = str.toLowerCase()
    // Looping pertama untuk menentukan seberapa banyak loopig ini akan berlangsung i
    for (let i = 0; i < strLower.length; i++) {
        // Looping kedua untuk membandingkan index i + 1 dan j dalam sebuat kata  
        for (let j = i + 1; j < strLower.length; j++) {
            // validasi apakah strLoweri index ke i sama dengan strLower index ke j
            if (strLower[i] === strLower[j]) {
                return false;
            }
          }
    }
    return true;
  }

  
  console.log(hasUniqueCharacters("abcdefg")); // Output: true
  console.log(hasUniqueCharacters("heLlo"));   // Output: false
  console.log(hasUniqueCharacters("reynaldy"));   // Output: false
  console.log(hasUniqueCharacters("johan"));   // Output: true