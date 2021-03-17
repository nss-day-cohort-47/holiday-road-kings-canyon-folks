//this is where we create functions to render the data onto the DOM. These functions are not utilizing the getParks function at all, this will happen in main.

//importing functions from the other two modules: park and parkCard create how the data will be displayed in HTML. 
import { park, parkCard } from "./Parks.js";
import { useParks } from "./ParkProvider.js";

export const makeParkCard = (parkData) => {
    let filterParks = useParks().find( nps => nps.parkCode === parkData)
    const parkCardObj = document.querySelector(".parkDetail");
    let parkCardHTML = "";
   
    parkCardHTML = parkCard(filterParks);
    // makeParkList(parkData);
    return (parkCardObj.innerHTML = parkCardHTML);
  };

// makeParkList creates the dropdown and renders it in HTML to the DOM. this function isn't being exported separately because we call it inside of makeParkCard which is being exported.
export const makeParkList = (parkData) => {
  const parkObj = document.querySelector(".parkDropdown");
  let parkDropHTML = "";
  for (const parkObject of parkData) {
    parkDropHTML += park(parkObject);
  }
  return (parkObj.innerHTML += parkDropHTML);
};
