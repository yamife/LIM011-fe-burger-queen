import React from 'react';


const ItemOffer = (props) => {
  return (
    <li onClick={() => props.click(props.value)}>
      <button className="btn btn-outline-dark">
      {props.value.nameProduct} S/. {props.value.price}
      </button>
    </li>
  );
}


export default ItemOffer;
