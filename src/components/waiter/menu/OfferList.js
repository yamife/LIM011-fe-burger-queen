import React from 'react';
import PropTypes from 'prop-types';
import ItemOffer from './ItemOffer';


function OfferList ({ clickOffer, offers, productOffer }) {

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
          <button data-testid="button-none" className="btn btn-outline-dark" onClick={ () => clickOffer(productOffer, null) }>Ninguno</button>
        </li>
      </ul>
    </div>
  );
}


OfferList.propTypes = {
  clickOffer: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  productOffer: PropTypes.object.isRequired
};


export default OfferList;
