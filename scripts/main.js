
import { displayAttractions, displayAttractionCards, addAttractionItinerary, displayMoreDetails } from './attractions/AttractionList.js';
import { getWeatherForecast } from "./weather/WeatherProvider.js";
import { displayEateries, displayEateryCards, addEateryItinerary, displayEateryDetails, eateryObject } from "./eateries/eateryList.js";
import { makeParkCard, makeParkList, addParkItinerary, displayParkDetails, parkObject } from "./parks/ParkList.js"
import { getParks } from "./parks/ParkProvider.js"
import { showWeather } from "./weather/WeatherList.js";
import { bizarreObject } from './attractions/AttractionList.js'
import { createItineraryPost } from './itineraries/ItineraryProvider.js';
import { AddItinery } from './itineraries/itineraryList.js';

//event listener to select a park from the drop down and display a single corresponding park card
const parkEvent = document.querySelector(".parkDropdown");
let currentlySelectedPark = "";
parkEvent.addEventListener("change", (event) => {
    currentlySelectedPark = event.target.value
    makeParkCard(event.target.value)
    parkButton.style.display = "block";
})

//event listener which puts selected park into the aside when you press the button
const parkEventButton = document.querySelector(".addParkButton")
    parkEventButton.addEventListener("click", (event) => {
        
        addParkItinerary(currentlySelectedPark)
        saveButton();
        latitudeLongitude();
    })

//park more details button and pop-up!
//! Pop Up Modal

const parkPopUp = document.getElementById("parkModal")
const parkButton = document.getElementById("moreParkDetails")
const parkSpan = document.getElementById("parkClose")

parkButton.onclick = () => {
    eateryPopUp.style.display = "block";
    displayParkDetails(currentlySelectedPark)
}

parkSpan.onclick = () => {
    parkPopUp.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == parkPopUp) {
        parkPopUp.style.display = "none";
    }
}



//! Event Listeners for Bizarre Section
const bizarreEvent = document.querySelector("#bizarreDropdown");

let currentlySelected = "";
bizarreEvent.addEventListener("change", (event) => {
    currentlySelected = event.target.value
    displayAttractionCards(event.target.value);
    bizarreButton.style.display = "block";
    }
    )
    
const bizarreEventButton = document.querySelector(".addBizarreButton")
    
    bizarreEventButton.addEventListener("click", (event) => {
        addAttractionItinerary(currentlySelected)
        saveButton();
})

//! Pop Up Modal

const bizarrePopUp = document.getElementById("bizarreModal")
const bizarreButton = document.getElementById("moreBizarreDetails")
const span = document.getElementById("close")

bizarreButton.onclick = () =>{
    eateryPopUp.style.display = "block";
    displayMoreDetails(currentlySelected)
}

span.onclick = () => {
    bizarrePopUp.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == bizarrePopUp) {
        bizarrePopUp.style.display = "none";
    }
}

const eateryPopUp = document.getElementById("eateryModal")
const eateryButton = document.getElementById("moreEateryDetails")
const eaterySpan = document.getElementById("eateryClose")

eateryButton.onclick = () =>{
    eateryPopUp.style.display = "block";
    displayEateryDetails(currentlySelectedEatery)
}

eaterySpan.onclick = () => {
    eateryPopUp.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == eateryPopUp) {
        eateryPopUp.style.display = "none";
    }
}

const eateryEvent = document.querySelector("#eateryDropdown");
const eateryElement = document.querySelector(".main");

eateryElement.addEventListener("change", (event) => {
	if (event.target.id === "eateryDropdown") {
        displayEateryCards(event.target.value);
	}
})


let currentlySelectedEatery = "";
eateryEvent.addEventListener("change", (event) => {
    currentlySelectedEatery = event.target.value
         displayEateryCards(event.target.value);
         eateryButton.style.display = "block";

    }
    )
    
const eateryEventButton = document.querySelector(".eateryButton")
    
        eateryEventButton.addEventListener("click", (event) => {
        addEateryItinerary(currentlySelectedEatery)
        saveButton();
})

//   ***  Function that checks if all three conditions are met   
//     ****   (itinerary preview filled)   
//     ****   sets save itinerary button to disabled or enabled
const saveButton = () => {
    if(currentlySelectedPark === "" || currentlySelectedEatery === "" || currentlySelected === "") {
        document.querySelector("#saveButton").disabled=true;
    } else {
        document.querySelector("#saveButton").disabled=false;
    }
}
const saveItineraryButton = document.querySelector("#saveButton")
//   ***  Function to save itinerary when save button is clicked
saveItineraryButton.addEventListener("click", event => {
        if(event.target.id === "saveButton") {
                const nameInput = document.querySelector("input[name='nameBox']");
                const parkObj = parkObject();
                const eateryObj = eateryObject();
                const bizarreObj = bizarreObject();
        
                const itineraryPostObject = {
                        name: nameInput.value,
                        park: parkObj ,
                        eatery: eateryObj,
                        bizarre: bizarreObj,
                    };
            
                    createItineraryPost(itineraryPostObject)
                    .then(response => {
                            console.log("JSON Response: ", response);
                
                        })

                        .then(()=> {
                            let ItineryCard = document.querySelector("#savedCard")
                            ItineryCard.innerHTML += AddItinery(itineraryPostObject) 
                        }
                        
                        )

                    }
                    
                })

//!!!!   define latitude and longitude to get forecast to render
let latitude = 36.1659;
let longitude = -86.7844;
const latitudeLongitude = () => {
    
    latitude = parkObject().latitude;
    longitude = parkObject().longitude;
    getWeatherForecast(latitude, longitude)
    //   ***  Then parse data (array)  ***   //
    .then((data) => {
        //   ***  Call showWeather with parsed data
      showWeather(data);
    })

};

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
    getWeatherForecast(36.1659, -86.7844)
      //   ***  Then parse data (array)  ***   //
      .then((data) => {
        //   ***  Call showWeather with parsed data
        showWeather(data);
      });

}

startWheelsOnTheGround();

