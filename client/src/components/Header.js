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
    </header>
  );
};

export default Header;
