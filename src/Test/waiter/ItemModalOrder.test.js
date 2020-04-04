import React from 'react';
// import { unmountComponentAtNode } from "react-dom";
import { render, getNodeText } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';

import ItemModalOrder from '../../components/waiter/ItemModalOrder';

// let container = null;
// beforeEach(() => {
//   // configurar un elemento del DOM como objetivo del renderizado
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // limpieza al salir
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

it('Deberia los datos de la tabla', () => {
  const orderData = {
    waiter: 'John Cena',
    client: 'Yeni Diaz',
    date: '1 de abril 2020',
    order: [
      {
        id: '0112',
        nameProduct: 'cafe',
        price: 5,
        quantity: 1,
        subtotal: 5
      }],
    table: 1,
    totalPay: 5,
    state: false,
  }

  const order = render(
    <div>
      <table>
      <thead>
            <tr>
              <th>Cantidad</th>
              <th>Producto</th>
              <th>Precio c/u</th>
              <th>Sub Total</th>
            </tr>
          </thead>
      <tbody>
        <ItemModalOrder value={orderData}/>
      </tbody>
      </table>
    </div>);

const a = order.getByTestId('item1');
// expect(getNodeText(listaDeNodos[0])).toBe(undefined);

});
