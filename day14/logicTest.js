/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * param {number[]} nums - The input array of integers.
 * return {number} Returns the majority element.
 */

function majorityElement(nums) {
    const numsArr = [];

    numsArr.push({
        poin:0,
        number:null
    })

    for (let i = 0; i < nums.length; i++) {
        let numsPoin = {
            poin: 0,
            number: nums[i],
        };

        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                numsPoin.poin += 1;
            }
        }

        numsArr.push(numsPoin);
        if (numsArr[0].poin > numsArr[1].poin) {
            numsArr.splice(1,1)
        } else {
            numsArr.splice(0,1)
        }

    }
    // console.log(numsArr)
    return numsArr[0].number
}

// console.log(majorityElement([1, 2, 3, 4,7, 5, 6, 7, 8, 9])); // Output: 7
// console.log(majorityElement([1, 2, 3, 4,17, 5, 6, 17, 8, 9])); // Output: 


console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 










