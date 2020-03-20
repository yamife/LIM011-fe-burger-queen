import React from 'react';
import getProducts from '../../firebase/firestore';
import Menu from './Menu';
import OrderTable from './OrderTable';


class Waiter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { products: [], orders: [] };

    this.clickTabs = this.clickTabs.bind(this);
    this.clickProduct = this.clickProduct.bind(this);
  }

  clickTabs(category){
    getProducts(category)
      .then(data => this.setState(
        { products: data }
      ));
  }

  clickItem(product, price){
    console.log(product, price)
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

      this.setState({orders: mapProducts});
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
