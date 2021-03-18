
import { displayAttractions, displayAttractionCards, addAttractionItinerary } from './attractions/AttractionList.js';
import { getWeatherForecast } from "./weather/WeatherProvider.js";
import { displayEateries, displayEateryCards, addEateryItinerary } from "./eateries/eateryList.js";
import { makeParkCard, makeParkList, addParkItinerary } from "./parks/ParkList.js"
import { getParks } from "./parks/ParkProvider.js"
import { showWeather } from "./weather/WeatherList.js";



//!!!!   define latitude and longitude to get forecast to render
let latitude = 36.1659;
let longitude = -86.7844;

const saveButton = () => {
    document.querySelector("#saveButton").disabled=true
}

//   ***  Function to start app processes  ***   //

const startWheelsOnTheGround = () => {
    //populating makeParkList with API data from getParks function here. 
    getParks().then((parkResp) => {
        makeParkList(parkResp);
    });
	displayAttractions();
	displayEateries();
    saveButton();
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

//event listener to select a park from the drop down and display a single corresponding park card
const parkEvent = document.querySelector(".parkDropdown");
let currentlySelectedPark = "";
parkEvent.addEventListener("change", (event) => {
    currentlySelectedPark = event.target.value
    makeParkCard(event.target.value)
})

//event listener which puts selected park into the aside when you press the button
const parkEventButton = document.querySelector(".addParkButton")
    parkEventButton.addEventListener("click", (event) => {
        // console.log(event.target "parkbutton")
        addParkItinerary(currentlySelectedPark)
    })



//! Event Listeners for Bizarre Section
const bizarreEvent = document.querySelector("#bizarreDropdown");

let currentlySelected = "";
bizarreEvent.addEventListener("change", (event) => {
    currentlySelected = event.target.value
    console.log(currentlySelected)
        displayAttractionCards(event.target.value);
    }
    )
    
const bizarreEventButton = document.querySelector(".addBizarreButton")
    
    bizarreEventButton.addEventListener("click", (event) => {
        console.log(event.target, "test3")
        addAttractionItinerary(currentlySelected)
})


const eateryEvent = document.querySelector("#eateryDropdown");

let currentlySelectedEatery = "";
eateryEvent.addEventListener("change", (event) => {
    currentlySelectedEatery = event.target.value
    console.log(currentlySelectedEatery)
         displayEateryCards(event.target.value);
    }
    )
    
const eateryEventButton = document.querySelector(".eateryButton")
    
        eateryEventButton.addEventListener("click", (event) => {
        console.log(event.target, ".eateryButton")
        addEateryItinerary(currentlySelectedEatery)
})