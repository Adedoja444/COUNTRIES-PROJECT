let layout = document.querySelector('.cardss');
let url = 'https://restcountries.com/v2/all'
let searchBtn = document.querySelector('.s-country')
console.log(searchBtn)


let icon = document.getElementById("icon");
icon.onclick = function() {
    document.body.classList.toggle('dark-theme')
    if( document.body.classList.contains('dark-theme')) {
        icon.src = 'img/brightness-high.svg'
    } else {
        icon.src = 'img/moon-fill.svg'
    }
}


    searchBtn.addEventListener ('input', () => {
        fetch(`https://restcountries.com/v2/name/${searchBtn.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            countries = data

            let html = ''
            countries.forEach(country => {
                if (country) {
                    html += `
                <div class="col-lg-3 col-md-6" >
                     <div class="card mt-5 shadow cart" role="button" onclick="callCountry('${country.name}')">
                <div class="hait">
                    <img src=${country.flags.svg} class="card-img-top img-fluid" alt="Country flag is supposed to be here">
                </div>
                <div class="card-body">
                    <h3 class="card-text safe fw-bold"> ${country.name}</h3>
                <ul>
                   <li><span class="safe fw-bold">Population:</span> ${country.population}</li>
                    <li class="card-text"><strong>Region:</strong> ${country.region}</li>
                    <li class="card-text"><span class="safe fw-bold">Capital:</span> ${country.capital}</li>
                </ul>
             </div>
            </div>
          </div>
                `
                }
            })
            layout.innerHTML = html;
        })
    })


let countries = []

function getCountries() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            countries = data

            let html = ''
            countries.forEach(country => {
                if (country) {
                    html += `
                <div class="col-lg-3 col-md-6" >
                     <div class="card mt-5 shadow cart" role="button" onclick="callCountry('${country.name}')">
                <div class="hait">
                    <img src=${country.flags.svg} class="card-img-top img-fluid" alt="Country flag is supposed to be here">
                </div>
                <div class="card-body">
                    <h3 class="card-text safe fw-bold"> ${country.name}</h3>
                <ul>
                   <li><span class="safe fw-bold">Population:</span> ${country.population}</li>
                    <li class="card-text"><strong>Region:</strong> ${country.region}</li>
                    <li class="card-text"><span class="safe fw-bold">Capital:</span> ${country.capital}</li>
                </ul>
             </div>
            </div>
          </div>
                `
                }
            })
            layout.innerHTML = html;
        })
}
getCountries()

function callCountry(countryName) {
    console.log('hey')
    console.log(countryName)
    localStorage.setItem('alone', countryName);
    window.location.href = "fullcard.html"
}