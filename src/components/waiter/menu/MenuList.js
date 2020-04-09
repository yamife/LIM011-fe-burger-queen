import React from 'react';
import ItemMenu from './ItemMenu';
import OfferList from './OfferList';
import PropTypes from 'prop-types';


function MenuList ({ clickProduct, clickOffer, products, offers, productOffer }) {
  
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


MenuList.propTypes = {
  clickProduct: PropTypes.func.isRequired,
  clickOffer: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired,
  productOffer: PropTypes.object.isRequired,
};


export default MenuList;
