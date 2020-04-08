import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Menu from '../../../components/waiter/menu/Menu';


afterEach(cleanup);


const products = [{
    id: 'product1',
    nameProduct: 'Café',
    price: 5,
  }, {
    id: 'product2',
    nameProduct: 'Agua',
    price: 5,
  }
];

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


it('Debería retornar el componente Menu como un valor verdadero de acuerdo al id proporcionado.', () => {
    const { getByTestId } = render(<Menu products={products} offers={offers}/>);
    const component = getByTestId('menu');
    
    expect(component).toBeTruthy();
});
