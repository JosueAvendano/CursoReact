import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// JSX = JavaScript + xml
const elemento = <div><h1>Hola <i>mundo</i></h1></div>;
const nombre1 = "Jose";
const elemento1 = <h1>Hola, mi nombre es <i>{nombre1}</i></h1>;

function formatoNombre(usuario) {
  return usuario.nombre + ' ' + usuario.primer_apellido + ' ' +  usuario.segundo_apellido;
}

const usuario = {
  nombre: "Carlos Eduardo",
  primer_apellido: "Salas",
  segundo_apellido: "Rojas"
}

const elemento2 = (
  <h1>
    Hola, mi nombre completo es <i>{formatoNombre(usuario)}</i>
  </h1>
);

function obtenerSaludo() {
  if(usuario.nombre !== ""){
    return <h1>Hola, mi nombre completo es <i>{formatoNombre(usuario)}</i></h1>;
  }else{
    return <h1>Hola desconocido!</h1>;
  }
}

let elements = [];
for (let i = 0; i < 5; i++) {
  elements.push(<h2>Elemento: {i + 1}</h2>);
}

function obtenerClaificacion(nota) {
  switch (nota) {
    case 4:
      return <h1>Nota muy baja!</h1>;
    break;
    case 6:
      return <h1>Nota baja!</h1>;
     break;
    case 8:
      return <h1>Nota alta!</h1>;
     break;
    case 10:
      return <h1>Nota perfecta!</h1>;
    break;
    default:
      return <h1>Nota no encontrada!</h1>;
    break;
  }
}
const estilo = {'background-color': 'yellow'};
const elemento3 = <div width="100%" style={estilo}>Prueba de Atributos</div>;
const elemento4 = (
  <div>
    <h1>Hola {usuario.nombre}!</h1>
    <h2>Bienvenido al sitio!</h2>
    <p>
      Tiempo actual:
      <span>{Date()}</span>
    </p>
  </div>
);

const elemento5 = React.createElement(
  'h1',
  {className: 'campo'},
  "Hola!"
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*
    <React.StrictMode>
      <App />
    </React.StrictMode> 
  */
  [elemento, elemento1, elemento2, obtenerSaludo(), elements, obtenerClaificacion(10), elemento3, elemento4, elemento5]
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
