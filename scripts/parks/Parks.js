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
    }
    return`
    <h2>${nps.fullName}</h2>
    <div><img class="parkImg" src="${imageUrl}" alt="${nps.images.altText}"></div>
    <p>Location: ${nps.states}</p>
    <p>Website: ${nps.url}</p>
    <p>Hours: ${nps.operatingHours.standardHours}</p>
    <p>${nps.description}</p>
    `
}

