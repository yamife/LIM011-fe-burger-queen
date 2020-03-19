import React from 'react';


const ItemMenu = (props) => {

  return (
    <li onClick={() => props.click(props.value)}>
      <button type="button" className="btn btn-warning btn-lg btn-block">
        <article>
          <p>{props.value.nameProduct}</p>
          <p>{props.value.price}</p>
        </article>
      </button>
    </li>
  );
}


export default ItemMenu;
