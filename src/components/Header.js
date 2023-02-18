import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "../styles/header.css";

function Header() {
  const navigate = useNavigate();
  const authenticated = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="site-header">
      <div className="site-header__wrapper">
        <img src="logo.svg" alt="brand" />
        {authenticated && (
          <div onClick={handleLogout} className="logout">
            Logout
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
