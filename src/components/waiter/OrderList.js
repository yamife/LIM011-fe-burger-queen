import React from 'react';
import ItemOrder from './ItemOrder';


class OrderTable extends React.Component {

 /*  constructor(){
    super();
    this.props.orderProduct = {counter: 8};
    this.add = this.add.bind(this);
  }
  add(){
    console.log('hola');
    const newCounter = this.state.counter +1;
    this.setState({counter: newCounter})
  } */

  render() {
    const arrayOrder = this.props.orderProduct;
    const clickItem = this.props.clickItem;
    const clickDelete = this.props.clickDelete;
    //const clickAdd = this.props.clickAdd;
    console.log(arrayOrder);

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
                arrayOrder.map((order) => <ItemOrder key={order.id} value={order} clickItem = {clickItem} clickDelete= {clickDelete}/>)
              }
              <tr>
                <td></td>
                <td></td>
                <td><h2>Total</h2></td>
                <td><h2>S/. </h2></td>
                <td><button className="btn btn-info"><h5>enviar</h5></button></td>
            </tr>
            </tbody>
          </table>
          {/* <div>
          <h1>HOLAA</h1>
          <p>{this.state.counter}</p><button onClick={this.add}>suma</button>
        </div> */}
        </div>
      </section>
    );
  }
}


export default OrderTable;
