import React from 'react';


const ItemOrder = (props) => {
  console.log(props.value);

  return (
    <li>
      {props.value}
    </li>
  );
}


export default ItemOrder;