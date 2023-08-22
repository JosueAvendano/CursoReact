/* import React from "react";
import "./Navbar.css";
import Clock from "../clock/Clock";

class Navbar extends React.Component {
  render() {
    return (
      <div className='div-nav'>
        <nav className='navbar'>
          <div className='logo'>Learn Deutsch</div>
          <div className='timeZone'>{<Clock country="Germany's"/>}</div>
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
    );
  }
}

export default Navbar; */

/* Navbar con React Routing */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./Navbar.css";
import Login from "../login/Login";
import LoginDocente from "../loginDocente/LoginDocente";
import ListaCursos from "../listaCursos/ListaCursos";
import NotFound from "../notFound/NotFound";
import Vocabulario from "../vocabulario/Vocabulario";
import AboutUs from "../aboutUs/AboutUs";
import Home from "../home/Home";
import Contact from "../contact/Contact";

export default function Navbar() {
  return (
    <Router>
      <div className='div-nav'>
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/"><div className='logo'><span className="span-learn">LEARN</span> DEUTSCH</div></Link>
            </li>
          </ul>
          <ul className='nav-links'>
            <div className='menu'>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/loginProfessor">Are you a Teacher?</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/vocabulary">Vocabulary</Link></li>
              <li><Link to="/aboutUs">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </div>
          </ul>
        </nav>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/loginProfessor">
              <LoginDocente/>
            </Route>
            <Route path="/courses">
              <ListaCursos/>
            </Route>
            <Route path="/vocabulary">
              <Vocabulario/>
            </Route>
            <Route path="/aboutUs">
              <AboutUs/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}