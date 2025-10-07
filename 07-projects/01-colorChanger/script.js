// const buttons = document.querySelectorAll('.button');
// const body = document.body;

// 1st way
// buttons.forEach(btn =>{
//     btn.addEventListener('mouseover', ()=>{
//         body.style.backgroundColor = btn.id;
//     } );
// })

//2nd way
// function changeColor (color){
//     body.style.backgroundColor = color;
// }

// 3rd way 
// buttons.forEach(button => {
//   button.addEventListener('mouseover', e => {
//     body.style.backgroundColor = e.target.id;
//   });
// });





// 4th way by chai or code 

// console.log("Bobby")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
//   console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    console.log(e.target);
                                // body.style.backgroundColor = e.target.id;
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


