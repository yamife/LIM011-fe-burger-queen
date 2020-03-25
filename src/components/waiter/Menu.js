import React from 'react';
import MenuTabs from './MenuTabs';
import MenuList from './MenuList';


const Menu = (props) => {
    const clickTabs = props.clickTabs;
    const products = props.products;
    const clickProduct = props.clickProduct;
    const offers = props.offers;
    const clickOffer = props.clickOffer;
    console.log(offers);

    return (
        <section className="p-2 flex-fill bd-highlight">
            <p>Texto está aquí.</p>
            <MenuTabs clickTabs = { clickTabs }/>
            <MenuList products = { products } clickProduct = { clickProduct } offers = { offers } clickOffer = { clickOffer }/>
        </section>
    );
}


export default Menu;
