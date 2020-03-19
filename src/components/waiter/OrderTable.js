import React from 'react';
import ItemOrder from './ItemOrder';


class OrderTable extends React.Component {

  render() {
    const arrayOrder = this.props.orderProduct;
    console.log(arrayOrder);

    return (
      <section className="p-2 flex-fill bd-highlight">
        <h1>Orden</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope='col'>Cantidad</th>
                <th scope='col'>Producto</th>
                <th scope='col'>Precio</th>
                <th scope='col'>Total</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {
                arrayOrder.map((order, index) => <ItemOrder key={index} value={order} />)
              }
            </tbody>
            <tr>
                <th scope='col'></th>
                <th scope='col'></th>
                <th scope='col'><h2>Total</h2></th>
                <th scope='col'><h2>S/. xxx</h2></th>
                <th scope='col'><button className="btn btn-info"><h5>enviar</h5></button></th>
              </tr>

          </table>
        </div>
      </section>
    );
  }
}


export default OrderTable;
