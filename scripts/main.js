import { displayAttractions } from './attractions/AttractionList.js';
import { getWeatherForecast } from "./weather/WeatherProvider.js";
import { displayEateries } from "./eateries/eateryList.js";
import { makeEateryList } from "./eateries/EateryProvider.js"
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

const eateryElement = document.querySelector("Eatery");

eateryElement.addEventListener.find("click", (event) => {
	if (event.target.id === "eateryDetail") {
		filterEatery("Eateries")
	} else if (event.target.id === "showAll") {
		makeEateryList(useEateries())
	}
})

const filterEatery = (whatFilter) => {
	const filterArray = useEateries().filter(singleEatery => {
		if (singleEatery.businessName.includes(whatFilter)) {
			return singleEatery;
		}
	})
	makeEateryList(filterArray);
}

const showdropDownNav = () => {
	const dropDownElement = document.querySelector('.eateryDropdown');
	dropDownElement.innerHTML = dropDownNav();
}


const startEIA = () => {
	showdropDownNav();
	loadEateries()
		.then(eateryArray => {
			makeEateryList(eateryArray)
		})
}

startEIA();