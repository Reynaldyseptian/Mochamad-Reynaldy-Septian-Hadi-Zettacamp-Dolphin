/**
 * write a function that returns true if there's duplicate in the array, and false otherwise.
 * SEE EXAMPLE BELLOW!
 * 
 * 
Example
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

 * Determines if the array contains any duplicate value.

 * param {number[]} nums - The input array of integers.
 * return {boolean} Returns true if the array contains any duplicate value, false otherwise.
 */
function containDuplicate(nums) {
        // Looping pertama untuk menentukan seberapa banyak loopig ini akan berlangsung i
        for (let i = 0; i < nums.length; i++) {
            // Looping kedua untuk membandingkan index i + 1 dan j dalam sebuah array 
            for (let j = i + 1; j < nums.length; j++) {
                // validasi apakah nums index ke i sama dengan nums index ke j
                if (nums[i] === nums[j]) {
                    return true;
                }
              }
        }
        return false;
  }


  console.log(containDuplicate(["a", 2, 3, "a"])); // Output: true
  console.log(containDuplicate([1, 2, 3, 4])); // Output: false
  console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true
  