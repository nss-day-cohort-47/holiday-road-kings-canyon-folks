import { makeEateryList } from './eateries/eateryList.js';
import { getEateries, loadEateries } from './eateries/EateryProvider.js'

makeEateryList(); 


const showdropDownNav = () => {
	const dropDownElement = document.querySelector('#eateryDropdown');
	dropDownElement.innerHTML = dropDownNav();
}


navElement.addEventListener("change", (event) => {
	console.log(event);
	const eaterySort = event.target.value
	if (eaterySort !== "eateryDropdown"){
		filterEatery(eaterySort)
	} else {
		makeEateryList(getEateries())
	}
})

const filterEatery = (whatEatery) => {
	console.log(getEateries());
	const filterArray = getEateries().filter(eatery => {
		if (eatery.businessName.includes(whatEatery)) {
			return eatery;
		}
	})
	makeEateryList(filterArray);
}



const startEIA = () => {
	showdropDownNav();
	loadEateries()
		.then(eateryArray => {
			makeEateryList(eateryArray)
		})
}

startEIA();