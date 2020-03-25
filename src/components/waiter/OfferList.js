import React from 'react';
import ItemOffer from './ItemOffer';


const OfferList = (props) => {
  const offer = props.offer;
  const clickOffer = props.clickOffer;

  const offerFilter = offer.filter((offer) => offer.product === false);
  console.log(offerFilter);

  const listOrder = offerFilter.map((offer) =>
  <ItemOffer key={offer.id} value={offer} click={clickOffer}/>
  );

  return (
    <div>
      <h3>Oferta</h3>
      <ul id="item-list">
        {listOrder}
      </ul>
    </div>
  );
}
export default OfferList;
