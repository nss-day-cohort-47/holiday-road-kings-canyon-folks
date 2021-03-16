//imports the park api key
import { settings } from "../Settings.js"

//declaring park array
let parkCollection = [];

//creating copy of park array data
export const useParks = () => {
    return [...parkCollection]
}

//fetching park data from api 
export const getParks = () => {
    return fetch (`https://developer.nps.gov/api/v1/parks?limit=500&api_key=${settings.npsKey}`)
    .then(response => response.json())
    .then((parsedResponse) => {
       parkCollection = parsedResponse

       console.log("parkarray", parkCollection)
        return parsedResponse;
    });
};

