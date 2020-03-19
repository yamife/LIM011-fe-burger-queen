import React from 'react';

const Items = (props) => {
  const products = props.products;
  // const clickItem = props.clickItem;
  const lista = products.map((objProduct) =>
    <tr key ={objProduct.id}>
      <td>{objProduct.nameProduct}</td>
      <td>{objProduct.type !== null ? objProduct.type: '-'}</td>
      <td>{objProduct.price}</td>
      <td><button className= 'btn btn-danger'> Agregar </button></td>
    </tr>
  )
  return (
    <table className="table my-2">
      <thead>
        <tr>
          <th scope = 'col'>Producto</th>
          <th scope = 'col'>Tipo</th>
          <th scope = 'col'>Precio S/.</th>
          <th scope = 'col'>Agregar</th>
        </tr>
      </thead>
      <tbody>
        {lista}
      </tbody>
    </table>
  )
}
export default Items;
