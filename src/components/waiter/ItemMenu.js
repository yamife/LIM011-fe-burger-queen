import React from 'react';


const ItemMenu = (props) => {
  console.log(props.click);

  return (
    <li onClick={() => props.click(props.value)}>
      <button>
      {props.value.nameProduct} {props.value.price}
      </button>
    </li>
  );
}


export default ItemMenu;
