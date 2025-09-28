//  primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, bigInt
 
// Reference (non primitive)

// Array, Object, Functions
// const heros = ["saktiman", "hanuman", "superman"]

// let myObj = {
//     name : "Bobby",
//     age: 21,
// }

// const myFunction = function(){
//     console.log("hell its function");
// }
// myFunction() // calling of function 





// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId); //false

// const bigNumber = 54121444442144121n //bigInt 

// console.log(typeof bigNumber);




// +++++++++++++memories+++++++++++++

// stack(Primitive), => it gives a copy of a variable & when ypou change the cpoied variable it doesn't affect original value 
// Heap(Non-primitive) =>  it gives us a refence value of original value, So when we change something in reference value it will also refelect in original value 

// stack 
// let myYoutubeName = "BobbyRajayadav"
// let anotherName = myYoutubeName

// anotherName = "xyz"
// console.log(myYoutubeName); //BobbyRajayadav
// console.log(anotherName); //xyz

// heap
// let userOne = {
//     email: "abc@google.com",
//     upiId: "xyz@ybl"
// }

// let userTwo = userOne;
// console.log(userTwo);


// userTwo.email = "bobby@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email);




