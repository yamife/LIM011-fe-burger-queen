import React from 'react';
import { getProducts } from '../firebase/firestore';
import Menu from './Menu';


class Tabs extends React.Component {

  constructor() {
    super();
    this.state = { products: [] };
    this.clickTabs = this.clickTabs.bind(this);
  }

  clickTabs(category) {
    getProducts(category)
      .then(data => this.setState({ products: data }));
  }

  render() {

    return (

      <div className="d-flex bd-highlight">
        <div className="p-2 flex-fill bd-highlight">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-outline-primary" onClick={() => { this.clickTabs('breakfast') }}>Desayuno</button>
            <button type="button" className="btn btn-outline-secondary" onClick={() => { this.clickTabs('burger') }}>Hamburguesas</button>
            <button type="button" className="btn btn-outline-success" onClick={() => { this.clickTabs('sideDish') }}>Acompañamiento</button>
            <button type="button" className="btn btn-outline-danger" onClick={() => { this.clickTabs('drinks') }}>Bebidas</button>
          </div>
          <div>
            <Menu products={this.state.products} />
          </div>
        </div>
        <div className="p-2 flex-fill bd-highlight">
          <h1>Orden</h1>
        </div>
      </div>

    );
  }
}

export default Tabs;
