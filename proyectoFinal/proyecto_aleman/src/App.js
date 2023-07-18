import './App.css';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import TopBanner from './components/topBanner/TopBanner';

function App() {
  return (
    <div>
      <Navbar/>
      <Login/>
      <TopBanner/>
    </div>
  );
}

export default App;
