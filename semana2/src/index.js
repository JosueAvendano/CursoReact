import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* 
function irlTime() {
  const element = (
    <div>
      <h1>Hola Mundo!</h1>
      <p>La hora actual es {new Date().toLocaleTimeString()}.</p>
    </div>
  );
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(element);
}

setInterval(irlTime, 1000);
*/
function Saludo(props) {
  return <h1>Bienvenido(a) <i>{props.nombre}</i></h1>;
}

const elementoUsuario = <Saludo nombre="Maria" apellido="Salas"/>;
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(elementoUsuario);
root.render(<App/>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
