const form = document.querySelector('form')
// this usecase will give you empty
//  const height = (document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = (document.querySelector('#height').value)
    const weight = (document.querySelector('#weight').value)
    const results = document.querySelector('#results');

if (height == '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid ${height}`;
    } else if (height == '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid ${height}`;
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }
})