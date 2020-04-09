import React from 'react';
import PropTypes from 'prop-types';


function ItemMenu ({clickProduct, value}) {
  return (
    <li data-testid="item-menu">
      <button data-testid="button" className="btn btn-outline-dark" onClick={() => clickProduct(value)}>
      { value.nameProduct } S/. { value.price }
      </button>
    </li>
  );
}


ItemMenu.propTypes = {
  clickProduct: PropTypes.func.isRequired,
  value: PropTypes.shape({
    nameProduct: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};


export default ItemMenu;
