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
    <h2 class="parkHeadline">${nps.fullName}</h2>
    <div><img class="parkImg" src="${imageUrl}" alt="${imageAltText}"></div>
    <p>Location: ${nps.states}</p>
    `
}

//creating HTML component for placing the park into the itinerary preview
export const parkItin = (nps) => {
    return `
    <h3>${nps.fullName}</h3>
    `
}

//creating the HTML component for the park more details in the module box. had to specify multiple arrays to populate the contact information. 
export const moreParkDetails = (nps) => {
    const phoneNumbArray = nps.contacts.phoneNumbers
    const emailArray = nps.contacts.emailAddresses
    let phoneNumb = ""
    let emailAdd = ""
        if (phoneNumbArray[0] ) {
        let phoneObject = phoneNumbArray[0]
        phoneNumb = phoneObject.phoneNumber
        }
        if (emailArray [0]) {
            let emailObject = emailArray [0]
            emailAdd = emailObject.emailAddress
        }

    return `
    <p>${nps.description}</p>
    <h4>Contact Info:</h4>
   <p>Phone: <a href="tel:${phoneNumb}">${phoneNumb}</a></p>
   <p>Email: <a href="mailto:${emailAdd}">${emailAdd}</a></p>
    <p><a href="${nps.url}">Visit the ${nps.fullName} official site here</a></p>
    `
}

