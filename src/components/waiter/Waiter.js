import React from 'react';
import { getProducts, getOffers } from '../../firebase/firestore';
import Menu from './Menu';
import OrderList from './OrderList';


const createOrder = (product, offer, state) => {

  // console.log('Acáen función crear ordn gggg', product);
  // console.log('es mi estado', state);

  const findProduct = state.find((element) => element.id === product.id);

  if (findProduct) {
    if (findProduct.offer) {
      const mapProducts = state.map((order) => {
        order.nameProduct = product.nameProduct + ' + ' + offer.nameOffer;
        order.price = product.price + offer.price;

        if (order.id === product.id) {
          const counter = order.quantity += 1;

          order.total = counter * order.price;
        }

        order.total = order.quantity * order.price;

        return order;
      });

      return mapProducts;
    }

    const mapProducts = state.map((order) => {
      if (order.id === product.id) {
        const counter = order.quantity += 1;

        order.total = counter * order.price;
      }

      order.total = order.quantity * order.price;

      return order;
    });

    return mapProducts;
  }

  const newOrder = {
    id: product.id,
    nameProduct: (offer) ? product.nameProduct + ' + ' + offer.nameOffer : product.nameProduct,
    price: (offer) ?  product.price + offer.price : product.price,
    quantity: 1,
    total: (offer) ? product.price + offer.price : product.price,
  }

  const arrayOrder = state.concat(newOrder);

  // this.setState({ orders: arrayOrder });

  console.log(arrayOrder);

  return arrayOrder;
}



class Waiter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { products: [], orders: [], offers: [], productOffer: {} };

    this.clickTabs = this.clickTabs.bind(this);
    this.clickProduct = this.clickProduct.bind(this);

    this.clickButtonAdd = this.clickButtonAdd.bind(this);
    this.clickButtonSubtrack = this.clickButtonSubtrack.bind(this);
    this.clickButtonDelete = this.clickButtonDelete.bind(this);
    this.clickOffer = this.clickOffer.bind(this);

  }

  clickTabs(category) {
    getProducts(category)
      .then(data => this.setState(
        { products: data }
      ));
  }

  clickProduct(product) {
    if (product.offer) {
      getOffers(product.category)
        .then(data => this.setState(
          { offers: data }
        ));

      const newProductOffer = {
        id: product.id,
        nameProduct: product.nameProduct,
        price: product.price,
      };

      this.setState({ productOffer: newProductOffer });
    }
    else {
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
  }

  clickOffer(productOffer, offer) {
    console.log('Estamos en las ofertas', offer);
    console.log(productOffer);

    const listOrder = createOrder(productOffer, offer, this.state.orders);

    this.setState({ orders: listOrder });
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
    const findProduct = this.state.orders.find((element) => element.id === idOrder);

    if (findProduct.quantity >= 1) {
      const mapProducts = this.state.orders.map((order) => {
        if (order.id === idOrder) {
          const counter = order.quantity -= 1;

          order.total = counter * order.price;
        }

        order.total = order.quantity * order.price;

        return order;
      });

      this.setState({ orders: mapProducts });
    }

    if (findProduct.quantity === 0) {
      const orders = this.state.orders;

      const position = orders.findIndex((element) => element.id === findProduct.id);

      orders.splice(position, 1);

      this.setState({ orders: orders });
    }

  }

  clickButtonDelete(idOrder) {
    const orders = this.state.orders;

    const findProduct = orders.find((element) => element.id === idOrder);

    const position = orders.findIndex((element) => element.id === findProduct.id);

    orders.splice(position, 1);

    this.setState({ orders: orders });
  }

  render() {
    return (
      <main className="d-flex bd-highlight" id="waiter">
        <Menu clickTabs={this.clickTabs} products={this.state.products} clickProduct={this.clickProduct} offers={this.state.offers} productOffer={this.state.productOffer} clickOffer={this.clickOffer} />
        <OrderList orderProduct={this.state.orders} clickButtonAdd={this.clickButtonAdd} clickButtonSubtrack={this.clickButtonSubtrack} clickButtonDelete={this.clickButtonDelete} />
      </main>

    );
  }
}


export default Waiter;
