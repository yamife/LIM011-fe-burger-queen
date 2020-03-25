import React from 'react';
import ItemMenu from './ItemMenu';
import OfferList from './OfferList';


const MenuList = (props) => {
  const products = props.products;
  const clickProduct = props.clickProduct;
  const offer = props.offer;
  console.log(offer);

  const productFilter = products.filter((order) => order.product === true)
  console.log(productFilter);

  const listOrder = productFilter.map((order) =>
  <ItemMenu key={order.id} value={order} click={clickProduct}/>
  );

  return (
    <div>
      <div>
        <ul id="item-list">
          {listOrder}
        </ul>
      </div>
        {
          (offer.length > 0) && <OfferList offer={offer}/>
        }
    </div>
  );
}


export default MenuList;
