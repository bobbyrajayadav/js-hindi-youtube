// objects
// singleton

// const tinderUser = new Object()      //this singleton obj 
 const tinderUser = {}               // this non singleton obj

 tinderUser.id = "123abc"
 tinderUser.name = "sammy"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Bobby",
            lastname: "Yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) //target-{} source-obj1, obj2, obj4

const obj3 = {...obj1, ...obj2, ...obj4} //using spread operator 

// console.log(obj3);


//array of objects 
const users = [
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },
]

//iterate through this arrays of object 
// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
// console.log(tinderUser.hasOwnProperty('isLogged')); // false


//***********Object destructuring and json api ************* */

const  course = {
    cousrsename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// this is react concept of destructuring
// const navbar = ({company}) => {

// }
// navbar (company = "Bobby")

// ***********api jsons**********

// {
//     "name": "Bobby",
//     "coursename": "js in hindi",
//     "price": "free"
// }