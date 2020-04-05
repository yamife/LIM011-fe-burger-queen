import React from 'react';
import { render } from '@testing-library/react';
import Waiter from '../../components/waiter/Waiter';


it('Debería retornar el componente Waiter como un valor verdadero de acuerdo al id proporcionado.', () => {
  const { getByTestId } = render(<Waiter />);
  const component = getByTestId('waiter');

  expect(component).toBeTruthy();
});
