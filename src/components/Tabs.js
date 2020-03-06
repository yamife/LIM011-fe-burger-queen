import React from 'react';


class Tabs extends React.Component {
    
    constructor(props){
      super(props);
      this.clickTabs = this.clickTabs.bind(this);  
    }

    clickTabs(e, name) {
        e.preventDefault();
        console.log('entras aqui', name);
    }
    
    render() {

        return (
            <ul className="nav nav-pills">
                <li className="nav-item" onClick= {(e) => {this.clickTabs(e, 'Desayuno')}}>
                    <a className="nav-link active" href="./">Desayuno</a>
                </li>
                <li className="nav-item" onClick= {(e) => {this.clickTabs(e, 'Hamburguesas')}}>
                    <a className="nav-link" href="./">Hamburguesas</a>
                </li>
                <li className="nav-item" onClick= {(e) => {this.clickTabs(e, 'Acompañamiento')}}>
                    <a className="nav-link" href="./">Acompañamiento</a>
                </li>
                <li className="nav-item" onClick= {(e) => {this.clickTabs(e, 'Bebidas')}}>
                    <a className="nav-link" href="./">Bebidas</a>
                </li>
            </ul>
        );
    }
}

export default Tabs;
