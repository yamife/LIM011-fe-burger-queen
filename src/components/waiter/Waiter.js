import React from 'react';
import getProducts from '../../firebase/firestore';
import Menu from './Menu';
import OrderList from './OrderList';


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

    const pos = this.state.orders.findIndex(element => element.id === product.id);

    if(pos !== -1) {

      console.log('producto ya está en la lista', pos);

      const element = this.state.orders.find(element => element.id === product.id)

      const order = {
        id: product.id,
        nameProduct: product.nameProduct,
        price: product.price,
        counter: element.counter += 1,
      }

      this.state.orders.splice(pos, 1, order);

      this.setState({ orders: this.state.orders});
    }
    else {

      const order = {
        id: product.id,
        nameProduct: product.nameProduct,
        price: product.price,
        counter: 1,
      }

      const arrayOrder = this.state.orders.concat(order);

      this.setState({ orders: arrayOrder});
    }
  }

  render() {
    return (
      <div className="d-flex bd-highlight" id="waiter">
        <Menu clickTabs = {this.clickTabs} products = {this.state.products} clickProduct = {this.clickProduct}/>
        <OrderList orderProduct = {this.state.orders} />
      </div>
    );
  }
}


export default Waiter;
