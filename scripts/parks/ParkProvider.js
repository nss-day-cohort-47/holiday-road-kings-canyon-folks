//fetching the park data from the api
import { settings } from "../Settings.js"

let parkCollection = [];

export const useParks = () => {
    return [...parkCollection]
}

export const getParks = () => {
    return fetch (`https://developer.nps.gov/api/v1/parks?limit=500&api_key=${settings.npsKey}`)
    .then(response => response.json())
    .then((parsedResponse) => {
       parkCollection = parsedResponse
        return parsedResponse;
    });
};

