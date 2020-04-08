import React from 'react';
import ItemOrder from './ItemOrder';


class OrderList extends React.Component {

  render() {
    const arrayOrder = this.props.orders;
    const clickButtonAdd = this.props.clickButtonAdd;
    const clickButtonSubtract = this.props.clickButtonSubtract;
    const clickButtonDelete = this.props.clickButtonDelete;
    const totalPay = this.props.totalPay;
    const clickSend = this.props.clickSend;

    return (
      <section data-testid="order-list" className="p-2 flex-fill bd-highlight">
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
                  arrayOrder.map((order) => <ItemOrder key={order.id} value={order} clickButtonAdd={clickButtonAdd}  clickButtonSubtract = { clickButtonSubtract } clickButtonDelete = {clickButtonDelete}/>)
                }
              </tbody>
            </table>
            <div>
              <h2 data-testid="total-pay">Total S/. {totalPay}</h2>
              <button data-testid="button-send" className="btn btn-info" onClick = {() => clickSend()} ><h5>Enviar</h5></button>
            </div>
        </div>
      </section>
    );
  }
}


export default OrderList;

