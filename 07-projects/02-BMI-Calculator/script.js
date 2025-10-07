const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
let bmi;
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2); //.tofixed is used for decimal values here .toFixed(2) return 2 digits after decimal 
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }

    const weightGuide = document.querySelector('#weight-guide');

    if (bmi < 18.6) {
        weightGuide.innerHTML = `<span> Under Weight ${bmi}  </span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
        weightGuide.innerHTML = `<span> Normal Range ${bmi} </span>`;
    } else if (bmi >= 24.9) {
        weightGuide.innerHTML = `<span> Over Weight ${bmi} </span>`;
    }

});