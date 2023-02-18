import React, { useReducer } from "react";
import "./styles/app.css";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./pages/Pages";
import {
  reducer,
  TodoDispatchContext,
  TodoStateContext,
} from "./components/Context";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    filteredItems: [],
  });

  return (
    <div className="container">
      <TodoStateContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
          <Router>
            <Header />
            <Pages />
          </Router>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
