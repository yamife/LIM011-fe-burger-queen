import React from 'react';
import getProducts from '../../firebase/firestore';
import Menu from './Menu'
import Items from './Items';
import Order from './Order';

class Waiter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.clickTabs = this.clickTabs.bind(this);
    this.clickItem = this.clickItem.bind(this);
  }
  clickTabs(category) {
    getProducts(category)
      .then(data => this.setState(
        { products: data }
      ));
  }
  clickItem(product, price){
    console.log(product, price)
  }
  render() {
    return (
      <div>
        <div className="d-flex bd-highlight">
          <div className=" container containerp-2 flex-fill bd-highlight">
            <Menu clickTabs={this.clickTabs} />
            <Items products={this.state.products} />
          </div>
          <div className=" container p-2 flex-fill bd-highlight">
            <h4>Orden</h4>
            <Order />
          </div>
        </div>
      </div>
    );
  }
}

export default Waiter;
