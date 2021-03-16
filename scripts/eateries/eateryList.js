import { eatery } from './eateryDetail.js';
import { getEateries } from './EateryProvider';

export const displayEateries = () => {
    const eateryCollection = getEateries()
    const target = document.querySelector(".eaterySection")
    let eateryHTML = ""
        for (const eateryObject of eateryCollection) {
            eateryHTML += eatery(eateryObject)
        }
        return eateryHTML;

};