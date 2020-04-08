import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MenuList from '../../../components/waiter/menu/MenuList';


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



it('Debería retornar el componente MenuList como un valor verdadero de acuerdo al id proporcionado.', () => {
    const { getByTestId } = render(<MenuList products={products} offers={offers}/>);
    const component = getByTestId('menu-list');
    
    expect(component).toBeTruthy();
});


it('Debería renderizar el componente MenuList sin la sección ofertas.', () => {
    const { getByTestId } = render(<MenuList products={products} offers={[]}/>);
    const component = getByTestId('menu-list');
    
    expect(component).toBeInTheDocument();
});


it('Debería renderizar el componente MenuList con la sección ofertas.', () => {
    const { getByTestId } = render(<MenuList products={products} offers={offers}/>);
    const component = getByTestId('menu-list');
    
    expect(component).toBeInTheDocument();
});
