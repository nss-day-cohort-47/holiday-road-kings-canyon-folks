import { eateryDetail, eateryCard, AddEateryAside, eateryMoreDetail } from './eateryDetail.js';
import { getEateries, useEateries } from './EateryProvider.js';

//* Pull in the details and functions from the other js files to format the lists.

//* then create an export to help display the information from the detail js
export const displayEateries = () => {

	let eateryCollection = [];

	//* This contains an empty array so we can use the useEatery function to pull it in.

	getEateries().then(() => {
		eateryCollection = useEateries()


	})
		.then(() => {

			//* Then we connect it to the dom, so the data can populate and tell it where to go
			const target = document.querySelector("#eateryDropdown")
			let eateryHTML = ""
			for (const eateryObj of eateryCollection) {
				eateryHTML += eateryDetail(eateryObj)
			}
			return target.innerHTML += eateryHTML;
		})
};

//* Now in order to show the data, we need to create and export a display function

export const displayEateryCards = (id) => {

	let eateryCollection = []

	getEateries().then((response) => {
		eateryCollection = useEateries()
		console.log(eateryCollection, "food test")

		//* We need to do a parseInt here since the id needs to be an integer and not a string

		let foundEateries = eateryCollection.find(eateryObj => eateryObj.id === parseInt(id))
		console.log(foundEateries, "foundEateries")
		const target = document.querySelector(".eateryDetail")

		let eateryHTML = ""
		eateryHTML = eateryCard(foundEateries)

		return target.innerHTML = eateryHTML;
	})
}

//* Once an eatery is selected, we then need a function to transfer the selection to the itinerary aside
let foundEateries = {}


export const addEateryItinerary = (id) => {

	let eateryCollection = []

	getEateries().then((response) => {
		eateryCollection = useEateries()

		foundEateries = eateryCollection.find(eateryObj => eateryObj.id === parseInt(id))
		const target = document.querySelector("#eateryAside")

		let eateryHTML = ""
		eateryHTML = AddEateryAside(foundEateries)
		return target.innerHTML = eateryHTML;
	})
}


export const displayEateryDetails = (id) => {

	let eateryCollection = []
	
    getEateries().then((response) => {
        eateryCollection = useEateries()
        
            foundEateries = eateryCollection.find(eateryObj => eateryObj.id === parseInt(id))
            const target = document.querySelector(".eateryDetailsTarget")
            let eateryHTML = ""
         	eateryHTML = eateryMoreDetail(foundEateries)
            
            return target.innerHTML = eateryHTML;
        })
}

export const eateryObject = () => {
    return foundEateries

}