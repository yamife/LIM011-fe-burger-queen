import React from 'react';

class Header extends React.Component {
    render(){
        return(
            <header>
                <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="./">
                    <img src="../public/img/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" />Burger Queen
                </a>
                </nav>
            </header>
        );
    }

}
export default Header;