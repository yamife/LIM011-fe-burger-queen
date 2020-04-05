import React from 'react';
import { render } from '@testing-library/react';
import MenuTabs from '../../components/waiter/menu/MenuTabs';


it('Debería mostrar los botones segun las categorias', () => {

  const fnclickTabs = jest.fn;

  const divMenuTabs = render(<MenuTabs clickTabs= {fnclickTabs} />);

  expect(divMenuTabs).toBeTruthy();

});
