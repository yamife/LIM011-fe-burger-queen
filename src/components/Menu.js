import React from 'react';
import { getProducts } from '../firebase/firestore';

export const ItemMenu = (product) => {
    return <li>{product}</li>;
}


class Menu extends React.Component {
    render() {

        return (
            <section>
                <h5>Producto</h5>
                <h5>Precio</h5>
                <ul id="item-list"></ul>
            </section>
        );
    }
}

export default Menu;