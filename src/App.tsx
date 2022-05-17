import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [valor, setValor] = useState(0)

  function funcaoAdiciona () {
    setValor(valor+1)
  }



  return (
    <div className="App">
      <h1>testando usestate</h1>
      <p>Carrinho: <b>{valor}</b></p>
      <button onClick={funcaoAdiciona}>Adicionar carrinho!</button>
    </div>
  );
}

export default App;
