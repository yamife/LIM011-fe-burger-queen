import React from 'react';
import PropTypes from 'prop-types';


function MenuTabs ({ clickTabs }) {

  return (
    <div data-testid="menu-tabs">
      <h1>Menú</h1>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-outline-primary" onClick={() => clickTabs('breakfast') } data-testid="breakfast">Desayuno</button>
        <button type="button" className="btn btn-outline-secondary" onClick={() => clickTabs('burger') } data-testid="burger">Hamburguesas</button>
        <button type="button" className="btn btn-outline-success" onClick={() => clickTabs('sideDish') } data-testid="sideDish">Acompañamiento</button>
        <button type="button" className="btn btn-outline-danger" onClick={() => clickTabs('drinks') } data-testid="drinks">Bebidas</button>
      </div>
      <br></br>
    </div>
  );
}


MenuTabs.propTypes = {
  clickTabs: PropTypes.func.isRequired,
};


export default MenuTabs;
