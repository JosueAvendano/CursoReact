import './App.css';
import ListaCursos from './components/listaCursos/ListaCursos';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import TopBanner from './components/topBanner/TopBanner';

function App() {
  return (
    <div>
      <Navbar/>
      <Login/>
      <TopBanner/>
      {/* <ListaCursos/> */}
    </div>
  );
}

export default App;
