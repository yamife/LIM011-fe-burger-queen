import React from 'react';


const ItemModalOrder = (props) => {
  return (
    <tr>
      <td>{props.value.quantity}</td>
      <td>{props.value.nameProduct}</td>
      <td>S/.{props.value.price}</td>
      <td>S/.{props.value.subTotal}</td>
    </tr>
  );
}


export default ItemModalOrder;
