import { Attraction } from './Attraction.js'
import { getBizarre } from './AttractionProvider.js'

export const displayAttractions = () => {
    const bizarreCollection = getBizarre()
    const target = document.querySelector(".bizarreSection")
    let bizarreHTML = ""
        for (const bizarreObject of bizarreCollection) {
            bizarreHTML += Attraction(bizarreObject)
        }
        return bizarreHTML;

};