import React from 'react';
// import db from '../firebase/controller';
import { getProducts } from '../firebase/firestore';
import { ItemMenu } from '../components/Menu';
import Menu from '../components/Menu.js';

class Tabs extends React.Component {
    
    constructor(props){
      super(props);
      this.clickTabs = this.clickTabs.bind(this);  
    }


    clickTabs(e, name) {
        e.preventDefault();
        console.log('entras aqui', name);
        getProducts(name).then((docs) => {
            docs.forEach((product) => {
                ItemMenu(product.data().nameProduct);
            });
        }).catch(error => console.log(error));
    }  


    render() {

        return (
            <ul className="nav nav-pills">
                <li className="nav-item" onClick= {(e) => {this.clickTabs(e, 'breakfast')}}>
                    <a className="nav-link active" href="./">Desayuno</a>
                    <Menu></Menu>
                </li>
                <li className="nav-item" onClick= {(e) => {this.clickTabs(e, 'burger')}}>
                    <a className="nav-link" href="./">Hamburguesas</a>
                </li>
                <li className="nav-item" onClick= {(e) => {this.clickTabs(e, 'sideDish')}}>
                    <a className="nav-link" href="./">Acompañamiento</a>
                </li>
                <li className="nav-item" onClick= {(e) => {this.clickTabs(e, 'drinks')}}>
                    <a className="nav-link" href="./">Bebidas</a>
                </li>
            </ul>
        );
    }
}

export default Tabs;
