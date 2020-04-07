import React from 'react';
import { render, cleanup } from '@testing-library/react';
import WaiterData from '../../../components/waiter/order/WaiterData';


afterEach(cleanup);


it('Debería retornar el componente WaiterData como un valor verdadero de acuerdo al id proporcionado.', () => {
  const { getByTestId } = render(<WaiterData/>);
  const component = getByTestId('waiter-data');

  expect(component).toBeTruthy();
});
