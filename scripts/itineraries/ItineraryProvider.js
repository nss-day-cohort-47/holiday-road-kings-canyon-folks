
let itineraryCollection = [];

export const useItineraryCollection = () => {
    return [...itineraryCollection]
}

export  const getItineraries = () => {
    return fetch("http://localhost:8080/itineraries")
    .then(response => response.json())
    .then(data => {
        itineraryCollection = data;
        return data;
    });
};

export const createItineraryPost =(itineraryEntry) => {
    return fetch("http://localhost:8080/itineraries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(itineraryEntry),
       }).then(response => response.json());
};