import React from 'react';
import getProducts from '../../firebase/firestore';
<<<<<<< HEAD
import Menu from './Menu'
import Items from './Items';
=======
import Menu from './Menu';
import OrderTable from './OrderTable';

>>>>>>> fd0574830bb69875fdd28a4b13ea9aadff782a84

class Waiter extends React.Component {
  constructor(props){
    super(props);
<<<<<<< HEAD
    this.state = { products: [] };
    this.clickTabs = this.clickTabs.bind(this);
  }
=======

    this.state = { products: [], orders: [] };

    this.clickTabs = this.clickTabs.bind(this);
    this.clickProduct = this.clickProduct.bind(this);
  }

>>>>>>> fd0574830bb69875fdd28a4b13ea9aadff782a84
  clickTabs(category){
    getProducts(category)
    .then (data => this.setState(
      {products: data}
    ));
  }
<<<<<<< HEAD
  render() {
    return (
      <div className="d-flex bd-highlight">
        <div className="p-2 flex-fill bd-highlight">
          <div>
           <Menu clickTabs = {this.clickTabs}/>
          </div>
          <div>
            <Items products ={this.state.products} />
          </div>
        </div>
        <div className="p-2 flex-fill bd-highlight">
          <h1>Orden</h1>
        </div>
=======

  clickProduct(product) {
    const arrayOrder = this.state.orders.concat(product);

    this.setState({ orders: arrayOrder});
  }

  render() {
    return (
      <div className="d-flex bd-highlight" id="waiter">
        <Menu clickTabs = {this.clickTabs} products = {this.state.products} clickProduct = {this.clickProduct}/>
        <OrderTable orderProduct = {this.state.orders} />
>>>>>>> fd0574830bb69875fdd28a4b13ea9aadff782a84
      </div>
    );
  }
}

<<<<<<< HEAD
=======

>>>>>>> fd0574830bb69875fdd28a4b13ea9aadff782a84
export default Waiter;
