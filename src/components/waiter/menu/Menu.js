import React from 'react';
import PropTypes from 'prop-types';
import MenuTabs from './MenuTabs';
import MenuList from './MenuList';


function Menu ({ clickTabs, clickProduct, clickOffer, products, offers, productOffer }) {

    return (
        <section className="p-2 flex-fill bd-highlight" data-testid="menu">
            <MenuTabs clickTabs={clickTabs} />
            <MenuList products={products} clickProduct={clickProduct} offers={offers} clickOffer={clickOffer} productOffer={productOffer} />
        </section>
    );
}


Menu.propTypes = {
    clickTabs: PropTypes.func.isRequired,
    clickProduct: PropTypes.func.isRequired,
    clickOffer: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    offers: PropTypes.array.isRequired,
    productOffer: PropTypes.object.isRequired
};

export default Menu;
