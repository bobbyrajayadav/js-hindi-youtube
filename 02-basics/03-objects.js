// objects
// objects ko declare karne ke 2 types he .1) literals  .2)as a constructor
// singleton -> jb bhi constructor se object banate he toh bo singleton hota he if dusri type se obj banay to bo singleton nahi hota he 

// object literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "Bobby",
    "full name": "Bobby Raja Yadav",   // ye full name . se access nahi ho skta 
    [mySym]: "mykey1", //correct way of using symbol in obj 
    age: 20,
    location: "Lalitpur",
    email: "bobby@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

//accesing of object 
// console.log(JsUser.email); // ye achha ya sahi tarika nahi he ek por tarika he acces karne ka 
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

JsUser.email = "bobby@chatgpt.com"
// Object.freeze(JsUser) // ab obj freeze ho jayga koi bhi change nahi kar skta freeze ke baad 
JsUser.email = "bobby@microsoft.com"
// console.log(JsUser);


JsUser.greetings = function(){
    console.log("hello js users");
}

JsUser.greetingsTwo = function(){
    console.log(`hello js users, ${this.name}`);
}

// console.log(JsUser.greetings); //gives function reference
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());

