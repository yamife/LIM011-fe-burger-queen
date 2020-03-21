import React from 'react';


const ItemOrder = (props) => {
  return (
    <tr>
      <td>
        <button className="btn btn-outline-danger btn-sm" onClick = { () => props.clickButtonAdd(props.value.id)}>+</button>
        {props.value.quantity}
        <button className="btn btn-outline-danger btn-sm" onClick = { () => props.clickButtonSubtrack(props.value.id) }>-</button>
      </td>
      <td>{props.value.nameProduct}</td>
      <td>S/.{props.value.price}</td>
      <td>S/.{props.value.total}</td>
      <td><button  className="btn btn-danger" onClick = { () => props.clickButtonDelete(props.value.id) }>Eliminar</button></td>
    </tr>
  );
}


export default ItemOrder;
