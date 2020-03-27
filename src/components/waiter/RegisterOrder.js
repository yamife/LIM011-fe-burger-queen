import React from 'react';
import RegisterClient from './RegisterClient';
import OrderList from './OrderList';

class RegisterOrder extends React.Component {

  render() {
    const orderProduct = this.props.orderProduct;
    const clickButtonAdd = this.props.clickButtonAdd;
    const clickButtonSubtrack = this.props.clickButtonSubtrack;
    const clickButtonDelete = this.props.clickButtonDelete;
    return (
      <section>
        <RegisterClient />
        <OrderList orderProduct={orderProduct} clickButtonAdd={clickButtonAdd} clickButtonSubtrack={clickButtonSubtrack} clickButtonDelete={clickButtonDelete} />
      </section>
    );
  }

}

export default RegisterOrder;
