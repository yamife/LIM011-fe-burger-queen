import React from 'react';

class Tabs extends React.Component {
    clickTabs = (e) => {
        e.preventDefault();
        console.log('entras aqui');
    }
    
    render() {
        return (
            <ul className="nav nav-pills">
                <li className="nav-item" onClick= {this.clickTabs}>
                    <a className="nav-link active" href="./">Desayuno</a>
                </li>
                <li className="nav-item" onClick= {this.clickTabs}>
                    <a className="nav-link" href="./">Hamburguesas</a>
                </li>
                <li className="nav-item" onClick= {this.clickTabs}>
                    <a className="nav-link" href="./">Acompañamiento</a>
                </li>
                <li className="nav-item" onClick= {this.clickTabs}>
                    <a className="nav-link" href="./">Bebidas</a>
                </li>
            </ul>
        );
    }
}
export default Tabs;