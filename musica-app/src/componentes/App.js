import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import './../css/App.css';
import Formulario from './Formulario';
import Informacion from './Informacion';
import Cancion from './Cancion';
import Imagen from './Imagen';

function App() {

  /* *** Utilizar useState con 3 states (Hooks) *** */
  // const [this.state, this.setState] = useState();

  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  /* *** Método para consultar la API de Letras de Canciones *** */
  const consultarApiLetra = async busqueda => {
    console.log(busqueda);
    const { artista, cancion } = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    // Consultar la API
    const resultado = await axios(url);
    //console.log(resultado);
    //console.log(resultado.data);
    console.log(resultado.data.lyrics);
    // Almacenar el artista que se busco
    agregarArtista(artista);
    // Almacenar la letra en el state
    agregarLetra(resultado.data.lyrics);
  
  }

  /* *** Método para consultar la API de imformación *** */
  const consultarApiInfo = async () => {
    if(artista) {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const resultado = await axios(url);
      // console.log(resultado);

      agregarInfo(resultado.data.artists[0]);
      // console.log(info);
    }
  }

  /* *** useEffect --> componentDidUpdate *** */
  useEffect(
    () => {
      consultarApiInfo();
    }, [artista]
  )

  return (
    <Fragment>
      <div className="App">
        { /* ***** Componente: Formulario ***** */}
        <Formulario
                    consultarApiLetra={consultarApiLetra}
        ></Formulario>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              {/* ***** Componente: Informacion --> Información de la Banda ***** */}
              <Informacion
                            info={info}
              ></Informacion>
            </div>
            <div className="col-md-6">
              { /* ***** Componente: cancion --> Letra de la Canción ***** */}
              <Cancion
                        letra={letra}
              ></Cancion>
            </div>
          </div>
        </div>
      </div>
      <div className="App">
        { /* ***** Componente: Imagen ***** */}
        <Imagen></Imagen>
      </div>
    </Fragment>
  );
}

export default App;
