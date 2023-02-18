import React from "react";
import PageTitle from "../components/PageTitle";
import "../styles/login.css";

function Login() {
  return (
    <div className="login">
      <PageTitle text="Welcome back!" subText="Log in to continue." />
      <form className="loginForm">
        <label>
          <input type="text" name="email" placeholder="Email" />
        </label>
        <label>
          <input type="text" name="password" placeholder="Password" />
        </label>
        <div>Do have an account? Sign in.</div>
        <button type="submit" className="submitButton">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
