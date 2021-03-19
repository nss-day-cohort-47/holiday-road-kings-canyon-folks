import { useItineraryCollection, getItineraries, createItineraryPost} from "./ItineraryProvider";

//inside itinerary event handler on main://
singleItinerary(event.target.value);
const singleItinerary = (id) {
let getItineraries = useItineraryCollection().find(itineraryEntry => itineraryEntry.id === id);
//use getItineraries to be the object that is passed into Itinerary card HTML representation
//could be a refactored function based off of display Itinerary 
//
const target = document.querySelector();
let savedItineraryHTML = singleItineraryCard(createItineraryPost)
console.log(createItineraryPost)
target.innerHTML += savedItineraryHTML
}