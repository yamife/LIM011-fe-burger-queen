import React from 'react';
import ItemMenu from './ItemMenu';


const MenuList = (props) => {
  const products = props.products;
  const clickProduct = props.clickProduct;

  const productFilter = products.filter((order) => order.product === true)
  console.log(productFilter);

  const listOrder = productFilter.map((order) =>
  <ItemMenu key={order.id} value={order} click={clickProduct}/>
  );
  return (
    <div>
        <h3>Simple</h3>
        <ul id="item-list">
          {listOrder}
        </ul>
    </div>
  );
}
export default MenuList;
