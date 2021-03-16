let eateryCollection = []

export const getEateries = () => {
    return[...eateryCollection]
}

export const loadEateries = () => {
    return fetch ("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(parsedResponse => {
        eateryCollection = parsedResponse
        return parsedResponse;
    });
};

console.log(loadEateries())