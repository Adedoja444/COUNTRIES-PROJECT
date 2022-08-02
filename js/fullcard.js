let layout = document.querySelector('.walker')
let url = 'https://restcountries.com/v3.1/all'

let couple = localStorage.getItem('alone')
console.log(couple)

let countryName = document.querySelector('.name')

function singleCountry(name) {
    let simpleman = url + '/' + name
    fetch(simpleman)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        countryName.innerHTML = data.name
    })
}
