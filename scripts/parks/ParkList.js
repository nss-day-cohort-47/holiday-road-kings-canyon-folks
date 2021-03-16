//this is where we combine api data from park provider with the html from parks.js

//importing functions from the other two modules: park gives us our HTML. useParks copies the array and getParks applies the data to the array that is copied by useParks
import {park} from "./Parks.js"
import {useParks, getParks} from "./ParkProvider.js"

let parkArr = [];

export const makeParkList =() => {
    getParks().then(() => {
        parkArr = useParks()
        console.log(parkArr)
        // render(parkArr)
    })
   .then (() => {
    const parkObj = document.querySelector(".parkDropdown");
    //returning array
        let parkDropHTML = "" 
        for (const parkObject of parkArr) {
            parkDropHTML += park(parkObject);
        }
      return parkObj.innerHTML += parkDropHTML;
    })

}