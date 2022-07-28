let layout = document.querySelector('.cardss');
let url = 'https://restcountries.com/v2/all?fields=name,flags,population,region,capital'


let countries = []

function getCountries() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            countries = data

            let html = ''
            countries.forEach(country => {
                // console.log(country.flags)
                html += `
            <div class="card mt-5 shadow cart col-lg-3 col-md-6">
            <img src=${country.flags.svg} class="card-img-top" alt="Country flag is supposed to be here">
            <div class="card-body">
            <h3 class="card-text"> ${country.name}</h3>
            <p class="card-text">Population: ${country.population}</p>
            <p class="card-text">Region: ${country.region}</p>
            <p class="card-text">Capital: ${country.capital}</p>
            </div>
            </div>
            `
            })
            layout.innerHTML = html;
        })
}
getCountries()