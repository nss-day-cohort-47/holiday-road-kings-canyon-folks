//rendering each park as an option??

import {park} from "./Parks.js"

export const makeParkList = (parkArray) => {
    render(parkArray)
};

const render = (parkData) => {
    const parkObj = document.querySelector (".parkSection");
    let parkHTML = parkData.map(onePark => {
        return park(onePark);
    })
    parkObj.innerHTML = parkHTML.join("");
}
