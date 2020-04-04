import React from 'react';
import { render } from '@testing-library/react';
import Waiter from '../../components/waiter/Waiter';

it('Renderiza los componentes Menu y Orden', () => {
  const { getByTestId } = render(<Waiter />);
  const element = getByTestId('waiter');
  expect(element).toBeTruthy();
});
