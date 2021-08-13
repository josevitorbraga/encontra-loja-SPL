import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./assets/spl_logo.svg";
import BuscaLoja from "./components/BuscaLoja";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import AlimPage from "./pages/AlimPage";

export default function App() {
  return (
    <>
      <Router>
        <header>
          <div className="mx-5 d-flex align-items-center justify-content-between">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className="switch-store">
              <Link to="/">LOJAS</Link> |{" "}
              <Link to="/alimentacao">ALIMENTAÇÃO</Link>
            </div>
            <BuscaLoja />
          </div>
        </header>
        <div className="pageDescript">
          <h1>Catálogo de lojas ativas Park Lagos</h1>
        </div>
        <main>
          <Switch>
            <Route path="/search/:parameters" component={SearchPage} exact />
            <Route path="/alimentacao" component={AlimPage} exact />
            <Route path="/" component={HomePage} exact />
          </Switch>
        </main>
      </Router>
    </>
  );
}
