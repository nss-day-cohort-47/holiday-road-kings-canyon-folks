//this is where we create functions to render the data onto the DOM. These functions are not utilizing the getParks function at all, this will happen in main.

//importing functions from the other two modules: park and parkCard create how the data will be displayed in HTML. 
import { park, parkCard, parkItin, moreParkDetails } from "./Parks.js";
import { useParks } from "./ParkProvider.js";

let filterParks = {}



//function to render HTML from Parks.js (parkCard) to the DOM, this function also filters the parks by their corresponding parkCode from the API data. 
export const makeParkCard = (parkData) => {
  filterParks = useParks().find( nps => nps.parkCode === parkData)
  const parkCardObj = document.querySelector(".parkDetail");
  let parkCardHTML = "";
  
  parkCardHTML = parkCard(filterParks);
  return (parkCardObj.innerHTML = parkCardHTML);
};

// makeParkList creates the dropdown and renders it in HTML to the DOM.
export const makeParkList = (parkData) => {
  const parkObj = document.querySelector(".parkDropdown");
  let parkDropHTML = "";
  for (const parkThing of parkData) {
    parkDropHTML += park(parkThing);
  }
  return (parkObj.innerHTML += parkDropHTML);
};



//places the html from Parks.js (parkItin) into the aside.
export const addParkItinerary = (parkData) => {
  filterParks = useParks().find(nps => nps.parkCode === parkData)
  const target = document.querySelector("#parkAside")
  
  let parkItinHTML = "";
  
  parkItinHTML = parkItin(filterParks);
  return (target.innerHTML = parkItinHTML)
};

//Places the html from parks.js into the modal box that pops up for more details.
export const displayParkDetails = (parkData) => {
  filterParks = useParks().find(nps => nps.parkCode === parkData)
  const target = document.querySelector(".eateryDetailsTarget")
  let parkDetailHTML = "";
  parkDetailHTML = moreParkDetails(filterParks)
  return target.innerHTML = parkDetailHTML;
}

export const parkObject = () => {
  return filterParks
}