import React from 'react';


const Items = (props) => {
  const products = props.products;
  const clickProduct = props.clickProduct;

  const lista = products.map((objProduct) =>
    <tr key ={objProduct.id} onClick={() => clickProduct(objProduct.nameProduct)}>
      <th>
          <p>{objProduct.nameProduct}</p>
          <p>{objProduct.price}</p>
      </th>
    </tr>
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {lista}
      </tbody>
    </table>
  );
}


export default Items;
