import { getWeatherForecast } from "./WeatherProvider.js";




//!!!!   define latitude and longitude to get forecast to render
let latitude = 36.1659;
let longitude = -86.7844;




//   ***  Function to start app processes  ***   //

const startWheelsOnTheGround = () => {
    //!!!!   call weather forecast funtion, passing latitude and longitude as arguments
    //!!!!        Note  arguments will be derived from selected park's coordinates 
    getWeatherForecast(latitude, longitude);

}



startWheelsOnTheGround();