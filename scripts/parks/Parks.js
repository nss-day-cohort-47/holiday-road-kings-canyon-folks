//puts names of parks into dropdown list
export const park = (nps) => {
    return `
    <option value="${nps.parkCode}">${nps.fullName}</option>
    `
}

//creating HTML component for park data. In order to specify an index for the array we create the variable imagesArray and specify which index we want to use through that. imageUrl and imageAltText are used to populate the template literals inside of the HTML. 
export const parkCard = (nps) => {
    const imagesArray = nps.images
    let imageUrl = ""
    let imageAltText = ""
    if (imagesArray[0] ) {
        let imageObject = imagesArray[0]
        imageUrl = imageObject.url
        imageAltText = imageObject.altText
    }
    return `
    <h2>${nps.fullName}</h2>
    <div><img class="parkImg" src="${imageUrl}" alt="${imageAltText}"></div>
    <p>Location: ${nps.states}</p>
    `
}

export const parkItin = (nps) => {
    return `
    <h3>${nps.fullName}</h3>
    `
}

export const moreParkDetails = (nps) => {
    return `
    <p>${nps.description}</p>
    <p><a href="${nps.url}">Visit the ${nps.fullName} official site here</a></p>
    `
}