const apiKey = "533817b672f07e103120c8fe777dee4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".input-box .City-Enter");
const searchBtn = document.querySelector(".input-box .Search-Button");

const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-specifics").style.display = "none";
        document.querySelector(".weather-icon").style.display = "none";
    }else{
        var data = await response.json();
    
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°f";
    document.querySelector(".temp-max").innerHTML = data.main.temp_max + "°f" ;
    document.querySelector(".temp-min").innerHTML = data.main.temp_min + "°f";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "icons/cloudy.png";
    }

    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "icons/sun.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "icons/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "icons/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "icons/weather-app.png";
    }

    document.querySelector(".weather-specifics").style.display = "block";
    document.querySelector(".weather-icon").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

