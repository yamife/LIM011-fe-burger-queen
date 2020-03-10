import React from 'react';
// import db from '../firebase/controller';
import {getProducts} from '../firebase/firestore';

class Tabs extends React.Component {
    
    constructor(props){
      super(props);
      // this.getData = this.getData.bind(this);
      this.clickTabs = this.clickTabs.bind(this);  
    }

    // getData(name){
    //     getProducts(name).then((snapShots) => {
    //         const array = [];
    //         snapShots.forEach((e) => {
    //             array.push({
    //                 Producto: Element.data().nameProuct,
    //                 Precio: Element.data().price,
    //             })
    //         })
    //         return array;
    //     })
    // }

    clickTabs (e,name) {
        e.preventDefault();
        console.log('entras aqui', name);
        getProducts(name).then((snapShots) => {
            const array = [];
            snapShots.forEach((e) => {
                array.push({
                    id: e.id,
                    category: e.data().category,
                    product: e.data().nameProduct,
                    price: e.data().price,
                    type: (e.data().type) ? e.data().type : null,
                })
            })
            console.log(array);
        })
    }  

    render() {

        return (
            <ul className="nav nav-pills">
                <li className="nav-item" onClick= {(e) => {this.clickTabs(e, 'breakfast')}}>
                    <a className="nav-link active" href="./">Desayuno</a>
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
