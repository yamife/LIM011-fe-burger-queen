import React from 'react';
import ItemOffer from './ItemOffer';


const OfferList = (props) => {
  const offers = props.offers;
  const clickOffer = props.clickOffer;

  const listOffers = offers.map((offer) =>
  <ItemOffer key = { offer.id } value = { offer } clickOffer = { clickOffer }/>
  );

  return (
    <div>
      <h3>Oferta</h3>
      <ul id="item-list">
        {listOffers}
        <li>
          <button className="btn btn-outline-dark">Ninguno</button>
        </li>
      </ul>
    </div>
  );
}


export default OfferList;
