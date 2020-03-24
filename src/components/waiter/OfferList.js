import React from 'react';
import ItemOffer from './ItemOffer';


const OfferList = (props) => {
  const products = props.products;
  const clickOffer = props.clickOffer;

  const productFilter = products.filter((order) => order.product === false);
  console.log(productFilter);

  const listOrder = productFilter.map((order) =>
  <ItemOffer key={order.id} value={order} click={clickOffer}/>
  );
  return (
    <div>
        <h3>Oferta</h3>
        <ul id="item-list">
          {listOrder}
        </ul>
    </div>
  );
}
export default OfferList;
