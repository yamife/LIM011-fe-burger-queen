import React from 'react';
// import FontAwesome from 'react-fontawesome';


const ItemOrder = (props) => {
  return (
    <tr data-testid="item-table-order">
      <td data-testid="item1">
        <button data-testid="button-add" className="btn btn-outline-danger btn-sm" onClick = { () => props.clickButtonAdd(props.value)}>+</button>
        <p data-testid="quantity">{props.value.quantity}</p>
        <button data-testid="button-subtract" className="btn btn-outline-danger btn-sm" onClick = { () => props.clickButtonSubtract(props.value) }>-</button>
      </td>
      <td data-testid="item2">{props.value.nameProduct}</td>
      <td data-testid="item3">S/.{props.value.price}</td>
      <td data-testid="item4">S/.{props.value.subTotal}</td>
      <td data-testid="item5">
        <button data-testid="button-delete" className="btn btn-danger" onClick = { () => props.clickButtonDelete(props.value) }>Eliminar</button>
      </td>
    </tr>
  );
}


export default ItemOrder;
