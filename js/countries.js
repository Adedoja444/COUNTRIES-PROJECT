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
            <div class="col-lg-3 col-md-6" row="button" onclick="oneCountry()">
            <div class="card mt-5 shadow cart ">
            <div class="hait">
            <img src=${country.flags.svg} class="card-img-top" alt="Country flag is supposed to be here">
            </div>
            <div class="card-body">
            <h3 class="card-text safe"> ${country.name}</h3>
            <ul>
            <li class="card-text"><span class="safe">Population:</span> ${country.population}</li>
            <li class="card-text">Region: ${country.region}</li>
            <li class="card-text">Capital: ${country.capital}</li>
            </ul>
            </div>
            </div>
            </div>
            `
            })
            layout.innerHTML = html;
        })
}
getCountries()

function oneCountry(name) {
    console.log(name)
    localStorage.setItem('alone', name);
    window.location.href = "fullcard.html"
}