import React from 'react';


class OrderTable extends React.Component {
    /* constructor(props){
        super(props);
        this.showOrders = this.showOrders.bind(this);
    }

    showOrders(e) {
        this.props.orderProduct(e.target.value);
    }
    */

    render() {
        const arrayOrder = this.props.orderProduct;

        return (
            <section>
                <h5>Producto</h5>
                <h5>Precio</h5>
                <ul id="item-list">
                    {
                        arrayOrder.map((order) => <li key={order.id}>{order.name}</li> )
                    }
                </ul>
            </section>
        );
    }
}


export default OrderTable; 