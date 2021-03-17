import { eateryCard } from './eateryDetail.js';

let eateryCollection = []

export const getEateries = () => {
    return fetch ("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(parsedResponse => {
        eateryCollection = parsedResponse
        return parsedResponse;
    });
};

console.log(getEateries())

export const useEateries = () => {
    return[...eateryCollection]
}

export const makeEateryList = (eateryArray) => {
    render(eateryArray)
  };

const render = (eateryData) => {
    const eateryDisplay = document.querySelector("#eateryDetail");
  //What is map?
  //what does map return? An Array.
  //https://www.w3schools.com/jsref/jsref_map.asp
    let HTMLArray = eateryData.map(eatery => {
      return eateryCard(eatery);
    })
    //Since HTMLArray is an array, we can use join to make it a string
    eateryDisplay.innerHTML = HTMLArray.join("");
}