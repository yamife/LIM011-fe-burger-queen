import React from 'react';
import FontAwesome from 'react-fontawesome';


const ItemOrder = (props) => {
  
  return (
    <li>
      <article>
        <div>
          <button>
           <FontAwesome className="fas fa-plus-circle" name="fas fa-plus-circle"/>
          </button>
          { props.counter }
          <button>
           <FontAwesome className="fas fa-minus-circle" name="fas fa-minus-circle"/>
          </button>
        </div>
        <p>{ props.value.nameProduct }</p>
        <p>{ props.value.price }</p>
      </article>
    </li>
  );
}


export default ItemOrder;
