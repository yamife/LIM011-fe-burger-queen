import React from 'react';


class Tabs extends React.Component {
    clickTabs = (name, e) => {
        e.preventDefault();
        console.log('entras aqui', name);
    }
    
    render() {

        return (
            <ul className="nav nav-pills">
                <li className="nav-item" onClick= {(e) => {this.clickTabs('Desayuno', e)}}>
                    <a className="nav-link active" href="./">Desayuno</a>
                </li>
                <li className="nav-item" onClick= {(e) => {this.clickTabs('Hamburguesas', e)}}>
                    <a className="nav-link" href="./">Hamburguesas</a>
                </li>
                <li className="nav-item" onClick= {(e) => {this.clickTabs('Acompañamiento', e)}}>
                    <a className="nav-link" href="./">Acompañamiento</a>
                </li>
                <li className="nav-item" onClick= {(e) => {this.clickTabs('Bebidas', e)}}>
                    <a className="nav-link" href="./">Bebidas</a>
                </li>
            </ul>
        );
    }
}
export default Tabs;