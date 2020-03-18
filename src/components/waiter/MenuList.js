import React from 'react';
import ItemMenu from './ItemMenu';


const MenuList = (props) => {
  const products = props.products;
  const clickProduct = props.clickProduct;

  /* const lista = products.map((product) => {
    const productOrder = {
      id: product.id,
      name: product.nameProduct,
      price: product.price,
    };

    return <tr key={product.id} onClick={() => clickProduct(productOrder)}>
            <th>
              <p>{product.nameProduct}</p>
              <p>{product.price}</p>
            </th>
          </tr>
    }); */

  const lista = products.map((order) => <ItemMenu key={order.id} value={order} onClick={() => clickProduct(order)} />);

  return (
    <div className="container">
      <h1>Menú</h1>
      <div>
          <ul id="item-list">
              { lista }
          </ul>
      </div>
    </div>
  );
}


export default MenuList;
