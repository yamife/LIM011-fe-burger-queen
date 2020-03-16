import React from 'react';


const ItemList = (props) => {
    const products = props.products;
    const listItems = products.map((product) => 
        <tr>
            <article>
                <section>
                    <button><i class="fas fa-plus-circle"></i></button>
                    <p>{1}</p>
                    <button><i class="fas fa-minus-circle"></i></button>
                </section>
                <section>
                    <p>{product.nameProduct}</p>
                </section>
                <section>
                    <p>{product.price}</p>
                </section>
                
                <button><i class="far fa-trash-alt"></i></button>
            </article>
        </tr>
    );

    return listItems;
}


class TablaDePedidos extends React.Component {
    constructor(props){
        super();
    }

    render(){
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Cantidad</th>
                            <th>Descripción</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {}
                    </tbody>
                    <tfood>
                        <tr>
                            <td>Total</td>
                            <td>{}</td>
                        </tr>
                    </tfood>
                </table>
            </div>
        );
    }
}


export default TablaDePedidos;
