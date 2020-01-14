const COORDS = "coords";
const KEY = "09d01a94e6942ca2d48a2648fc1349b0";
const weatherContainer = document.querySelector(".js-weather");
function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${KEY}&units=metric`)
    .then(function(response){
        return response.json();
    }).then(function(json){
        const temp=json.main.temp;
        const place=json.name;
        weatherContainer.innerText=`${temp} @ ${place}`;

    });
}

function handleGeoSuccess(position){
    console.log(position); 
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj={
        latitude: latitude,
        longitude: longitude
    } ;
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
     console.log("FAILLUR")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
} 

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function loadCoords(){
    const loadedCoords=localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    }else{
        //getweather
        const parsedCoords = JSON.parse(loadedCoords);
        console.log(parsedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();