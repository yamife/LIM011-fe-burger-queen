import React from 'react'

class Order extends React.Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
            <th scope = 'col'>Cantidad</th>
              <th scope = 'col'>Producto</th>
              <th scope = 'col'>Precio</th>
            </tr>
          </thead>Huevo	-	1
          <tbody>
            <tr>
            <td ><button>+</button>1<button>-</button></td>
              <td >Hamburguesa</td>
              <td >S/. 20</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default Order;
