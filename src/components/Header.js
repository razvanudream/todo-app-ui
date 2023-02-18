import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <img src="logo.svg" alt="brand" />
        <nav className="nav"></nav>
      </div>
    </header>
  );
}

export default Header;
