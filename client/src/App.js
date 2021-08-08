import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./assets/spl_logo.svg";
import BuscaLoja from "./components/BuscaLoja";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <Router>
        <header>
          <div className="mx-5 d-flex align-items-center justify-content-between">
            <img src={logo} alt="logo" />
            <div className="switch-store">
              <Link to="/">LOJAS</Link> |{" "}
              <Link to="/quiosques">ALIMENTAAO</Link>
            </div>
            <BuscaLoja />
          </div>
        </header>
        <div className="pageDescript">
          <h1>Catálogo de lojas ativas Park Lagos</h1>
        </div>
        <main>
          <Switch>
            {
              //<Route path="/search/:parameters" component={SearchPage}/>
            }
            <Route path="/" component={HomePage} exact />
          </Switch>
        </main>
      </Router>
    </>
  );
}
