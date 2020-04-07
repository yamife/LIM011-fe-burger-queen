import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ItemOrder from '../../../components/waiter/order/ItemOrder';


afterEach(cleanup);


const order = {
    nameProduct: 'Café',
    price: 5,
    quantity: 1,
    subTotal: 5,
};


it('Debería retornar el componente ItemOrder como un valor verdadero de acuerdo al id proporcionado.', () => {
    const { getByTestId } = render(<table><tbody><ItemOrder value={order} /></tbody></table>);
    const component = getByTestId('item-table-order');

    expect(component).toBeTruthy();
});


it('Deberia renderizar la cantidad de la orden.', () => {
    const { getByTestId } = render(<table><tbody><ItemOrder value={order} /></tbody></table>);

    expect(getByTestId('item1')).toHaveTextContent(1);
});


it('Deberia renderizar el nombre del producto ordenado.', () => {
    const { getByTestId } = render(<table><tbody><ItemOrder value={order} /></tbody></table>);

    expect(getByTestId('item2')).toHaveTextContent('Café');
});


it('Deberia renderizar el precio del producto.', () => {
    const { getByTestId } = render(<table><tbody><ItemOrder value={order} /></tbody></table>);

    expect(getByTestId('item3')).toHaveTextContent('S/.5');
});


it('Deberia renderizar el sub total de la orden.', () => {
    const { getByTestId } = render(<table><tbody><ItemOrder value={order} /></tbody></table>);

    expect(getByTestId('item4')).toHaveTextContent('S/.5');
});


it('Deberia ejecutarse el evento onClick del elemento button-add.', () => {
    const clickButtonAdd = jest.fn();

    const { getByTestId } = render(<table><tbody><ItemOrder value={order} clickButtonAdd={clickButtonAdd} /></tbody></table>);

    fireEvent.click(getByTestId('button-add'));

    expect(clickButtonAdd).toHaveBeenCalled();
});


it('Deberia ejecutarse el evento onClick del elemento button-subtract.', () => {
    const clickButtonSubtract = jest.fn();

    const { getByTestId } = render(<table><tbody><ItemOrder value={order} clickButtonSubtract={clickButtonSubtract} /></tbody></table>);

    fireEvent.click(getByTestId('button-subtract'));

    expect(clickButtonSubtract).toHaveBeenCalled();
});


it('Deberia ejecutarse el evento onClick del elemento button-delete.', () => {
    const clickButtonDelete = jest.fn();

    const { getByTestId } = render(<table><tbody><ItemOrder value={order} clickButtonDelete={clickButtonDelete} /></tbody></table>);

    fireEvent.click(getByTestId('button-delete'));

    expect(clickButtonDelete).toHaveBeenCalled();
});
