let bizarreCollection = []

export const getBizarre = () => {
    return fetch ("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    .then(parsedResponse => {
        bizarreCollection = parsedResponse
        return parsedResponse;
    });
};

