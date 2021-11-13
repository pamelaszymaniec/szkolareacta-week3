import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Week3 from "./pages/Week3";
import Week4 from "./pages/Week4";
import Week5 from "./pages/Week5";
import BudgetCalc from "./pages/BudgetCalc";
import Logo from "./components/Header/Logo";
import Home from "./pages/Home"
import Week7 from "./pages/Week7";

import "./styles/main.scss";
import UserContainer from "./components/UsersContainer";
import UserProfile from "./pages/UserProfile";
import ApiUsersList from "./components/ApiUsersList/ApiUsersList";

function App() {
  const [isActive, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className={`app ${isActive ? "" : "toggle-menu"}`}>
      <Router>
        <aside>
          <Logo />
          <nav className="menu">
            <ul>
              <li>
                <NavLink to="/home" activeClassName="selected">
                  Strona główna
                </NavLink>
              </li>
              <li>
                <NavLink to="/week3" activeClassName="selected">
                  Tydzień 3
                </NavLink>
              </li>
              <li>
                <NavLink to="/week4" activeClassName="selected">
                  Tydzień 4
                </NavLink>
              </li>
              <li>
                <NavLink to="/budgetcalc" activeClassName="selected">
                  Kalkulator wydatków
                </NavLink>
              </li>
              <li>
                <NavLink to="/week5" activeClassName="selected">
                  Tydzień 5
                </NavLink>
              </li>
              <li>
                <NavLink to="/users" activeClassName="selected">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/week7" activeClassName="selected">
                  Tydzień 7
                </NavLink>
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
            <Route path="/week7/api-users">
              <ApiUsersList />
            </Route>
            <Route path="/users">
              <UserContainer />
            </Route>
            <Route path="/user-profile">
              <UserProfile />
            </Route>
            <Route path="/week5">
              <Week5 active={isActive} handleToggle={handleToggle} />
            </Route>
            <Route path="/week7">
              <Week7 />
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
