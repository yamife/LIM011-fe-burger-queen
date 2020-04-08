import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import OfferList from '../../../components/waiter/menu/OfferList';


afterEach(cleanup);


const offers = [{
  id: 'offer1',
  nameOffer: 'Huevo',
  price: 1,
}, {
  id: 'offer2',
  nameOffer: 'Queso',
  price: 1,
}
];



it('Debería retornar el componente OfferList como un valor verdadero de acuerdo al id proporcionado.', () => {
  const { getByTestId } = render(<OfferList offers={offers} />);
  const component = getByTestId('offer-list');

  expect(component).toBeTruthy();
});


it('Deberia ejecutarse el evento onClick del botón "Ninguno".', () => {
  const clickOffer = jest.fn();

  const offerList = render(<OfferList offers={offers} clickOffer={clickOffer} />);

  const button = offerList.getByTestId('button-none');

  fireEvent.click(button);

  expect(clickOffer).toHaveBeenCalled();
});
