import React from 'react';


const ItemOffer = (props) => {
  return (
    <li onClick={ () => props.clickOffer(props.value) }>
      <button className="btn btn-outline-dark">
      {props.value.nameOffer} S/. {props.value.price}
      </button>
    </li>
  );
}


export default ItemOffer;
