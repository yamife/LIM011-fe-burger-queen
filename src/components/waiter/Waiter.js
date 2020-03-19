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
    //const arrayOrder = this.state.orders.concat(product);
    //this.setState((state) => ({ orders: state.orders.concat(product), clickAccount: state.clickAccount + 1}));
    //this.setState({orders: arrayOrder, clickAccount: arrayOrder.length })
    const newObjet = {
      id: product.id,
      nameProduct: product.nameProduct,
      price: product.price,
      quantity: 1,
      total: product.price,
    }
    //const click = true;
    const arrayOrder = this.state.orders.concat(newObjet);
    const filterProduct = this.state.orders.filter((element)=> element.id === newObjet.id);

    const mapProducts = this.state.orders.map((element) => {
      let objectProduct = element;
      if(element.id === newObjet.id) {
        const contador = objectProduct.quantity +=1;
        objectProduct.total = contador * objectProduct.price;
      }
      objectProduct.total = objectProduct.quantity * objectProduct.price;
      return objectProduct;
    });

    // let contador = 0;
    //this.setState((state) => ({ orders: state.orders.concat(product), clickAccount: state.clickAccount + 1}));
    this.setState(filterProduct.length === 0?{orders: arrayOrder}: {orders: mapProducts})
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
