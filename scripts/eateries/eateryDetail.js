export const eateryDetail = (eateryObj) => {
return `
  <option value="${eateryObj.id}">${eateryObj.businessName}</option>
  `
};

export const eateryCard = (eateryObj) => {
  return `
    <section class="eateryTile">
      <h2 class="eateryHeadline">${eateryObj.businessName} </h2>
      <p> Location: ${eateryObj.city}, ${eateryObj.state} </p>
      <p> Wheelchair accessible: ${eateryObj.ameneties.wheelchairAccessible === true ? "Available" : "Unavailable"} </p>
    </section>
  `;
}

export const AddEateryAside = (eateryObj) => {
  return `
    <h3>${eateryObj.businessName}</h3>
  `
};

export const eateryMoreDetail = (eateryObj) => {
  return `
    <section class="eateryMoreDetails">
      <p> ${eateryObj.description} </p>
      <p> Wifi: ${eateryObj.ameneties.wifi === true ? "Available" : "Unavailable"} </p>
      <p> Restrooms: ${eateryObj.ameneties.restrooms=== true ? "Available" : "Unavailable"} </p>
    </section>
  `;
}