import React from 'react';
import PropTypes from 'prop-types';
import ItemOrder from './ItemOrder';


const OrderList = ({ clickButtonAdd, clickButtonSubtract, clickButtonDelete, clickSend, orders, totalPay }) => {

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
              orders.map((order) => <ItemOrder key={order.id} value={order} clickButtonAdd={clickButtonAdd} clickButtonSubtract={clickButtonSubtract} clickButtonDelete={clickButtonDelete} />)
            }
          </tbody>
        </table>
        <div>
          <h2 data-testid="total-pay">Total S/. {totalPay}</h2>
          <button data-testid="button-send" className="btn btn-info" onClick={clickSend} ><h5>Enviar</h5></button>
        </div>
      </div>
    </section>
  );
}


OrderList.propTypes = {
  clickButtonAdd: PropTypes.func.isRequired,
  clickButtonSubtract: PropTypes.func.isRequired,
  clickButtonDelete: PropTypes.func.isRequired,
  clickSend: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired,
  totalPay: PropTypes.number.isRequired
};


export default OrderList;

