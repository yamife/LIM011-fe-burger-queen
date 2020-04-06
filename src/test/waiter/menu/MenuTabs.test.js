import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import MenuTabs from '../../../components/waiter/menu/MenuTabs';


afterEach(cleanup);


// jest.fn(implementation): Devuelve una nueva función simulada no utilizada. 
// Opcionalmente toma una implementación simulada.


it('Debería retornar el componente MenuTabs como un valor verdadero de acuerdo al id proporcionado.', () => {
  const clickTabs = jest.fn;

  const { getByTestId } = render(<MenuTabs clickTabs={ clickTabs } />);

  const component = getByTestId('menu-tabs');

  expect(component).toBeTruthy();
});


// fireEvent[eventName](node: HTMLElement, eventProperties: Object): Ejecuta un evento 
// del DOM. Establece propiedades determinadas del evento.


it('Debería ejecutarse la función clickTabs al dar click al botón Desayuno.', () => {
  const clickTabs = jest.fn;

  const { getByTestId } = render(<MenuTabs clickTabs = { clickTabs }/>);

  expect(fireEvent.click(getByTestId('breakfast'))).toBe(true);
});


it('Debería ejecutarse la función clickTabs al dar click al botón Hamburguesas.', () => {
  const clickTabs = jest.fn;

  const { getByTestId } = render(<MenuTabs clickTabs = { clickTabs }/>);

  expect(fireEvent.click(getByTestId('burger'))).toBe(true);
});


it('Debería ejecutarse la función clickTabs al dar click al botón Acompañamiento.', () => {
  const clickTabs = jest.fn;

  const { getByTestId } = render(<MenuTabs clickTabs = { clickTabs }/>);

  expect(fireEvent.click(getByTestId('sideDish'))).toBe(true);
});


it('Debería ejecutarse la función clickTabs al dar click al botón Bebidas.', () => {
  const clickTabs = jest.fn;

  const { getByTestId } = render(<MenuTabs clickTabs = { clickTabs }/>);

  expect(fireEvent.click(getByTestId('drinks'))).toBe(true);
});
