import React from 'react';

class Tabs extends React.Component {
    
    constructor(props){
      super(props);
      this.clickTabs = this.clickTabs.bind(this);  
    }
    clickTabs(name, e) {
        e.preventDefault();
        console.log('entras aqui', name);
    }  
    render() {

        return (
            <ul className="nav nav-pills">
                <li className="nav-item" onClick= {(e) => {this.clickTabs('Desayuno', e.preventDefault())}}>
                    <a className="nav-link active" href="./">Desayuno</a>
                </li>
                <li className="nav-item" onClick= {(e) => {this.clickTabs('Hamburguesas', e.preventDefault())}}>
                    <a className="nav-link" href="./">Hamburguesas</a>
                </li>
                <li className="nav-item" onClick= {(e) => {this.clickTabs('Acompañamiento', e.preventDefault())}}>
                    <a className="nav-link" href="./">Acompañamiento</a>
                </li>
                <li className="nav-item" onClick= {(e) => {this.clickTabs('Bebidas', e.preventDefault())}}>
                    <a className="nav-link" href="./">Bebidas</a>
                </li>
            </ul>
        );
    }
}
export default Tabs;