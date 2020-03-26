import React from 'react';
import ItemOrder from './ItemOrder';


class OrderList extends React.Component {

  render() {
    const arrayOrder = this.props.orderProduct;
    const clickButtonAdd = this.props.clickButtonAdd;
    const clickButtonSubtrack = this.props.clickButtonSubtrack;
    const clickButtonDelete = this.props.clickButtonDelete;

    return (
      <section className="p-2 flex-fill bd-highlight">
        <div className="container">
          <h1>Registro de Pedidos</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope='col'>Cantidad</th>
                  <th scope='col'>Producto</th>
                  <th scope='col'>Precio</th>
                  <th scope='col'>Sub Total</th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                {
                  arrayOrder.map((order) => <ItemOrder key={order.id} value={order} clickButtonAdd={clickButtonAdd}  clickButtonSubtrack = { clickButtonSubtrack } clickButtonDelete = {clickButtonDelete}/>)
                }
                <tr>
                  <td></td>
                  <td></td>
                  <td><h2>Total</h2></td>
                  <td><h2>S/. </h2></td>
                  <td><button className="btn btn-info"><h5>Enviar</h5></button></td>
                </tr>
              </tbody>
            </table>
        </div>
      </section>
    );
  }
}


export default OrderList;

