//this is where we combine api data from park provider with the html from parks.js

//importing functions from the other two modules: park gives us our HTML. useParks copies the array and getParks applies the data to the array that is copied by useParks
import {park, parkCard} from "./Parks.js"
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

export const makeParkCard = () => {
    getParks().then(() => {
        parkArr = useParks()
    })
    .then (() => {
        const parkCardObj = document.querySelector(".parkSection")
        let parkCardHTML = ""
        for (const parkCardObject of parkArr) {
            parkCardHTML += parkCard(parkCardObject);
        }
        return parkCardObj.innerHTML += parkCardHTML;
    })
}