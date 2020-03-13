import React from 'react';
//import db from '../Services/FirestoreConfig';
//import getProducts from '../firebase/firestore';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { breakfast: [] };
    } 

    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item">item1</li>
                <li className="list-group-item list-group-item-primary">item2</li>
                <li className="list-group-item list-group-item-secondary">item3</li>
                <li className="list-group-item list-group-item-success">item4</li>
            </ul>
        );
    }
}
export default Menu;