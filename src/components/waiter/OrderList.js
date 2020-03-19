import React from 'react';
import ItemOrder from './ItemOrder';


class OrderList extends React.Component {

    render() {
        const arrayOrder = this.props.orderProduct;
        console.log(arrayOrder);

        return (
            <section className="p-2 flex-fill bd-highlight">
                <h1>Orden</h1>
                <div className="container">
                    <ul id="item-list">
                        {   
                          arrayOrder.map((order) => {
                              console.log(order);

                            return <ItemOrder key={order.id} value={order} counter={order.counter}/>;
                          })
                        }
                    </ul>
                </div>
            </section>
        );
    }
}


export default OrderList; 
