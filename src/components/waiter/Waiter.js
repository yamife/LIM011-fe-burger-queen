import React from 'react';
import getProducts from '../../firebase/firestore';
import Menu from './Menu';
import OrderTable from './OrderTable';


class Waiter extends React.Component {
  constructor(props){
    super(props);

    this.state = { products: [], orders: [] };

    this.clickTabs = this.clickTabs.bind(this);
    this.clickProduct = this.clickProduct.bind(this);
  }

  clickTabs(category){
    getProducts(category)
    .then (data => this.setState(
      {products: data}
    ));
  }

  clickProduct(product) {
    const arrayOrder = this.state.orders.concat(product);

    this.setState({ orders: arrayOrder});
  }

  render() {
    return (
      <div className="d-flex bd-highlight" id="waiter">
        <Menu clickTabs = {this.clickTabs} products = {this.state.products} clickProduct = {this.clickProduct}/>
        <OrderTable orderProduct = {this.state.orders} />
      </div>
    );
  }
}


export default Waiter;
