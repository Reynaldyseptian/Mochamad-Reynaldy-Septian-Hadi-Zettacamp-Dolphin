"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sentence = 'Learning Typescript is different than Javascript';
let firstNumber = 9;
let secNumber = 19;
const NewStrings = (argumentX, argumentY, argumentZ) => {
    // let check: boolean = false
    // let sentenceCheck : string = "Typescript"
    // console.log(typeof argumentY)
    // console.log(typeof argumentZ)
    // if(argumentX.includes(sentenceCheck) && typeof argumentY === 'number' && typeof argumentZ === 'number'){
    //     check = true
    // }
    // if(!check){
    //     return "not Match"
    // }else{
    //     return "Typescript"
    // }
    let newStrings = argumentX.slice(argumentY, argumentZ);
    return newStrings;
};
const result = NewStrings(sentence, firstNumber, secNumber);
console.log(result);
exports.default = NewStrings;
