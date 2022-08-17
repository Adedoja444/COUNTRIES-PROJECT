let layout = document.querySelector('.walker');
let url = "https://restcountries.com/v2/name";

let icon = document.getElementById("sun");
icon.onclick = function() {
    document.body.classList.toggle('dark-theme')
    if( document.body.classList.contains('dark-theme')) {
        icon.src = 'img/brightness-high.svg'
    } else {
        icon.src = 'img/moon-fill.svg'
    }
}

let couple = localStorage.getItem('alone')
console.log(couple)

let countryName = document.querySelector('#country-name')
let nativeName = document.querySelector('#native-name')
let countryPopulation = document.querySelector('#population')
let countryRegion = document.querySelector('#region')
let subRegion = document.querySelector('#s-region')
let countryCapital = document.querySelector('#capital')
let topLevelDomain = document.querySelector('#tld')
let currencies = document.querySelector('#money')
let countryFlag = document.querySelector('#country-flag')
let languages = document.querySelector('#languages')
let backBtn = document.querySelector('#back-btn')


function singleCountry(name) {
    let simpleMan = url + '/' + name;
    fetch(simpleMan)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
    if (data) {
        countryFlag.src = data[0].flags.png
        countryName.innerHTML = data[0].name;
        countryPopulation.innerHTML = data[0].population;
        subRegion.innerHTML = data[0].subregion;
        countryRegion.innerHTML = data[0].region;
        countryCapital.innerHTML = data[0].capital;
        currencies.innerHTML = data[0].currencies[0].name;
        languages.innerHTML = data[0].languages[0].name;
        topLevelDomain.innerHTML = data[0].topLevelDomain;
        nativeName.innerHTML = data[0].nativeName;
    }
    })
}
singleCountry(couple)

