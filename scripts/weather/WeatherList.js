//   ***  Function takes forecast array and iterates through it    
//        ***  extracting timestamp and forcast data   
//        ***  and inserting into DOM at #weather
export const showWeather = (forecast) => {

//   ***  DOM Target declared  ***   //
  const DomTarget = document.querySelector("#weather");
  for (let i = 0; i < forecast.daily.length; i++) {
    
    //   ***  UNIX timestamp for each day declared for manipulation
    const timestamp = forecast.daily[i].dt;

    //   ***  date declared as new Javascript DATE object (adding milliseconds)
    const date = new Date(timestamp * 1000);

    //   ***   Daily Forecast HTML Template  ***   //
    const dailyForecast = `
        <div>${date.toLocaleString("en-US", { weekday: "short" })}    
        ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}       
        ${forecast.daily[i].temp.max.toFixed(0)}&#8457;-${forecast.daily[
      i
    ].temp.min.toFixed(0)}&#8457;    
        ${forecast.daily[i].weather[0].description}
        <img class="icon" src="http://openweathermap.org/img/wn/${
          forecast.daily[i].weather[0].icon
        }.png"></div>
        `;
        //   ***  Append Daily Forecast to DOM at DOM Target  ***   //
    DomTarget.innerHTML += dailyForecast;
  }
};
