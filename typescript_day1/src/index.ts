let sentence: string = 'Learning Typescript is different than Javascript'
let firstNumber : number = 9
let secNumber : number = 19

const NewStrings = (argumentX:string, argumentY:number, argumentZ:number):string => {
    let newStrings : string = argumentX.slice(argumentY,argumentZ)
    return newStrings
}

const result = NewStrings(sentence,firstNumber,secNumber)
console.log(result)


export default NewStrings