import { displayAttractions } from './attractions/AttractionList.js'

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