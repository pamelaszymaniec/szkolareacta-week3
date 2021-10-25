import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Week3 from "./pages/Week3";
import Week4 from "./pages/Week4";
import BudgetCalc from "./pages/BudgetCalc";

import "./App.css";
import Logo from "./components/Header/Logo";

function App() {
  return (
    <div className="App">
      <Router>
        <aside className="Menu">
          <Logo />
          <ul>
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li>
              <Link to="/week3">Tydzień 3</Link>
            </li>
            <li>
              <Link to="/week4">Tydzień 4</Link>
            </li>
            <li>
              <Link to="/budgetcalc">Kalkulator wydatków</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Switch>
            <Route path="/week3">
              <Week3 />
            </Route>
            <Route path="/week4">
              <Week4 />
            </Route>
            <Route path="/budgetcalc">
              <BudgetCalc />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
