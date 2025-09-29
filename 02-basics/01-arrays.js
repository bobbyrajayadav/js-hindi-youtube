// arrays
// array creates shallow copy -> A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source    
// means jo bhi hum copy array me change karege bo original array me bhi change hoga


const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", " Hanuman"]

const myArr2 =  new Array(1, 2, 3, 4)

// console.log(myArr[0]);

// Array Methods

// myArr.push(6)
// console.log(myArr);
// 
// myArr.pop() //remove element fromt last
// console.log(myArr);


// myArr.unshift(9) //adds 9 in the start
// console.log(myArr);

// myArr.shift() //remove 9 in the start
// console.log(myArr);

// console.log(myArr.includes(9));  //false 

// const newArr =  myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// *************slice , splice ********************

console.log("A", myArr);

const myn1 = myArr.slice(1, 3) //it prints 1,2 it does not includes range that is last no-3
console.log(myn1);
console.log("B", myArr);         

// splice manipulate original array 
const myn2 = myArr.splice(1, 3) // ye print to 1idx se 3idx tk elements to print to kar dega buttt original array me se 1 se lekar 3 elements tak ke elements remove kar deta he 
console.log("C", myArr);
console.log(myn2);







