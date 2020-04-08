import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import OrderList from '../../../components/waiter/order/OrderList';


afterEach(cleanup);


const orders = [{
    id: 'order1',
    nameProduct: 'Café',
    price: 5,
    quantity: 1,
    subTotal: 5,
}, {
    id: 'order2',
    nameProduct: 'Agua',
    price: 5,
    quantity: 1,
    subTotal: 5,
}];



it('Debería retornar el componente OrderList como un valor verdadero de acuerdo al id proporcionado.', () => {
    const { getByTestId } = render(<OrderList orders={orders} totalPay={10} />);
    const component = getByTestId('order-list');

    expect(component).toBeTruthy();
});


it('Deberia renderizar el precio total de las órdenes.', () => {
    const { getByTestId } = render(<OrderList orders={orders} totalPay={10}/>);

    expect(getByTestId('total-pay')).toHaveTextContent('S/. 10');
});


it('Deberia ejecutarse el evento onClick del botón "Enviar".', () => {
    const clickSend = jest.fn();

    const { getByTestId } = render(<OrderList orders={orders} totalPay={10} clickSend={clickSend} />);

    fireEvent.click(getByTestId('button-send'));

    expect(clickSend).toHaveBeenCalled();
});