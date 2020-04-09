import React from 'react';
import PropTypes from 'prop-types';
// import FontAwesome from 'react-fontawesome';


const ItemOrder = ({ clickButtonAdd, clickButtonSubtract, clickButtonDelete, value = {} }) => {
  return (
    <tr data-testid="item-table-order">
      <td data-testid="item1">
        <button data-testid="button-add" className="btn btn-outline-danger btn-sm" onClick = { () => clickButtonAdd(value)}>+</button>
        {value.quantity}
        <button data-testid="button-subtract" className="btn btn-outline-danger btn-sm" onClick = { () => clickButtonSubtract(value) }>-</button>
      </td>
      <td data-testid="item2">{ value.nameProduct }</td>
      <td data-testid="item3">S/.{ value.price }</td>
      <td data-testid="item4">S/.{ value.subTotal }</td>
      <td data-testid="item5">
        <button data-testid="button-delete" className="btn btn-danger" onClick = { () => clickButtonDelete(value) }>Eliminar</button>
      </td>
    </tr>
  );
}


ItemOrder.propTypes = {
  clickButtonAdd: PropTypes.func.isRequired,
  clickButtonSubtract: PropTypes.func.isRequired,
  clickButtonDelete: PropTypes.func.isRequired,
  value: PropTypes.shape({
    nameProduct: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    subTotal: PropTypes.number.isRequired
  }).isRequired
};


export default ItemOrder;
