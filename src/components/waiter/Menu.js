import React from 'react';
import MenuTabs from './MenuTabs';
import MenuList from './MenuList';


const Menu = (props) => {
    const clickTabs = props.clickTabs;
    const products = props.products;
    const clickProduct = props.clickProduct;
    const offer = props.offer;
    console.log(offer);

    return (
        <section className="p-2 flex-fill bd-highlight">
            <p>Texto está aquí.</p>
            <MenuTabs clickTabs = { clickTabs }/>
            <MenuList products = { products } clickProduct = { clickProduct } offer = { offer }/>
        </section>
    );
}


export default Menu;
