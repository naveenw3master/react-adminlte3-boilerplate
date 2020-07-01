import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
