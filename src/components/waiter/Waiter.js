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
    this.clickButtonAdd = this.clickButtonAdd.bind(this);
    this.clickButtonSubtrack = this.clickButtonSubtrack.bind(this);
    this.clickButtonDelete = this.clickButtonDelete.bind(this);
  }

  clickTabs(category) {
    getProducts(category)
      .then(data => this.setState(
        { products: data }
      ));
  }

  clickProduct(product) {
    const findProduct = this.state.orders.find((element) => element.id === product.id);

    if (findProduct) {
      const mapProducts = this.state.orders.map((order) => {
        if (order.id === product.id) {
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

      this.setState({ orders: arrayOrder });
    }
  }

  clickButtonAdd(idOrder) {
    const findOrder = this.state.orders.find(order => order.id === idOrder);

    if (findOrder) {
      const mapOrders = this.state.orders.map((order) => {
        if (order.id === idOrder) {
          const counter = order.quantity += 1;

          order.total = counter * order.price;
        }

      order.total = order.quantity * order.price;

      return order;
      });

    this.setState({ orders: mapOrders });
    }
  }


  clickButtonSubtrack(idOrder) {

    const findProduct = this.state.orders.find((element)=> element.id === idOrder);

    if(findProduct.quantity >= 1){
      const mapProducts = this.state.orders.map((order) => {
        if(order.id === idOrder) {
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

  clickButtonDelete(idOrder) {
    const orders = this.state.orders;

    const findProduct = orders.find((element)=> element.id === idOrder);

    const position = orders.findIndex((element)=> element.id === findProduct.id);

    orders.splice(position, 1);

    this.setState({ orders: orders });
  }

  render() {
    return (
      <div className="d-flex bd-highlight" id="waiter">
        <Menu clickTabs={this.clickTabs} products={this.state.products} clickProduct={this.clickProduct} />
        <OrderList orderProduct={this.state.orders} clickButtonAdd={this.clickButtonAdd} clickButtonSubtrack={this.clickButtonSubtrack} clickButtonDelete={this.clickButtonDelete} />
      </div>
    );
  }
}


export default Waiter;
