import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Week3 from "./pages/Week3";
import Week4 from "./pages/Week4";
import Week5 from "./pages/Week5";
import BudgetCalc from "./pages/BudgetCalc";
import Logo from "./components/Header/Logo";

import "./styles/main.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <aside>
          <Logo />
          <nav className="menu">
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
              <li>
                <Link to="/week5">Tydzień 5</Link>
              </li>
            </ul>
          </nav>
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
            <Route path="/week5">
              <Week5 />
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
