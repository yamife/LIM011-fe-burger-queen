import React from 'react';
import ItemOrder from './ItemOrder';


class OrderTable extends React.Component {

    render() {
        const arrayOrder = this.props.orderProduct;
        let counter = 1;

        return (
            <section className="p-2 flex-fill bd-highlight">
                <h1>Orden</h1>
                <div className="container">
                    <ul id="item-list">
                        {
                          arrayOrder.map((order) => {
                            if(arrayOrder.indexOf(order) > 0) {
                                counter += 1;

                                return <ItemOrder key={order.id} value={order} counter={counter}/>;
                            }

                            return <ItemOrder key={order.id} value={order} counter={counter}/>;
                          })
                        }
                    </ul>
                </div>
            </section>
        );
    }
}


export default OrderTable; 
