import React from 'react';
import WaiterData from './WaiterData';
import OrderList from './OrderList';


class RegisterOrder extends React.Component {

  render() {
    const orders = this.props.orderProduct;
    const clickButtonAdd = this.props.clickButtonAdd;
    const clickButtonSubtract = this.props.clickButtonSubtract;
    const clickButtonDelete = this.props.clickButtonDelete;
    const totalPay = this.props.totalPay;
    const clickSend = this.props.clickSend;

    return (
      <section data-testid="register-order">
        <WaiterData />
        <OrderList orders={orders} clickButtonAdd={clickButtonAdd} clickButtonSubtract={clickButtonSubtract} clickButtonDelete={clickButtonDelete} totalPay={totalPay} clickSend = {clickSend}/>
      </section>
    );
  }

}


export default RegisterOrder;
