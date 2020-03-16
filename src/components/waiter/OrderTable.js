import React from 'react';


class OrderTable extends React.Component {

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


export default OrderTable; 