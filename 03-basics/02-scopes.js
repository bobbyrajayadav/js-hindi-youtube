


if(true) {    // {} ye scopes hote he 
    let a = 10
    const b = 20 
    var c = 30 
}

// console.log(a); //this will not print 
// console.log(b); //this will not print  
// console.log(c); // this will print 




//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Bobby"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Bobby"
    if (username === "Bobby") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // this function will execute as functions can called before 

function addone(num){
    return num + 1
}



addTwo(5)  // function expression can't be called before // isko hoisting bhi kehte he ki kisko kaha use karna he 
const addTwo = function(num){  // ye function expression he when we put a function into a variable called function expression 
    return num + 2
}
