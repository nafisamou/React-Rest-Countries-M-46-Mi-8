import React from "react";
import './Header.css'
const Header = () => {
  return (
    <div className="header">
      <h1>Welcome to my Rest Countries</h1>
      <nav>
        <a href="/Home">Home</a>
        <a href="/About">About</a>
        <a href="/Countries">Countries</a>
      </nav>
    </div>
  );
};

export default Header;
