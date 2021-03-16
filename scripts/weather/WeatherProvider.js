

//   ***  Import API key from Settings.js  ***   //
import { settings } from "../Settings.js";

//   ***  Create array to hold a copy of weather data  ***   //
let weatherData = [];
//   ***  Function to return a copy of weather data array   ***  //
export const useWeatherData = () => {
    return [...weatherData]
}

//   ***  Function to Fetch 7 day forecast from OpenWeather onecall API  
//        ***  passing in latitude and longitude as parameters
export const getWeatherForecast = (latitude, longitude) => {
  return fetch(`
    https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely,hourly&appid=${
    settings.weatherKey
  }
    `).then((response) => response.json())
    .then(data => {
        weatherData = data;
        console.log(weatherData.daily)
        console.log(data.daily)
        const DomTarget = document.querySelector("#weather");
        for(let i=0; i< data.daily.length; i++) {
        // console.log(data.daily[0].dt) 
        const timestamp = data.daily[i].dt;
        const date = new Date(timestamp * 1000);
        // console.log(
        //   date.toLocaleString("en-US", { weekday: "short" }) +
        //     " " +
        //     (date.getMonth() + 1) +
        //     "/" +
        //     date.getDate() +
        //     "/" +
        //     date.getFullYear() +
        //     " HI: " +
        //     data.daily[i].temp.max +
        //     " LO: " +
        //     data.daily[i].temp.min +
        //     " " +
        //     data.daily[i].weather[0].description
        // );
        const dailyForecast = `
        <div>${date.toLocaleString("en-US", { weekday: "short" })}    
            ${
              date.getMonth() + 1
            }/${date.getDate()}/${date.getFullYear()}       
            ${data.daily[i].temp.max.toFixed(0)}&#8457;-${data.daily[i].temp.min.toFixed(0)}&#8457;    
            ${data.daily[i].weather[0].description}
            <img src="http://openweathermap.org/img/wn/${
              data.daily[i].weather[0].icon
            }.png"></div>
        `;
        DomTarget.innerHTML += dailyForecast;
     }
     })
};