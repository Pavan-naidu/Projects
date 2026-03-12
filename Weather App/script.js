
// DOM Elements 
const input = document.querySelector("#search_input");
const searchBtn = document.querySelector("#btn");
const weatherImg = document.querySelector("#weather_img")
const temp = document.querySelector(".temp")
const place = document.querySelector(".city")
const humidity = document.querySelector(".humidity")
const windSpeed = document.querySelector(".wind")

// api key 
const apiKey = "35490ef1463aa10150834abc3693b36c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
// check weather function 
// async function is used because fetching data from api server will take time, so java script will wait for the response 

async function checkWeather (city) {
    const response = await fetch(`${apiUrl}q=${city}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    if(response.status === 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
        return;
    }
    
    document.querySelector(".error").style.display = "none";
    
    // UI updating
    place.innerHTML = data.name;
    temp.innerHTML = data.main.temp + '°c';
    humidity.innerHTML = data.main.humidity + ' %';
    windSpeed.innerHTML = data.wind.speed + ' km/hr';

    if(data.weather[0].main == "Rain"){
        weatherImg.src = "Images/rain.png"
    }else if(data.weather[0].main == "Clear"){
        weatherImg.src = "Images/clear.png"
    }else if(data.weather[0].main == "Clouds"){
        weatherImg.src = "Images/clouds.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherImg.src = "Images/drizzle.png"
    }else if(data.weather[0].main == "Humidity"){
        weatherImg.src = "Images/humidity.png"
    }else if(data.weather[0].main == "Mist"){
        weatherImg.src = "Images/mist.png"
    }else if(data.weather[0].main == "Snow"){
        weatherImg.src = "Images/snow.png"
    }else if(data.weather[0].main == "Wind"){
        weatherImg.src = "Images/wind.png"
    }
    document.querySelector('.weather').style.display = "block"
}

// event listener for button 
searchBtn.addEventListener("click", () => {
    checkWeather(input.value);
});

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      checkWeather(input.value);
    }
})
