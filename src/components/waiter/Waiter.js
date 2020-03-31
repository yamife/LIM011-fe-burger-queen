import React from 'react';
import { getProducts, getOffers } from '../../firebase/firestore';
import Menu from './Menu';
import RegisterOrder from './RegisterOrder';
import ModalOrder from './ModalOrder';


const createOrder = (product, offer, state) => {

  if (offer !== null) {
    const findProductOffer = state.find((element) => element.id === (product.id + offer.id));

    if (findProductOffer) {
      const mapProducts = state.map((order) => {
        const editedOrder = order;

        if (order.id === (product.id + offer.id)) {
          const counter = editedOrder.quantity += 1;

          editedOrder.subTotal = counter * order.price;
        }

        editedOrder.subTotal = order.quantity * order.price;

        return editedOrder;
      });

      return mapProducts;
    }

    const newOrder = {
      id: product.id + offer.id,
      nameProduct: product.nameProduct + ' + ' + offer.nameOffer,
      price: product.price + offer.price,
      quantity: 1,
      subTotal: product.price + offer.price,
    }

    const arrayOrder = state.concat(newOrder);

    return arrayOrder;
  }

  const findProduct = state.find((element) => element.id === product.id);

  if (findProduct) {

    const mapProducts = state.map((order) => {
      const editedOrder = order;

      if (order.id === product.id) {
        const counter = editedOrder.quantity += 1;

        editedOrder.subTotal = counter * order.price;
      }

      editedOrder.subTotal = order.quantity * order.price;

      return order;
    });

    return mapProducts;
  }

  const newOrder = {
    id: product.id,
    nameProduct: product.nameProduct,
    price: product.price,
    quantity: 1,
    subTotal: product.price,
  }

  const arrayOrder = state.concat(newOrder);

  return arrayOrder;
}

const totalPay = (orders) => {

  let totalPay = 0;
  orders.forEach((order => totalPay += order.subTotal));
  return totalPay;
}


class Waiter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { products: [], orders: [], offers: [], productOffer: {}, total: 0, show: false };

    this.clickTabs = this.clickTabs.bind(this);
    this.clickProduct = this.clickProduct.bind(this);
    this.clickButtonAdd = this.clickButtonAdd.bind(this);
    this.clickButtonSubtrack = this.clickButtonSubtrack.bind(this);
    this.clickButtonDelete = this.clickButtonDelete.bind(this);
    this.clickOffer = this.clickOffer.bind(this);
    this.clickSend = this.clickSend.bind(this);
    this.clickSaveOrderFirestore = this.clickSaveOrderFirestore.bind(this);
    this.handleClose = this.handleClose.bind(this);
    // this.handleShow = this.handleShow.bind(this);
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
      const listOrders = createOrder(product, null, this.state.orders);

      const totalPrice = totalPay(listOrders);

      this.setState({ orders: listOrders });
      this.setState({ total: totalPrice });
    }
  }

  clickOffer(productOffer, offer) {
    const listOrder = createOrder(productOffer, offer, this.state.orders);
    const totalPrice = totalPay(listOrder);

    this.setState({ orders: listOrder });
    this.setState({ total: totalPrice });
    this.setState({ offers: [] });
  }

  clickButtonAdd(product) {
    const arrayOrders = createOrder(product, null, this.state.orders);
    const totalPrice = totalPay(arrayOrders);

    this.setState({ orders: arrayOrders });
    this.setState({ total: totalPrice });
  }

  clickButtonSubtrack(product) {
    const findProduct = this.state.orders.find((element) => element.id === product.id);

    if (findProduct.quantity >= 1) {
      const mapProducts = this.state.orders.map((order) => {
        const editedOrder = order;

        if (order.id === product.id) {
          const counter = editedOrder.quantity -= 1;

          editedOrder.subTotal = counter * order.price;
        }

        editedOrder.subTotal = order.quantity * order.price;

        return order;
      });

      const totalPrice = totalPay(mapProducts);

      this.setState({ orders: mapProducts });
      this.setState({ total: totalPrice });
    }

    if (findProduct.quantity === 0) {
      const orders = this.state.orders;

      const position = orders.findIndex((element) => element.id === findProduct.id);

      orders.splice(position, 1);

      const totalPrice = totalPay(orders);

      this.setState({ orders: orders });
      this.setState({ total: totalPrice });
    }

  }

  clickButtonDelete(product) {
    const orders = this.state.orders;

    const findProduct = orders.find((element) => element.id === product.id);

    const position = orders.findIndex((element) => element.id === findProduct.id);

    orders.splice(position, 1);

    const totalPrice = totalPay(orders);

    this.setState({ orders: orders });
    this.setState({ total: totalPrice });
  }
  // Es posible eliminar porque apaga el modal y podria ser con una inicializacion
  handleClose() {
    this.setState({show: false});
  }
  // handleShow = () => this.setShow(true);

  clickSend() {

    if(this.state.orders.length === 0){
      alert('No existe registros de pedidos para enviar');
    }
    else {
      this.setState({ show: true});
    }
  }

  clickSaveOrderFirestore() {
    // const orderData = {
    //   client: 'Juan Perez',
    //   date: new Date(),
    //   order: this.state.orders,
    //   total: this.state.total,
    //   state: false,
    // }
    console.log('hola Yamira');

  }

  render() {
    return (
      <main className="d-flex bd-highlight" id="waiter">
        <Menu clickTabs={this.clickTabs} products={this.state.products} clickProduct={this.clickProduct} offers={this.state.offers} productOffer={this.state.productOffer} clickOffer={this.clickOffer} />
        <RegisterOrder orderProduct={this.state.orders} clickButtonAdd={this.clickButtonAdd} clickButtonSubtrack={this.clickButtonSubtrack} clickButtonDelete={this.clickButtonDelete} totalPay={this.state.total} clickSend = {this.clickSend}/>
        {
          (this.state.show) && <ModalOrder show = {this.state.show} handleClose={this.handleClose} totalPay={this.state.total} orderProduct={this.state.orders}
          clickSaveOrderFirestore = {this.clickSaveOrderFirestore}/>
        }
      </main>

    );
  }
}


export default Waiter;
