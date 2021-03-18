//inside bizarre event handler on main://
singleAttraction(event.target.value);
const singelAttraction = (id) {
let foundBizarre = useBizarres().find(bizarre => bizarre.id === id);
//use foundBizarre to be the object that is passed into Attraction card HTML representation
//could be a refactored function based off of display attractions 
//
const target = document.querySelector();
let savedIteneraryHTML = SingleAttractionCard(foundBizarre)
target.innerHTML += savedItineraryHTML
}