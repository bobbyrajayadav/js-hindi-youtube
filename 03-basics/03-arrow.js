const user = {
    username: "Bobby",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Bobby"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Bobby"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Bobby"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // bracket() ke andar hame return ka use nahi karna padta he 

const addTwo = (num1, num2) => ({username: "Bobby"}) // returning object under bracket (), bracket ke bina object return nahi hoga 


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()