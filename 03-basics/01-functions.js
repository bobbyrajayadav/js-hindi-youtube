function sayMyName() {
    console.log("B");
    console.log("O");
    console.log("B");
    console.log("B");
    console.log("Y");
}

// sayMyName() //execute
// sayMyName //this will not execute as it is only reference of function

// function addTwoNumbers(n1, n2){ //parameters 
//     console.log(n1 + n2);
// }

function addTwoNumbers(n1, n2){ //parameters 
    const result = n1 + n2
    console.log("Bobby "); // ye console hoga because return se pehle he
    return result // return ke baad kuch or code nahi vhalega
    console.log("Yadav "); //ye nahi chalega because return ke baad he 
    
}

//  const result = addTwoNumbers(3, 5) // calling time Arguments 

//  console.log("Result :", result); //ye undefined aayga 



function loginUserMessage(username = "DefaultName"){  // if user koi value pass nahi karta he toh default name print hoga otherwise if he pass any value value overwrites default 
    if(!username){ // !username  equals he username === undefined
        console.log("please Enter a User Name ")
        return 
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage()) //if me isme koi value pass nahi karuga toh undefined aayga 
 
// **********multiple values in parameter  
function calculateCartPrice(...num1){ // we call ... spread or rest operator depends on usecases,  here we call it rest operator 
    return num1
} 

// console.log(calculateCartPrice(200, 300, 400));


// passing objects and arrays in the function 
const user = {
    username: "Bobby",
    price: 199
}

function handleObjects (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObjects(user)

const myNewArray = [200, 300, 400]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([1000, 2000, 3000, 4000, 5000])) // we can directly pass array create array variable or not