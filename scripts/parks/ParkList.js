//this is where we combine api data from park provider with the html from parks.js

//importing functions from the other two modules: park gives us our HTML. useParks copies the array and getParks applies the data to the array that is copied by useParks
import {park} from "./Parks.js"
import {useParks, getParks} from "./ParkProvider.js"

//exporting a function called makeParkList, this function will 
export const makeParkList =() => {
    let parkArray = [];
    getParks().then(()=> { 
        parkArray = useParks()
        console.log(parkArray)
    })
    render(parkArray)
}

const render = (parkData) => {
        const parkObj = document.querySelector(".parkDropdown");
    //returning array
        let parkHTML = parkData.map(onePark => {
            return park(onePark);
        })
        //use join to make array a string
        parkObj.innerHTML += parkHTML.join("");
    }





/*
export const makeParkList = () => {
    let parkArray = []
    getParks().then(() => {
        parkCollection = useParks()
        console.log(makeParkList(), "park test")
    })
    .then(() => {
        const target = document.querySelector(".parkDropdown")
        let parkHTML = ""
        for (const parkObj of parkCollection) {
            parkHTML += park(parkObj)
        }
        return target.innerHTML += parkHTML
    })
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



// let parkArray = [];
//     getParks().then(()=> { 
//     parkArray = useParks()
//     console.log(parkArray)
//     })
//     render(parkArray) */