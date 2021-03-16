
import { displayAttractions } from './attractions/AttractionList.js'
import { getWeatherForecast } from "./weather/WeatherProvider.js";




//!!!!   define latitude and longitude to get forecast to render
let latitude = 36.1659;
let longitude = -86.7844;




//   ***  Function to start app processes  ***   //

const startWheelsOnTheGround = () => {
    displayAttractions();
    //!!!!   call weather forecast funtion, passing latitude and longitude as arguments
    //!!!!        Note  arguments will be derived from selected park's coordinates 
    getWeatherForecast(latitude, longitude);

}



startWheelsOnTheGround();

<<<<<<< HEAD
displayAttractions();

const mainEvent = document.querySelector(".main");

mainEvent.addEventListener("change", (event) => {
    if (event.target.id === "bizarreDropdown")
})


// applicationElement.addEventListener("change", event => {
//     if (event.target.id === "yearSelection") {
//       const yearAsNumber = parseInt(event.target.value)
  
//       console.log(`User wants to see posts since ${yearAsNumber}`)
//       //invoke a filter function passing the year as an argument
//       showFilteredPosts(yearAsNumber);
//     }
//   })
=======
>>>>>>> main
