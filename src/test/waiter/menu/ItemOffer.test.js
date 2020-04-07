import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ItemOffer from '../../../components/waiter/menu/ItemOffer';


afterEach(cleanup);


const offer = {
  nameOffer: 'Queso',
  price: 1,
};


it('Debería retornar el componente ItemOffer como un valor verdadero de acuerdo al id proporcionado.', () => {
  const { getByTestId } = render(<ul><ItemOffer value={offer} key={1}/></ul>);
  const component = getByTestId('item-offer');
  
  expect(component).toBeTruthy();
});


it('Deberia renderizar el componente botón con los datos de nombre y precio de la oferta.', () => {
  const { getByTestId } = render(<ItemOffer value={offer} key={1}/>);

  expect(getByTestId('button')).toHaveTextContent('Queso S/. 1');
});


it('Deberia ejecutarse el evento onClick del elemento button.', () => {
  const clickOffer = jest.fn();

  const { getByTestId } = render(<ItemOffer value={offer} clickOffer={clickOffer} key={1}/>);

  fireEvent.click(getByTestId('button'));

  expect(clickOffer).toHaveBeenCalled();
});
