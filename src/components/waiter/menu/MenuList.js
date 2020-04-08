import React from 'react';
import ItemMenu from './ItemMenu';
import OfferList from './OfferList';


const MenuList = (props) => {
  const products = props.products;
  const clickProduct = props.clickProduct;
  const offers = props.offers;
  const productOffer = props.productOffer;
  const clickOffer = props.clickOffer;

  return (
    <div data-testid="menu-list">
      <div>
        <ul id="item-list">
          {
            (products) && products.map((product) =>
              <ItemMenu key = { product.id } value = { product } clickProduct = { clickProduct }/>
            )
          }
        </ul>
      </div>
        {
          (offers.length > 0) && <OfferList offers = { offers } clickOffer = { clickOffer } productOffer = { productOffer }/>
        }
    </div>
  );
}


export default MenuList;
