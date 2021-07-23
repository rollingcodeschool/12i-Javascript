const apiKey = "6beb402af2e9cc6eb0027c3c483420d9";
const searchInput = document.querySelector('input[name="search"]');
let URL;
let wLoading = document.querySelector('.weather-loading');
//Obtener ubicación desde mi navegador
//Recordar dar permisos
async function getGeoLoc() {
    let navigatorLocation = await new Promise((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(geoLoc => { 
            resolve({
                lat: geoLoc.coords.latitude,
                lng: geoLoc.coords.longitude
            });
        });
    });
    console.log(navigatorLocation);
    URL = `https://api.openweathermap.org/data/2.5/weather?lat=${navigatorLocation.lat}&lon=${navigatorLocation.lng}&appid=${apiKey}&units=metric`;
    search(URL);
}
//Ejecuto la función getGeoLoc para obtener ubicación
getGeoLoc();

// Función general para realizar la búsqueda
function search(url){ 
    wLoading.style.visibility = 'visible';
    fetch(url, {})
    .then(response => response.json())
    .then(data => {
        //Esconder el contenedor de loading
        
        wLoading.style.visibility = 'hidden';
        //Colocar temperatura
        let wTemp = document.querySelector('.weather-temp');
        wTemp.innerHTML = Math.round(data.main.temp) +'<span class="text-small"> &deg;C</span>';

        wImg = document.getElementById('weatherImg');
        wIcon = data.weather[0].icon;
        wImgUrl = `http://openweathermap.org/img/w/${wIcon}.png`;

        wImg.setAttribute("src", wImgUrl);

        console.log(data);
    });
}


// Buscar por input ingresado una vez apretado enter
searchInput.addEventListener('keyup', (ev) => {
    let location = ev.target.value;
    if(location.length > 3 && ev.keyCode == 13) {
        URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
        search(URL);
    }
});

