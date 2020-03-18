import React from 'react';


const ItemMenu = (props) => {
  console.log(props.value.nameProduct);

  return (
    <li>
      {props.value.nameProduct} {props.value.price}
    </li>
  );
}


export default ItemMenu;
