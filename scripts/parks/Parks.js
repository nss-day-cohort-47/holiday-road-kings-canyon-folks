//puts names of parks into dropdown list
export const park = (nps) => {
    return `
    <option value="${nps.id}">${nps.fullName}</option>`
    
//creating HTML versions of the park data

    `<h2>${nps.fullName}</h2>
    <div>${nps.images}</div>
    <p>Location: ${nps.states}</p>
    <p>Website: ${nps.url}</p>
    <p>Hours: ${nps.operatingHours}</p>
    <p>${nps.description}</p>
    `;
}