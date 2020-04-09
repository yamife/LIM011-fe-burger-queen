import React from 'react';
import PropTypes from 'prop-types';


const ItemModalOrder = ({ value = {} }) => {
  return (
    <tr data-testid = "item-table-modal">
      <td data-testid = "item1">{ value.quantity }</td>
      <td data-testid = "item2">{ value.nameProduct }</td>
      <td data-testid = "item3">S/.{ value.price }</td>
      <td data-testid = "item4">S/.{ value.subTotal }</td>
    </tr>
  );
}


ItemModalOrder.propTypes = {
  value: PropTypes.shape({
    nameProduct: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    subTotal: PropTypes.number.isRequired
  }).isRequired
};


export default ItemModalOrder;
