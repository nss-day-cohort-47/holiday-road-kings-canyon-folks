//module to render park information from the api

export const park = (nps) => {
    return `
    <h2>${}</h2>
    <div>${img}</div>
    <p>Location: ${}</p>
    <p>Website: ${}</p>
    <p>Standard Hours: ${}</p>
    <p>${description}</p>
    `
}