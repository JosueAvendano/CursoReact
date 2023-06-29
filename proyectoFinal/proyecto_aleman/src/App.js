import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
{/*       <header className="App-header">
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
      </header> */}
      <div className='div-nav'>
        <nav className='navbar'>
          <div className='logo'>Learn Deutsch</div>
          <ul className='nav-links'>
            <div className='menu'>
              <li><a href='/'>Log in</a></li>
              <li><a href='/'>Sign in</a></li>
              <li className='more'>
                <a href='/'>More</a>
                <ul className='dropdown'>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/'>Courses</a></li>
                  <li><a href='/'>Blog</a></li>
                  <li><a href='/'>Language</a></li>
                  <li><a href='/'>Vocabulary</a></li>
                  <li><a href='/'>About us</a></li>
                  <li><a href='/'>Help</a></li>
                </ul>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
