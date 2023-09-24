 type unionArrType = (number | string)[]

 const combineArrayElements = (caseData: unionArrType): string => {
    return caseData.join(' ');
  }

  // Test Cases
  const case1 = [1, 'data', '3', 'result'];
  console.log(combineArrayElements(case1)); //  '1 data 3 result'
  
  const case2 = ['Bejo', 'has', '4', 'sport', 'car'];
  console.log(combineArrayElements(case2)); //  'Bejo has 4 sport car'

//////////////////////////////////////////////////////////////////////////

  const sumAllArrayElement = (caseData: unionArrType): number | string =>{
    // Array with Empty value
    if(typeof caseData[0] === 'undefined'){
     return 'invalid input';
    }
  
   // Check if the array contains only numbers
   if (caseData.every(item => typeof item === 'number')) {
    // If it's an array of numbers, sum them up
    let sum: number = 0;
    for (let i = 0; i < caseData.length; i++) {
      sum += Number(caseData[i]); // Convert the item to a number before adding
    }
    return sum;
   }

   // Check if the array contains only strings
   if (caseData.every(item => typeof item === 'string')) {
    // If it's an array of strings, concatenate them with a space
    const concatenatedString = caseData.join(' ');
    return concatenatedString;
   }

  return 'invalid input';
  }
  
  // Test cases
  console.log(sumAllArrayElement([1, 2, 3, 4])); // 10
  console.log(sumAllArrayElement(['the', 'dolphins', 'of', 'zettacamp'])); // 'the dolphins of zettacamp'
  console.log(sumAllArrayElement(['Bejo', 'has', 4, 'sport', 'car'])); // 'invalid input'
  console.log(sumAllArrayElement([])); // // 'invalid input'


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// create new custom data type
type orderType = {
    name : string,
    vendor : string,
    quantity : number,
    inStock : number
    price : number
}

type receiptType = {
    name: string,
    buyAble: boolean,
    totalPrice?: number
}

// Function to process the order
const productOrder = (productData : orderType) : receiptType =>{
    if (productData.quantity > productData.inStock){
        return {
            name: productData.name,
            buyAble:false,
        }
    } else {
        return {
            name: productData.name,
            buyAble:true,
            totalPrice: productData.quantity * productData.price,
        }
    }
}

 // Test cases
 const order1 : orderType = {
    name : 'Coca-Cola',
    vendor : 'Coca-Cola Company',
    quantity : 5,
    inStock : 1000,
    price : 5000
 }
 console.log(productOrder(order1)); // { name: 'Coca-Cola', buyAble: true, totalPrice: 25000 }

 const order2 : orderType = {
    name : 'Sari Roti',
    vendor : 'Toko Kue Sebelah',
    quantity : 2,
    inStock : 0,
    price : 10000
 }
 console.log(productOrder(order2)); // { name: 'Sari Roti', buyAble: false }

 
  