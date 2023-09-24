/*
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 */


// function isPrime(n) {
//     // Your logic here
//     if ( n == 2 ||  n == 3 || n == 5 || n == 7){
//         return "Prima"
//     } else {
//         if(n < 1 || n - Math.floor(n) != 0  || n == 1 ||  n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0 ){
//             return "Bukan Bilangan Prima"
//         }else{
//             return "Prima"
//         }
//     }
//   }

function isPrime (n){
    if(n<2 || n - Math.floor(n) != 0){
        return "not prime"
    }
    for(i =2 ; i < n ; i++){
        if(n % i === 0){
            return "not prime"
        }
    }
    return "prime"
}

// Bukan bilangan Prima
//   console.log(isPrime(-2));
//   console.log(isPrime(25));
//   console.log(isPrime(49));
//   console.log(isPrime(99));
//   console.log(isPrime(105));
//   console.log(isPrime(105.5));

// // Bilangan Prima
  console.log(isPrime(2));
  console.log(isPrime(3));
  console.log(isPrime(5));
  console.log(isPrime(7));
  console.log(isPrime(17));
  console.log(isPrime(11));



  