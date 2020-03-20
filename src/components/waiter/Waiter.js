import React from 'react';
import getProducts from '../../firebase/firestore';
import Menu from './Menu';
import OrderList from './OrderList';


class Waiter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { products: [], orders: [] };

    this.clickTabs = this.clickTabs.bind(this);
    this.clickProduct = this.clickProduct.bind(this);
    this.clickButtonSubtrack = this.clickButtonSubtrack.bind(this);
  }

  clickTabs(category) {
    getProducts(category)
      .then(data => this.setState(
        { products: data }
      ));
  }

  clickProduct(product) {
    const findProduct = this.state.orders.find((element)=> element.id === product.id);

    if(findProduct){
      const mapProducts = this.state.orders.map((order) => {
        if(order.id === product.id) {
          const counter = order.quantity += 1;

          order.total = counter * order.price;
        }

        order.total = order.quantity * order.price;

        return order;
      });

      this.setState({ orders: mapProducts });
    }
    else {
      const newOrder = {
        id: product.id,
        nameProduct: product.nameProduct,
        price: product.price,
        quantity: 1,
        total: product.price,
      }

      const arrayOrder = this.state.orders.concat(newOrder);

      this.setState({orders: arrayOrder});
    }
  }

  clickButtonSubtrack(product) {
    console.log(product);

    const findProduct = this.state.orders.find((element)=> element.id === product.id);

    if(findProduct.quantity >= 1){
      const mapProducts = this.state.orders.map((order) => {
        if(order.id === product.id) {
          const counter = order.quantity -= 1;

          order.total = counter * order.price;
        }

        order.total = order.quantity * order.price;

        return order;
      });

      this.setState({ orders: mapProducts });
    }

    if(findProduct.quantity === 0){
      const orders = this.state.orders;

      const position = orders.findIndex((element)=> element.id === findProduct.id);

      orders.splice(position, 1);

      this.setState({ orders: orders });
    }

  }

  render() {
    return (
      <div className="d-flex bd-highlight" id="waiter">
        <Menu clickTabs = { this.clickTabs } products = { this.state.products } clickProduct = { this.clickProduct }/>
        <OrderList orderProduct = { this.state.orders } clickButtonSubtrack = { this.clickButtonSubtrack }/>
      </div>
    );
  }
}


export default Waiter;
