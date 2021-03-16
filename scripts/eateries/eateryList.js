import { eateryDetail } from './eateryDetail.js';
import { getEateries, loadEateries } from './eateries/EateryProvider.js';


export const makeEateryList = (eateryArray) => {
  render(eateryArray)
};

const render = (eateryData) => {
  	const eateryDisplay = document.querySelector("#eateryDropdown");
  	let HTMLArray = eateryData.map(eatery => {
    	return eateryDetail(eatery);
  	})
      eateryDisplay.innerHTML = HTMLArray.join("");
}