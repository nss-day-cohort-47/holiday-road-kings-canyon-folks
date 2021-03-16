//module to render park information from the api

export const park = (nps) => {
    return `
    <h2>${park.fullName}</h2>
    <div>${park.images}</div>
    <p>Location: ${park.states}</p>
    <p>Website: ${park.url}</p>
    <p>Hours: ${park.operatingHours}</p>
    <p>${park.description}</p>
    `;
}