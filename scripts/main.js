
import { displayAttractions, displayAttractionCards, addAttractionItinerary } from './attractions/AttractionList.js';
import { getWeatherForecast } from "./weather/WeatherProvider.js";
import { displayEateries, displayEateryCards } from "./eateries/eateryList.js";
import { makeParkCard, makeParkList } from "./parks/ParkList.js"
import { getParks } from "./parks/ParkProvider.js"
import { showWeather } from "./weather/WeatherList.js";
import { useBizarre } from './attractions/AttractionProvider.js';
import { bizarreObject } from './attractions/AttractionList.js'



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




//! Event Listeners for Bizarre Section
const bizarreEvent = document.querySelector("#bizarreDropdown");

let currentlySelected = "";
bizarreEvent.addEventListener("change", (event) => {
    currentlySelected = event.target.value
    console.log(currentlySelected, "currentlySelected")
        displayAttractionCards(event.target.value);
    }
    )
    
const bizarreEventButton = document.querySelector(".addBizarreButton")
    
    bizarreEventButton.addEventListener("click", (event) => {
        console.log(event.target, "test3")
        addAttractionItinerary(currentlySelected)
})


// singleEatery (event.target.value);
// const singleEatery = (id){
//     let foundEatery = useEateries().find(eatery => eatery.id === id);
//     //use foundBizarre to be the object that is passed into Attraction card HTML representation
//     //could be a refactored function based off of display attractions 
//     //
//     //const target = document.querySelector(the target id or class);
//     let eateryHTML = SingleEateryCard(foundEatery)
//     target.innerHTML += eateryHTML
// };

const eateryElement = document.querySelector(".main");

eateryElement.addEventListener("change", (event) => {
    console.log(event.target.value)
	if (event.target.id === "eateryDropdown") {
        displayEateryCards(event.target.value);
	}
})


// const filterEatery = (whatFilter) => {
// 	const filterArray = useEateries().filter(singleEatery => {
// 		if (singleEatery.businessName.includes(whatFilter)) {
// 			return singleEatery;
// 		}
// 	})
// 	makeEateryList(filterArray);
// }

// const showdropDownNav = () => {
// 	const dropDownElement = document.querySelector('.eateryDropdown');
// 	dropDownElement.innerHTML = dropDownNav();
// }


// const startEIA = () => {
// 	showdropDownNav();
// 	loadEateries()
// 		.then(eateryArray => {
// 			makeEateryList(eateryArray)
// 		})
// }

// startEIA();
