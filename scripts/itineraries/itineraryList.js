export const AddItinery = (itineraryEntry) => {
    return `
    <div>
      <h3>${itineraryEntry.name}</h3>
      <p>Park: ${itineraryEntry.park.fullName}</p>
      <p>Eatery: ${itineraryEntry.eatery.businessName}</p>
      <p>Attraction: ${itineraryEntry.bizarre.name}</p>
    </div>
    <hr>
    `
  };

