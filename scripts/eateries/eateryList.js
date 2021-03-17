import { eateryDetail } from './eateryDetail.js';
import { getEateries, useEateries } from './EateryProvider.js';

export const displayEateries = () => {

	let eateryCollection = [];

	getEateries().then(() => {
		eateryCollection = useEateries()
		console.log(eateryCollection, "Let's eat")

	})
		.then(() => {

			const target = document.querySelector(".eateryDropdown")
			let eateryHTML = ""
			for (const eateryObj of eateryCollection) {
				eateryHTML += eateryDetail(eateryObj)
			}
			return target.innerHTML += eateryHTML;
		})
};
