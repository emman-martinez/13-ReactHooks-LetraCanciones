import React, { useState, useEffect, Fragment } from 'react';
import './../css/App.css';
import Formulario from './Formulario';
import Imagen from './Imagen';

function App() {

  /* *** Utilizar useState con 3 states (Hooks) *** */
  // const [this.state, this.setState] = useState();

  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  return (
    <Fragment>
      <div className="App">
        { /* ***** Componente: Formulario ***** */}
        <Formulario></Formulario>
      </div>
      <div className="App">
        { /* ***** Componente: Imagen ***** */}
        <Imagen></Imagen>
      </div>
    </Fragment>
  );
}

export default App;
