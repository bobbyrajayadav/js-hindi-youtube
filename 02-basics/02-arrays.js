const marvel_heros = ["thor", "Ironmam", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // it adds dc_heros as another index of element

// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros)  //concat actually merge both arrays 
// console.log(all_heros);

//****sperad operator */
// const all_new_heros = [...marvel_heros, ...dc_heros] //all elements of both arrays spred individually and then we are storing thse into all_new_heros array 

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// used  while data scraping sometimes 

console.log(Array.isArray("Bobby"));
console.log(Array.from("Bobby")); // convert Bobby into array
console.log(Array.from({name: "Bobby"})); //interesting --return empty array iska matlab jab tak hum isko batayge nahi ki kiska array banana he key ka ya value ka jab tak ye empty array return karega []

