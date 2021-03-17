
import { displayAttractions, displayAttractionCards, addAttractionItinerary } from './attractions/AttractionList.js';
import { getWeatherForecast } from "./weather/WeatherProvider.js";
import { displayEateries } from "./eateries/eateryList.js";
import { makeParkList } from "./parks/ParkList.js"
import { showWeather } from "./weather/WeatherList.js";
import { useBizarre } from './attractions/AttractionProvider.js';



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





//! Event Listeners for Bizarre Section
const bizarreEvent = document.querySelector("#bizarreDropdown");

bizarreEvent.addEventListener("change", (event) => {
    console.log(typeof event.target.value)
        displayAttractionCards(event.target.value);
    }
)

const bizarreEventButton = document.querySelector(".addBizarreButton")

bizarreEventButton.addEventListener("onclick", (event) => {
    addAttractionItinerary(event.target.value)
})


