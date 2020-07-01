import React, { Component } from "react";
import { Link } from "react-router-dom";
import "icheck-bootstrap/icheck-bootstrap.min.css";

export default class LoginPage extends Component {
  componentDidMount() {
    document.body.classList.remove("sidebar-mini");
    document.body.classList.add("login-page");
  }

  componentWillUnmount() {
    document.body.classList.remove("login-page");
    document.body.classList.add("sidebar-mini");
  }

  render() {
    // const { pathname } = this.props.location;
    console.log(this.props);
    return (
      <div className="login-box">
        <div className="login-logo">
          <Link to="/dashboard">
            <b>React</b> AdminLTE
          </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form action="../../index3.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
