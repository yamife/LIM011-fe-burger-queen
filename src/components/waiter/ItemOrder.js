import React from 'react';
// import FontAwesome from 'react-fontawesome';

const ItemOrder = (props) => {
  return (
    <tr>
      <td><button className="btn btn-outline-danger btn-sm" onClick = {() => props.clickItem(props.value.id, 'suma')}>+</button>{props.value.quantity}<button className="btn btn-outline-danger btn-sm" onClick = {() => props.clickItem(props.value.id,'resta')}>-</button></td>
      <td>{props.value.nameProduct}</td>
      <td>S/.{props.value.price}</td>
      <td>S/.{props.value.total}</td>
      <td><button className="btn btn-danger" onClick={() => props.clickDelete(props.value.id)}>eliminar</button></td>
    </tr>
  );
}

export default ItemOrder;
