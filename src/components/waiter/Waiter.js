import React from 'react';
import getProducts from '../../firebase/firestore';
import Menu from './Menu';
import OrderList from './OrderList';


class Waiter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { products: [], orders: [], counter: 0 };

    this.clickTabs = this.clickTabs.bind(this);
    this.clickProduct = this.clickProduct.bind(this);
    this.clickItem = this.clickItem.bind(this);
    this.clickDelete = this.clickDelete.bind(this);
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
  clickItem(id, operador) {
    const findOrder = this.state.orders.find(order => order.id === id);
    if (findOrder) {
      const mapOrders = this.state.orders.map((order) => {
        if (order.id === id) {
          switch (operador) {
            case 'suma': {
              const counter = order.quantity += 1;
              order.total = counter * order.price;
            };
              break;
            case 'resta': {
              const counter = order.quantity -= 1;
              order.total = counter * order.price;
            }
              break;
            default:
              break;
          }
        }
        order.total = order.quantity * order.price;
        return order;
      });
      this.setState({ orders: mapOrders });
    }
  }
  clickDelete(id) {
    const findOrder = this.state.orders.find(order => order.id === id);
    const posOrder = this.state.orders.indexOf(findOrder);
    const deleteOrder = this.state.orders.splice(posOrder, 1);
    console.log(deleteOrder);
    const newArrayOrder = [...this.state.orders];
    this.setState({orders: newArrayOrder});
  }
  // const posOrder = this.state.orders.indexOf(findOrder);
  // console.log(posOrder);
  // const newQuantity = this.state.orders[posOrder].quantity + 1;

  // const deleteOrder = this.state.orders.splice(posOrder,1);
  // console.log(delOrder);

  render() {
    return (
      <div className="d-flex bd-highlight" id="waiter">
        <Menu clickTabs={this.clickTabs} products={this.state.products} clickProduct={this.clickProduct} />
        <OrderList orderProduct={this.state.orders} clickItem={this.clickItem} clickDelete={this.clickDelete} />
        {/*         <div>
          <h1>HOLAA</h1>
          {this.counter}<button onClick = {this.clickAdd(this.counter)}>suma</button>
        </div> */}
      </div>
    );
  }
}

export default Waiter;
