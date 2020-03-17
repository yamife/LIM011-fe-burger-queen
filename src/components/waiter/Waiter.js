import React from 'react';
import getProducts from '../../firebase/firestore';
import MenuTabs from './MenuTabs';
import MenuList from './MenuList';
import OrderTable from './OrderTable';


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
    console.log(product.name, product.price, product.id);

    const arrayOrder = this.state.orders.concat(product);

    this.setState({ orders: arrayOrder});
  }

  render() {
    return (
      <div className="d-flex bd-highlight">
        <div className="p-2 flex-fill bd-highlight">
           <MenuTabs clickTabs = {this.clickTabs}/>
          <div>
            <MenuList products = {this.state.products} clickProduct = {this.clickProduct}/>
          </div>
        </div>
        <div className="p-2 flex-fill bd-highlight">
          <h1>Orden</h1>
          <OrderTable orderProduct = {this.state.orders} />
        </div>
      </div>
    );
  }
}


export default Waiter;
