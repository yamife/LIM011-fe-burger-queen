import React from 'react';
import { render, fireEvent, getNodeText } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ItemMenu from '../../components/waiter/menu/ItemMenu';


it('Deberia mostrar boton con el nombre del producto y precio', () => {
    const fnclickProduct = jest.fn();
    const product = {
        nameProduct: 'Cafe',
        price: 5,
    };

    const producto = render( <ItemMenu value={product} clickProduct = { fnclickProduct }/> );

    const btnProducto = producto.getByTestId('item');
    const listaDeNodos = producto.getAllByTestId('item');

    act(() => {
      fireEvent.click(btnProducto);
    })

    expect(fnclickProduct).toHaveBeenCalled();
    expect(getNodeText(listaDeNodos[0])).toBe('Cafe S/. 5');
});
