import React from 'react';
import Header from './components/Header/header';
import Products from './components/Products/products';
import Provider from './context/provider';
import Cart from './components/Cart/cart';

function App() {
  return (
    <div className="App">
      <Provider>
        <Header/>
        <Products/>
        <Cart/>
      </Provider>
    </div>
  );
}

export default App;
