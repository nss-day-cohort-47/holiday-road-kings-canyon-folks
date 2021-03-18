
import { displayAttractions, displayAttractionCards } from './attractions/AttractionList.js';
import { getWeatherForecast } from "./weather/WeatherProvider.js";
import { displayEateries, displayEateryCards } from "./eateries/eateryList.js";
import { makeParkList } from "./parks/ParkList.js"
import { showWeather } from "./weather/WeatherList.js";
import { useBizarre } from './attractions/AttractionProvider.js';
import { createItineraryPost } from './itineraries/ItineraryProvider.js';



//!!!!   define latitude and longitude to get forecast to render
let latitude = 36.1659;
let longitude = -86.7844;
//   ***  Function that checks if all three conditions are met   
//     ****   (itinerary preview filled)   
//     ****   sets save itinerary button to disabled or enabled
const saveButton = () => {
    // if(selectedPark === "" || selectedEatery === "" || selectedBizarre === "") {
    document.querySelector("#saveButton").disabled=true;
    // } else {
    //     document.querySelector("#saveButton").disabled=false;
    // }
}
//   ***  Function to save itinerary when save button is clicked
// mainEvent.addEventListener("click", event => {
//     if(event.target.id === "saveButton") {
//         const name = document.querySelector("input[name='nameBox']");
//         const park = 
//         const eatery = 
//         const bizarre =

//         const itineraryPostObject = {
//             name: ,
//             park: ,
//             eatery: ,
//             bizarre: ,
//         };

//         createItineraryPost(itineraryPostObject)
//         .then(response => {
//             console.log("JSON Response: ", response);

//         })
//     }
// })


//   ***  Function to start app processes  ***   //

const startWheelsOnTheGround = () => {
	displayAttractions();
	displayEateries();
    makeParkList();
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


const mainEvent = document.querySelector(".main");

mainEvent.addEventListener("change", (event) => {
    console.log(typeof event.target.value)
    if (event.target.id === "bizarreDropdown") {
        displayAttractionCards(event.target.value);
        // const selection = event.target.value
        // const singleCard = useBizarre().find(bizarre => {
        //   return  (bizarre.id === selection)
        // })
        // console.log(selection, "selection")
        // console.log(singleCard, "singleCard")
    }
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