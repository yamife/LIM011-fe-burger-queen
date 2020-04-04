import React from 'react';


const ItemMenu = (props) => {
  return (
    <li data-testid = "itemsMenu" >
      <button data-testid = "item" className="btn btn-outline-dark" onClick={() => props.clickProduct(props.value)}>
      {props.value.nameProduct} S/. {props.value.price}
      </button>
    </li>
  );
}


export default ItemMenu;
