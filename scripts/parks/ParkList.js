//this is where we combine api data from park provider with the html from parks.js

//importing functions from the other two modules: park gives us our HTML. useParks copies the array and getParks applies the data to the array that is copied by useParks
import { park, parkCard } from "./Parks.js";

export const makeParkCard = (parkData) => {
  const parkCardObj = document.querySelector(".parkSection");
  let parkCardHTML = "";
  for (const parkCardObject of parkData) {
    parkCardHTML += parkCard(parkCardObject);
  }
  makeParkList(parkData);
  return (parkCardObj.innerHTML += parkCardHTML);
};

export const makeParkList = (parkData) => {
  const parkObj = document.querySelector(".parkDropdown");
  //returning array
  let parkDropHTML = "";
  for (const parkObject of parkData) {
    parkDropHTML += park(parkObject);
  }
  return (parkObj.innerHTML += parkDropHTML);
};
