export const Attraction = (bizarre) => {
    return `
    <h2>${bizarre.name}</h2>
    <p>Location: ${bizarre.city} + " " + ${bizarre.state}</p>
    <p>${bizarre.description}</p>
    <p>Souvenirs? ${bizarre.souvenirs}</p>
    <p>Restrooms? ${bizarre.restrooms}</p>
    `
}
