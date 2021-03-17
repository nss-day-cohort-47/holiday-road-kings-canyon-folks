export const eateryDetail = (eateryObj) => {
return `
  <option value="${eateryObj.id}">${eateryObj.businessName}</option>
  `
}

// `
//     <section class="eateryTile">
//       <h2 class="eateryHeadline">${eateryObj.businessName} </h2>
//       <p> Location: ${eateryObj.city}, ${eateryObj.state} </p>
//       <p> Description: ${eateryObj.description} </p>
//       <p> Wheelchair accessible: ${eateryObj.wheelchairAccessible} </p>
//       <p> Wifi: ${eateryObj.amenities.wifi} </p>
//       <p> Restrooms: ${eateryObj.amenities.restrooms} </p>
//       <div><button>Add to Itinerary</button></div>
//     </section>
//   `;
// }