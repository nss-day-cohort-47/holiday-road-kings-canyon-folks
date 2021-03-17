import { eateryDetail, eateryCard } from './eateryDetail.js';
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