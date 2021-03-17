//puts names of parks into dropdown list
export const park = (nps) => {
    return `
    <option value="${nps.parkCode}">${nps.fullName}</option>
    `
}

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
    <p>${nps.description}</p>
    <p><a href="${nps.url}">More Information</a></p>
    `
}

