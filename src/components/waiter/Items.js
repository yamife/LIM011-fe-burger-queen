import React from 'react';


const Items = (props) => {
  const products = props.products;
  const clickProduct = props.clickProduct;

  const lista = products.map((product) => {
    const productOrder = {
      name: product.nameProduct,
      price: product.price,
    };

    return <tr key ={product.id} onClick={() => clickProduct(productOrder)}>
      <th>
          <p>{product.nameProduct}</p>
          <p>{product.price}</p>
      </th>
    </tr>
  });

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
