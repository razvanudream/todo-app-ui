import React from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { useMutation } from "@apollo/client";
import "../styles/login.css";
import { LOGIN_USER } from "../graphql/queries";

function Login() {
  const navigate = useNavigate();
  const [login] = useMutation(LOGIN_USER);

  const handleLogin = (evt) => {
    evt.preventDefault();

    login({
      variables: {
        email: evt.target[0].value,
        password: evt.target[1].value,
      },
    }).then((result) => {
      if (result.data.login) {
        localStorage.setItem("user", JSON.stringify(result.data.login));
        navigate("/");
      }
    });
  };

  return (
    <div className="login">
      <PageTitle text="Welcome back!" subText="Log in to continue." />
      <form className="loginForm" onSubmit={handleLogin}>
        <label>
          <input type="text" name="email" placeholder="Email" required />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </label>
        <a className="linkToRegister" href="/register">
          Don't have an account? Sign up.
        </a>
        <button type="submit" className="submitButton">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
