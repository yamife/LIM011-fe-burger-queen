import React from 'react';
import ItemOrder from './ItemOrder';


class OrderTable extends React.Component {

    render() {
        const arrayOrder = this.props.orderProduct;

        return (
            <section className="p-2 flex-fill bd-highlight">
                <h1>Orden</h1>
                <div className="container">
                    <ul id="item-list">
                        {
                            arrayOrder.map((order) => <ItemOrder key={order.id} value={order.name} />)
                        }
                    </ul>
                </div>
            </section>
        );
    }
}


export default OrderTable; 