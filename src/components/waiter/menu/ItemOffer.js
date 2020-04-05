import React from 'react';


const ItemOffer = (props) => {
  return (
    <li>
      <button data-testid = "itemOffer" className="btn btn-outline-dark" onClick={ () => props.clickOffer(props.productOffer, props.value) }>
      {props.value.nameOffer} S/. {props.value.price}
      </button>
    </li>
  );
}


export default ItemOffer;
