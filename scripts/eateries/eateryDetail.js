export const eatery = (postObject) => {
  return `
    <section class="eateryTile">
      <h2>${postObject.businessName} </h2>
      <p> Location: ${postObject.city}, ${postObject.state} </p>
      <p> Description: ${postObject.description} </p>
      <p> Wheelchair accessible: ${postObject.wheelchairAccessible} </p>
      <p> Wifi: ${postObject.amenities/wifi} </p>
      <p> Restrooms: ${postObject.amenities/restrooms} </p>
      <div><button>Add to Itinerary</button></div>
    </section>
  `
}