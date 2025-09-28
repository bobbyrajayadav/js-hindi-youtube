//  primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, bigInt
 
// Reference (non primitive)

// Array, Object, Functions
const heros = ["saktiman", "hanuman", "superman"]

let myObj = {
    name : "Bobby",
    age: 21,
}

const myFunction = function(){
    console.log("hell its function");
}
myFunction() // calling of function 





const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 54121444442144121n //bigInt 

console.log(typeof bigNumber);


