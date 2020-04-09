import React from 'react';
import PropTypes from 'prop-types';


function ItemOffer ({ value, clickOffer, productOffer }) {
 /*  const clickOffer = props.clickOffer;
  const productOffer = props.productOffer;
  const valueOffer = props.value; */

  return (
    <li data-testid="item-offer">
      <button data-testid = "button" className="btn btn-outline-dark" onClick={ () => clickOffer(productOffer, value) }>
      { value.nameOffer } S/. { value.price }
      </button>
    </li>
  );
}


ItemOffer.propTypes = {
  clickOffer: PropTypes.func.isRequired,
  value: PropTypes.shape({
    nameOffer: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  productOffer: PropTypes.object.isRequired,
};


export default ItemOffer;
