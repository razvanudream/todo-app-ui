import React from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { useMutation } from "@apollo/client";
import "../styles/signup.css";
import { SIGNUP_USER } from "../graphql/queries";

function SignUp() {
  const navigate = useNavigate();
  const [signUp] = useMutation(SIGNUP_USER);

  const handleSignUp = (evt) => {
    evt.preventDefault();

    signUp({
      variables: {
        name: evt.target[0].value,
        email: evt.target[1].value,
        password: evt.target[2].value,
      },
    }).then((result) => {
      if (result.data.signUp) {
        localStorage.setItem("user", JSON.stringify(result.data.signUp));
        navigate("/");
      }
    });
  };

  return (
    <div className="signUp">
      <PageTitle
        text="Welcome!"
        subText="Sign up to start using Simpledo today."
      />
      <form className="signUpForm" onSubmit={handleSignUp}>
        <label>
          <input type="text" name="fullname" placeholder="Full name" required />
        </label>
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
        <a className="linkToLogin" href="/login">
          Do have an account? Sign in.
        </a>
        <button type="submit" className="submitButton">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
