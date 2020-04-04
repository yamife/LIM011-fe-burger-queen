import React from 'react';
import { render } from '@testing-library/react';
import Header from './../components/Header';


it('Debería mostrar el logo y el navegador en el header de la app', () => {
  const { getByTestId } = render(<Header/>);
  const element = getByTestId('logo');
  expect(element).toBeTruthy();
});
