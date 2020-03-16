import React from 'react';
import getProducts from '../../firebase/firestore';
import Menu from './Menu'
import Items from './Items';

class Waiter extends React.Component {
  constructor(props){
    super(props);
    this.state = { products: [] };
    this.clickTabs = this.clickTabs.bind(this);
  }
  clickTabs(category){
    getProducts(category)
    .then (data => this.setState(
      {products: data}
    ));
  }
  render() {
    return (
      <div className="d-flex bd-highlight">
        <div className="p-2 flex-fill bd-highlight">
          <div>
           <Menu clickTabs = {this.clickTabs}/>
          </div>
          <div>
            <Items products ={this.state.products} />
          </div>
        </div>
        <div className="p-2 flex-fill bd-highlight">
          <h1>Orden</h1>
        </div>
      </div>
    );
  }
}

export default Waiter;
