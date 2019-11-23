import React from "react";
import '../css/Style.css';

const Header = props => {

  return (
    <header>
      <nav id='navbar'>
        <div className='container'>
          <h1 className='logo'>AADC</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <section id='header-splash'>
        <div id='header-splash-left'>
          <h1>Andrew Antes</h1>
          <p>I'm a <strong>software engineer</strong> that's focused on learning new ways to build
            high-quality, scalable, and maintainable software systems.
          </p>
        </div>
      </section>
    </header>
  );
};

export default Header;
