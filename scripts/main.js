<<<<<<< HEAD

import { displayAttractions, displayAttractionCards } from './attractions/AttractionList.js';
=======
import { displayAttractions } from './attractions/AttractionList.js';
>>>>>>> main
import { getWeatherForecast } from "./weather/WeatherProvider.js";
import { displayEateries } from "./eateries/eateryList.js";
import { makeParkList } from "./parks/ParkList.js"
import { showWeather } from "./weather/WeatherList.js";



//!!!!   define latitude and longitude to get forecast to render
let latitude = 36.1659;
let longitude = -86.7844;




//   ***  Function to start app processes  ***   //

const startWheelsOnTheGround = () => {
	displayAttractions();
	displayEateries();
    makeParkList();
    //!!!!   call weather forecast funtion, passing latitude and longitude as arguments
    //!!!!        Note  arguments will be derived from selected park's coordinates 
    //!!!!              will have to be called after park data with then method
    //   ***  Call getWeatherForecast with coordinates as arguments
    getWeatherForecast(latitude, longitude)
    //   ***  Then parse data (array)  ***   //
    .then((data) => {
        //   ***  Call showWeather with parsed data
      showWeather(data);
    });

}


startWheelsOnTheGround();


<<<<<<< HEAD
const mainEvent = document.querySelector(".main");

mainEvent.addEventListener("change", (event) => {
    if (event.target.id === "bizarreDropdown") {
        displayAttractionCards();
    }
})


// applicationElement.addEventListener("change", event => {
//     if (event.target.id === "yearSelection") {
//       const yearAsNumber = parseInt(event.target.value)
  
//       console.log(`User wants to see posts since ${yearAsNumber}`)
//       //invoke a filter function passing the year as an argument
//       showFilteredPosts(yearAsNumber);
//     }
//   })
=======
>>>>>>> main
