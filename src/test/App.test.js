import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';


// toBeInTheDocument(): Permite afirmar si un elemento está presente en el 
// documento o no.


it('El componente App se encuentra renderizado en el documento.', () => {
  const { getByTestId } = render(<App/>);
  const component = getByTestId('app');

  expect(component).toBeInTheDocument();
});
