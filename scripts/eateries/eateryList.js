import { eateryDetail, eateryCard, AddEateryAside, eateryMoreDetail } from './eateryDetail.js';
import { getEateries, useEateries } from './EateryProvider.js';

export const displayEateries = () => {

	let eateryCollection = [];

	getEateries().then(() => {
		eateryCollection = useEateries()
		console.log(eateryCollection, "Let's eat")

	})
		.then(() => {

			const target = document.querySelector("#eateryDropdown")
			let eateryHTML = ""
			for (const eateryObj of eateryCollection) {
				eateryHTML += eateryDetail(eateryObj)
			}
			return target.innerHTML += eateryHTML;
		})
};

export const displayEateryCards = (id) => {

	let eateryCollection = []

	getEateries().then((response) => {
		eateryCollection = useEateries()
		console.log(eateryCollection, "food test")

		let foundEateries = eateryCollection.find(eateryObj => eateryObj.id === parseInt(id))
		console.log(foundEateries, "foundEateries")
		const target = document.querySelector(".eateryDetail")

		let eateryHTML = ""
		eateryHTML = eateryCard(foundEateries)

		return target.innerHTML = eateryHTML;
	})
}

let foundEateries = {}

export const addEateryItinerary = (id) => {

	let eateryCollection = []

	getEateries().then((response) => {
		eateryCollection = useEateries()
		console.log(eateryCollection, "testEateryCollection")

		foundEateries = eateryCollection.find(eateryObj => eateryObj.id === parseInt(id))
		const target = document.querySelector("#eateryAside")

		let eateryHTML = ""
		eateryHTML = AddEateryAside(foundEateries)
		console.log(foundEateries, "foundEateries")
		return target.innerHTML = eateryHTML;
	})
}


export const displayEateryDetails = (id) => {

	let eateryCollection = []
	
    getEateries().then((response) => {
        eateryCollection = useEateries()
        console.log(eateryCollection, "test")
        
            foundEateries = eateryCollection.find(eateryObj => eateryObj.id === parseInt(id))
            console.log(foundEateries, "foundEateries")
            const target = document.querySelector(".eateryDetailsTarget")
            let eateryHTML = ""
         	eateryHTML = eateryMoreDetail(foundEateries)
            
            return target.innerHTML = eateryHTML;
        })
}

export const eateryObject = () => {
    return foundEateries

}