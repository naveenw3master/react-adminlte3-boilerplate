import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "admin-lte/dist/css/adminlte.css";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
