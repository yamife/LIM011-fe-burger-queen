import React from 'react';
import WaiterData from './WaiterData';
import OrderList from './OrderList';


class RegisterOrder extends React.Component {

  render() {
    const orderProduct = this.props.orderProduct;
    const clickButtonAdd = this.props.clickButtonAdd;
    const clickButtonSubtract = this.props.clickButtonSubtract;
    const clickButtonDelete = this.props.clickButtonDelete;
    const totalPay = this.props.totalPay;
    const clickSend = this.props.clickSend;

    return (
      <section>
        <WaiterData />
        <OrderList orderProduct={orderProduct} clickButtonAdd={clickButtonAdd} clickButtonSubtract={clickButtonSubtract} clickButtonDelete={clickButtonDelete} totalPay={totalPay} clickSend = {clickSend}/>
      </section>
    );
  }

}


export default RegisterOrder;
