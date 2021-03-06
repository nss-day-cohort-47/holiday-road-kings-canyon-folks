//! This file will be responsible for setting the blueprint of html that we will dynamically populate the DOM with.

//* When an object is passed into this function, it returns a string of html in the form of an option on a dropdown menu.

export const Attraction = (bizarre) => {
    return `
    <option value="${bizarre.id}">${bizarre.name}</option>
    `
}


//! This will be used to build out the bizarre attraction card.

export const AttractionCard = (bizarre) => {
    return `
    <h2 class="attractionHeadline">${bizarre.name}</h2>
    <p>Location: ${bizarre.city}, ${bizarre.state}</p>
    `
}

//! This is the function to add the selected attraction to the itinerary.

export const AddBizarreItin = (bizarre) => {
    return `
    <h3>${bizarre.name}</h3>
    `
}

//! This function will populate a modal when the more details button is clicked.
export const moreAttractionDetails = (bizarre) => {
    return `
    <p>${bizarre.description}</p>
    <p>Souvenirs: ${bizarre.ameneties.souvenirs === true ? "Available" : "Unavailable"
}</p>
    <p>Restrooms: ${bizarre.ameneties.restrooms === true ? "Available" : "Unavailable"
}</p>
    
    `
}