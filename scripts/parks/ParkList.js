//rendering each park as an option??
import {park} from "./Parks.js"
import {useParks, getParks} from "./ParkProvider.js"



export const makeParkList = () => {
    let parkArray = [];
    getParks().then(()=> { 
    parkArray = useParks()
    console.log(parkArray)
    })
    render(parkArray)
};

// const render = (parkData) => {
//     const parkObj = document.querySelector(".parkSection");
// //returning array
//     let parkHTML = parkData.map(onePark => {
//         return park(onePark);
//     })
//     //use join to make array a string
//     parkObj.innerHTML += parkHTML.join("");
// }



