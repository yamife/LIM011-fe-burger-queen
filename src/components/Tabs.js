import React from 'react';
// import db from '../firebase/controller';
import { getProducts } from '../firebase/firestore';
// import itemMenu from './Menu';

class Tabs extends React.Component {

  constructor() {
    super();
    this.state = {arr: []};
    this.clickTabs = this.clickTabs.bind(this);
  }

  clickTabs(category) {
    getProducts(category)
    .then(data => console.log(data));
  }

  render() {

    return (
      // <ul className="nav nav-pills">
      //     <li className="nav-item" onClick= {(e) => {this.clickTabs(e, 'breakfast')}}>
      //         <a className="nav-link active" href="./">Desayuno</a>
      //     </li>
      //     <li className="nav-item" onClick= {(e) => {this.clickTabs(e, 'burger')}}>
      //         <a className="nav-link" href="./">Hamburguesas</a>
      //     </li>
      //     <li className="nav-item" onClick= {(e) => {this.clickTabs(e, 'sideDish')}}>
      //         <a className="nav-link" href="./">Acompañamiento</a>
      //     </li>
      //     <li className="nav-item" onClick= {(e) => {this.clickTabs(e, 'drinks')}}>
      //         <a className="nav-link" href="./">Bebidas</a>
      //     </li>
      // </ul>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-success" onClick = {() => {this.clickTabs('breakfast')}}>Desayuno</button>
        <button type="button" class="btn btn-warning" onClick = {() => {this.clickTabs('burger')}}>Hamburguesas</button>
        <button type="button" class="btn btn-danger" onClick = {() => {this.clickTabs('sideDish')}}>Acompañamiento</button>
        <button type="button" class="btn btn-info" onClick = {() => {this.clickTabs('drinks')}}>Bebidas</button>
      </div>
    );
  }
}

export default Tabs;
