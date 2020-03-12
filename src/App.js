import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Menu from './components/Menu';

// import { getProducts } from './firebase/firestore.js';

function App() {
 // getProducts('breakfast');
  return (
    <div>
      <Header />
      <Tabs />
      <Menu />
    </div>
  );
}

export default App;
