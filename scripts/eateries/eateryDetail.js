export const eateryDetail = (eateryObj) => {
return `
  <option value="${eateryObj.id}">${eateryObj.businessName}</option>
  `
}

export const eateryCard = (eateryObj) => {
  return `
    <section class="eateryTile">
      <h2 class="eateryHeadline">${eateryObj.businessName} </h2>
      <p> Location: ${eateryObj.city}, ${eateryObj.state} </p>
      <p> Description: ${eateryObj.description} </p>
      <p> Wheelchair accessible: ${eateryObj.wheelchairAccessible} </p>
      <p> Wifi: ${eateryObj.ameneties.wifi} </p>
      <p> Restrooms: ${eateryObj.ameneties.restrooms} </p>
    </section>
  `;
}