//! This file will be responsible for getting the data for the bizarre attractions via a fetch request, it will then store that data in the following variable.

let bizarreCollection = []

//* Here we export the function getBizarre to use in other modules.

export const getBizarre = () => {
    return fetch ("http://holidayroad.nss.team/bizarreries")
    //* After fetching we use the .then() to convert the response into json format
    .then(response => response.json())
    //* .then() we take the converted response and save it to our empty array from line 3
    .then(parsedResponse => {
        bizarreCollection = parsedResponse
        //* finally we want to return that array
        return parsedResponse;

    });
};

//* This function should return a copy of our array

export const useBizarre = () => {
    return [...bizarreCollection]
}