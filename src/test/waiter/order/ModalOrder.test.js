import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ModalOrder from '../../../components/waiter/order/ModalOrder';


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



it('Debería retornar el componente ModalOrder como un valor verdadero de acuerdo al id proporcionado.', () => {
    const { getByTestId } = render(<ModalOrder orders={orders} totalPay={10} />);
    const component = getByTestId('modal');

    expect(component).toBeTruthy();
});


it('Deberia renderizar el precio total de las órdenes.', () => {
    const { getByTestId } = render(<ModalOrder orders={orders} totalPay={10}/>);

    expect(getByTestId('total-pay-gg')).toHaveTextContent('S/. 10');
});
