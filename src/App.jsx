import React from 'react';
import Header from './components/Header/header';
import Products from './components/Products/products';
import Provider from './context/provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Header/>
        <Products/>
      </Provider>
    </div>
  );
}

export default App;
