import React from 'react';
import PropTypes from 'prop-types';
import WaiterData from './WaiterData';
import OrderList from './OrderList';


const RegisterOrder = ({ clickButtonAdd, clickButtonSubtract, clickButtonDelete, clickSend, orders, totalPay }) => {

    return (
      <section data-testid="register-order">
        <WaiterData />
        <OrderList orders={orders} clickButtonAdd={clickButtonAdd} clickButtonSubtract={clickButtonSubtract} clickButtonDelete={clickButtonDelete} totalPay={totalPay} clickSend = {clickSend}/>
      </section>
    );

}


RegisterOrder.propTypes = {
  clickButtonAdd: PropTypes.func.isRequired,
  clickButtonSubtract: PropTypes.func.isRequired,
  clickButtonDelete: PropTypes.func.isRequired,
  clickSend: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired,
  totalPay: PropTypes.number.isRequired
};


export default RegisterOrder;
