import React from 'react';
//import db from '../Services/FirestoreConfig';
//import getProducts from '../firebase/firestore';

const Items = (props) => {
  const products = props.products;
  const lista = products.map((objProduct) =>
    // <li key ={objProduct.id}>
    //   {objProduct.nameProduct}
    //   {objProduct.price}
    // </li>
    <tr key ={objProduct.id}>
      <td>{objProduct.nameProduct}</td>
      <td>{objProduct.price}</td>
    </tr>
  )
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
  )
}
export default Items;
