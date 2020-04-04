import React from 'react';
import { getProducts, getOffers, addOrder } from '../../firebase/firestore';
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

    this.state = { products: [], orders: [], offers: [], productOffer: {}, total: 0, show: false, client: '', table: 1 };

    this.clickTabs = this.clickTabs.bind(this);
    this.clickProduct = this.clickProduct.bind(this);
    this.clickButtonAdd = this.clickButtonAdd.bind(this);
    this.clickButtonSubtrack = this.clickButtonSubtrack.bind(this);
    this.clickButtonDelete = this.clickButtonDelete.bind(this);
    this.clickOffer = this.clickOffer.bind(this);
    this.clickSend = this.clickSend.bind(this);
    this.clickSaveOrderFirestore = this.clickSaveOrderFirestore.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChangeClient = this.handleChangeClient.bind(this);
    this.handleChangeTable = this.handleChangeTable.bind(this);
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

  handleCloseModal() {
    this.setState({ show: false });
  }

  clickSend() {
    if(this.state.orders.length === 0){
      alert('No existe registros de pedidos para enviar');
    }
    else {
      this.setState({ show: true});
    }
  }

  handleChangeClient(event) {
    this.setState({ client: event.target.value });
  }

  handleChangeTable(event) {
    this.setState({ table: event.target.value });
  }

  clickSaveOrderFirestore() {
    const orderData = {
      waiter: 'John Cena',
      client: this.state.client,
      date: new Date(),
      order: this.state.orders,
      table: this.state.table,
      totalPay: this.state.total,
      state: false,
    }

    addOrder(orderData)
      .then((e) => {
        console.log('Hola Lilian', e);
      })
      .catch((error) => {
        console.log('Ayudanos Fares', error);
      });

    console.log('hola Yamira');

  }

  render() {
    return (
      <main className="d-flex bd-highlight" data-testid="waiter">
        <Menu clickTabs={this.clickTabs} products={this.state.products} clickProduct={this.clickProduct} offers={this.state.offers} productOffer={this.state.productOffer} clickOffer={this.clickOffer} />
        <RegisterOrder orderProduct={this.state.orders} clickButtonAdd={this.clickButtonAdd} clickButtonSubtrack={this.clickButtonSubtrack} clickButtonDelete={this.clickButtonDelete} totalPay={this.state.total} clickSend = {this.clickSend}/>
        {
          <ModalOrder show = {this.state.show} handleClose={this.handleCloseModal} totalPay={this.state.total} orderProduct={this.state.orders}
          clickSaveOrderFirestore = {this.clickSaveOrderFirestore} client = {this.state.client} handleChangeClient = {this.handleChangeClient} table = {this.state.table} handleChangeTable = {this.handleChangeTable}/>
        }
      </main>

    );
  }
}


export default Waiter;
