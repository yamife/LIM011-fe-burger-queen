import React from 'react';
//import db from '../Services/FirestoreConfig';
//import getProducts from '../firebase/firestore';

const Menu = (props) => {
  const products = props.products;
  const lista = products.map((objProduct) =>
    <li key ={objProduct.id}>
      {objProduct.nameProduct}
      {objProduct.price}
    </li>
  )
  return (
    <ul>
      {lista}
    </ul>
  )
}

export default Menu;
