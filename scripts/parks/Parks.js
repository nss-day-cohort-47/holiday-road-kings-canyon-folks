//module to render park information from the api

export const park = (nps) => {
    return `
    <h2>${nps.fullName}</h2>
    <div>${nps.images}</div>
    <p>Location: ${nps.states}</p>
    <p>Website: ${nps.url}</p>
    <p>Hours: ${nps.operatingHours}</p>
    <p>${nps.description}</p>
    `;
}