import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RegisterOrder from '../../../components/waiter/order/RegisterOrder';


afterEach(cleanup);


const orderProduct = [{
    id: 'order1',
    nameProduct: 'Hamburguesa de pollo + Queso',
    price: 11,
    quantity: 1,
    subTotal: 11,
}, {
    id: 'order2',
    nameProduct: 'Café',
    price: 5,
    quantity: 1,
    subTotal: 5,
}];


it('Debería retornar el componente RegisterOrder como un valor verdadero de acuerdo al id proporcionado.', () => {
    const { getByTestId } = render(<RegisterOrder orderProduct={orderProduct} totalPay={16} />);
    
    const component = getByTestId('register-order');

    expect(component).toBeTruthy();
});