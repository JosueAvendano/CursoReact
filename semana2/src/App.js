import logo from './logo.svg';
import './App.css';

function Aviso(props) {
  return <h1>El nombre de la persona es {props.nombre} y su edad es {props.edad}.</h1>;
}

function App() {
/*   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */
  return(
    <div>
      <Aviso nombre="Jose" edad="24"/>
      <Aviso nombre="Maria" edad="24"/>
      <h1>Otro componente:</h1>
      <Aviso nombre="Jesus" edad="33"/>
    </div>
  )
}

export default App;
