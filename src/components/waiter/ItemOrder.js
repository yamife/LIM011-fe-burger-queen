import React from 'react';


const ItemOrder = (props) => {
  return (
    <tr>
      <td><button>+</button>{props.value.quantity}<button>-</button></td>
      <td>{props.value.nameProduct}</td>
      <td>S/.{props.value.price}</td>
      <td>S/.</td>
      <td><button>eliminar</button></td>
    </tr>
  );
}


export default ItemOrder;
