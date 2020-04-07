import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ItemMenu from '../../../components/waiter/menu/ItemMenu';


afterEach(cleanup);


const product = {
  nameProduct: 'Café',
  price: 5,
};


it('Debería retornar el componente ItemMenu como un valor verdadero de acuerdo al id proporcionado.', () => {
  const { getByTestId } = render(<ul><ItemMenu value={product} key={1}/></ul>);
  const component = getByTestId('item-menu');
  
  expect(component).toBeTruthy();
});


// toHaveTextContent(): Permite verificar si el elemento dado tiene un contenido de texto o no.


it('Deberia renderizar el componente botón con los datos de nombre y precio del producto.', () => {
  const { getByTestId } = render(<ItemMenu value={product} key={1}/>);

  expect(getByTestId('button')).toHaveTextContent('Café S/. 5');
});


it('Deberia ejecutarse el evento onClick del elemento button.', () => {
  const clickProduct = jest.fn();

  const { getByTestId } = render(<ItemMenu value={product} clickProduct={clickProduct} key={1}/>);

  fireEvent.click(getByTestId('button'));

  expect(clickProduct).toHaveBeenCalled();
});
