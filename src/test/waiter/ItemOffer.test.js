import React from 'react';
import { render, fireEvent, getNodeText } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ItemOffer from '../../components/waiter/menu/ItemOffer';

it('Deberia mostrar boton con el nombre del producto y precio', () => {
    const fnclickOffer = jest.fn();
    const offer = {
        nameOffer: 'Huevo',
        price: 1,
    };

    const producto = render( <ItemOffer value={offer} clickOffer = { fnclickOffer }/> );

    const btnProducto = producto.getByTestId('itemOffer');
    const listaDeNodos = producto.getAllByTestId('itemOffer');

    act(() => {
      fireEvent.click(btnProducto);
    })

    expect(fnclickOffer).toHaveBeenCalled();
    expect(getNodeText(listaDeNodos[0])).toBe('Huevo S/. 1');
});
