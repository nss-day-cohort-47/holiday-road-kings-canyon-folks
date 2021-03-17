//this is where we create functions to render the data onto the DOM. These functions are not utilizing the getParks function at all, this will happen in main.  

//importing functions from the other two modules: park gives us our HTML
import { park, parkCard } from "./Parks.js";

// this function first makes the HTML cards from parkCard, then after that populates the dropdown list in makeParkList. 
export const makeParkCard = (parkData) => {
  const parkCardObj = document.querySelector(".parkSection");
  let parkCardHTML = "";
  for (const parkCardObject of parkData) {
    parkCardHTML += parkCard(parkCardObject);
  }
  makeParkList(parkData);
  return (parkCardObj.innerHTML += parkCardHTML);
};

// makeParkList creates the dropdown and renders it in HTML to the DOM. this function isn't being exported separately because we call it inside of makeParkCard which is being exported. 
const makeParkList = (parkData) => {
  const parkObj = document.querySelector(".parkDropdown");
  let parkDropHTML = "";
  for (const parkObject of parkData) {
    parkDropHTML += park(parkObject);
  }
  return (parkObj.innerHTML += parkDropHTML);
};
