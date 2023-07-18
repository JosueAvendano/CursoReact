import React from "react";
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

export default Navbar;