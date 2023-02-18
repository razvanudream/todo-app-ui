import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { RequireAuth } from "../components/RequireAuth";
import Home from "../pages/Home";
import Login from "./Login";
import SignUp from "./SignUp";

function Pages() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname + location.search}>
      <Route
        exact
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<SignUp />} />
    </Routes>
  );
}

export default Pages;
