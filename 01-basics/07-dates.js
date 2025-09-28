// dates 

// let myDate = new Date()
// const currentDate = new Date();
// console.log(currentDate.toString());



// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getDay());


// console.log(myDate.toJSON());
// console.log("iso ", myDate.toISOString());







// const d = new Date();

// const year = d.getFullYear(); // Gets the four-digit year (e.g., 2025)
// const month = d.getMonth(); // Gets the month (0-11, where 0 is January)
// const day = d.getDate(); // Gets the day of the month (1-31)
// const hours = d.getHours(); // Gets the hour (0-23)
// const minutes = d.getMinutes(); // Gets the minute (0-59)
// const seconds = d.getSeconds(); // Gets the second (0-59)

// console.log(`Current year: ${year}`);
// console.log(`Current month (0-indexed): ${month}`);
// console.log(`Current day: ${day}`);
// console.log(`Current time: ${hours}:${minutes}:${seconds}`);


// let myCreatedDate = new Date("2025-10-2")
// let myCreatedDate = new Date("10-05-2025")
// console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(Date.now()

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay().toString())

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    hour:"2-digit"
}));

