let layout = document.querySelector('.cardss');
let url = 'https://restcountries.com/v2/all'
let searchBtn = document.querySelector('.s-country')
console.log(searchBtn)


let icon = document.getElementById("icon");
let mode = document.getElementById("mode");
let modeText = document.getElementById("mode-text");
mode.onclick = function () {
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.add('bi-moon-fill')
        icon.classList.remove('bi-brightness-high-fill')
        modeText.innerHTML = 'Dark Mode'
        
    } else {
        icon.classList.add('bi-brightness-high-fill')
        icon.classList.remove('bi-moon-fill')
        modeText.innerHTML = 'Light Mode'
        
    }
}





searchBtn.addEventListener('input', () => {
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

// let dropdown = document.getElementById('dropdown');
// dropdown.onclick = function () {
//     let filteredArrray = countries.filter(country => country.region === 'Africa')
//         getCountries();
//     console.log(filteredArrray)
//     let html = ''
//    filteredArrray.forEach(country => {
//     if (country) {
//         html += `
//     <div class="col-lg-3 col-md-6" >
//          <div class="card mt-5 shadow cart" role="button" onclick="callCountry('${country.name}')">
//     <div class="hait">
//         <img src=${country.flags.svg} class="card-img-top img-fluid" alt="Country flag is supposed to be here">
//     </div>
//     <div class="card-body">
//         <h3 class="card-text safe fw-bold"> ${country.name}</h3>
//     <ul>
//        <li><span class="safe fw-bold">Population:</span> ${country.population}</li>
//         <li class="card-text"><strong>Region:</strong> ${country.region}</li>
//         <li class="card-text"><span class="safe fw-bold">Capital:</span> ${country.capital}</li>
//     </ul>
//  </div>
// </div>
// </div>
//     `
//     }
//     layout.innerHTML = html;
// })
// }
let regionSelection = document.querySelector('#region')
let regions = ['Filter by region', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
let regionHtml = ''
regions.forEach((region) => {
    regionHtml += `
    <option value="${region}" id="selection">${region}</option>
    `
})
regionSelection.innerHTML = regionHtml
regionSelection.addEventListener('change', showRegion)

function showRegion() {
   
    let region =  regionSelection.value
    fetch(`https://restcountries.com/v2/region/${region}`)
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

// let dropdown = document.getElementById('selection');
// dropdown.addEventListener('onclick', () => {
   
// })
