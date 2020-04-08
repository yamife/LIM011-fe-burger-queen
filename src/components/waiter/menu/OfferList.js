import React from 'react';
import ItemOffer from './ItemOffer';


const OfferList = (props) => {
  const offers = props.offers;
  const productOffer = props.productOffer;
  const clickOffer = props.clickOffer;

  return (
    <div data-testid="offer-list">
      <h3>Oferta</h3>
      <ul id="item-list">
        {
          (offers) && offers.map((offer) =>
          <ItemOffer key = { offer.id } value = { offer } clickOffer = { clickOffer } productOffer = { productOffer }/>
          )
        }
        <li>
          <button data-testid="button-none" className="btn btn-outline-dark" onClick={ () => props.clickOffer(props.productOffer, null) }>Ninguno</button>
        </li>
      </ul>
    </div>
  );
}


export default OfferList;
