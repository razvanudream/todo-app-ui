import React from "react";
import PageTitle from "../components/PageTitle";
import "../styles/signup.css";

function SignUp() {
  return (
    <div className="signUp">
      <PageTitle
        text="Welcome!"
        subText="Sign up to start using Simpledo today."
      />
      <form className="signUpForm">
        <label>
          <input type="text" name="fullname" placeholder="Full name" />
        </label>
        <label>
          <input type="text" name="email" placeholder="Email" />
        </label>
        <label>
          <input type="text" name="password" placeholder="Password" />
        </label>
        <div>Do have an account? Sign in.</div>
        <button type="submit" className="submitButton">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
