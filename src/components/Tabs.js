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

      <div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-success" onClick={() => { this.clickTabs('breakfast') }}>Desayuno</button>
          <button type="button" className="btn btn-warning" onClick={() => { this.clickTabs('burger') }}>Hamburguesas</button>
          <button type="button" className="btn btn-danger" onClick={() => { this.clickTabs('sideDish') }}>Acompañamiento</button>
          <button type="button" className="btn btn-info" onClick={() => { this.clickTabs('drinks') }}>Bebidas</button>
        </div>
        <div>
            <Menu products={this.state.products} />
        </div>
      </div>

    );
  }
}

export default Tabs;
