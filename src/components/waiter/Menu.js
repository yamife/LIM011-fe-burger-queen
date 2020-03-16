import React from 'react';


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


export default Menu;
