import { eateryDetail } from './eateryDetail.js';
import { getEateries, useEateries } from './EateryProvider.js';

export const displayEateries = (eateryArray) => {
	render(eateryArray)
  };

  const render = (eateryData) => {
		const eateryDisplay = document.querySelector("#eateryDropdown");
		let HTMLArray = eateryData.map(eatery => {
		  return eateryDetail(eatery);
		})
		eateryDisplay.innerHTML = HTMLArray.join("");
  }

const target = document.querySelector("eateryDropdown");


target.addEventListener("click", (event) => {
	if (event.target.id === "eateryDropdown") {
		filterEatery(".businessName")
	} else if (event.target.id === "showAll") {
		displayEateries(useEateries())
	}
})

const filterEatery = (whatFilter) => {
	const filterArray = useEateries().filter(eatery => {
		if (eatery.businessName.includes(whatFilter)) {
			return eatery;
		}
	})
	makeEateryList(filterArray);
}



// export const displayEateries = () => {

// 	let eateryCollection = [];

// 	getEateries().then(() => {
// 		eateryCollection = useEateries()
// 		console.log(eateryCollection, "Let's eat")

// 	})
// 		.then(() => {

// 			const target = document.querySelector(".eateryDropdown")
// 			let eateryHTML = ""
// 			for (const eateryObj of eateryCollection) {
// 				eateryHTML += eateryDetail(eateryObj)
// 			}
// 			return target.innerHTML += eateryHTML;
// 		})
// };
