import React from 'react';
import logo from './logo.svg';
import Picture from './Picture.JPG'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={Picture} className="Picture" alt = "" />
        <p>
          Rory Anderson
        </p>
        <a
          className="App-link"
          href="https://cdn.shopify.com/s/files/1/0668/3101/products/troll-dad-decal_1024x1024.jpeg?v=1412998881"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rory is an Awesome Developer!
        </a>
      </header>
    </div>
  );
}

export default App;
