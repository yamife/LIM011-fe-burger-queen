import React from 'react';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <header>
          <h1>Hello, world!</h1>
        </header>
      );
    }
  }
export default Header;