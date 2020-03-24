import React from 'react';
import MenuTabs from './MenuTabs';
import MenuList from './MenuList';


const Menu = (props) => {
    const clickTabs = props.clickTabs;
    const products = props.products;
    const clickProduct = props.clickProduct;

    return (
        <section className="p-2 flex-fill bd-highlight">
            <MenuTabs clickTabs = { clickTabs }/>
            <MenuList products = { products } clickProduct = { clickProduct } />
        </section>
    );
}
export default Menu;
