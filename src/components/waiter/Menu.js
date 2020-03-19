import React from 'react';
<<<<<<< HEAD

const Menu = (props) => {
  const clickTabs = props.clickTabs;
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-outline-primary" onClick={() => { clickTabs('breakfast') }}>Desayuno</button>
            <button type="button" className="btn btn-outline-secondary" onClick={() => { clickTabs('burger') }}>Hamburguesas</button>
            <button type="button" className="btn btn-outline-success" onClick={() => { clickTabs('sideDish') }}>Acompañamiento</button>
            <button type="button" className="btn btn-outline-danger" onClick={() => { clickTabs('drinks') }}>Bebidas</button>
          </div>
    );
}

=======
import MenuTabs from './MenuTabs';
import MenuList from './MenuList';


const Menu = (props) => {
    const clickTabs = props.clickTabs;
    const products = props.products;
    const clickProduct = props.clickProduct;

    return (
        <section className="p-2 flex-fill bd-highlight">
            <MenuTabs clickTabs = { clickTabs }/>
            <MenuList products = { products } clickProduct = { clickProduct }/>
        </section>
    );
}


>>>>>>> fd0574830bb69875fdd28a4b13ea9aadff782a84
export default Menu;
