import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        {/* To the right */}
        <div className="float-right d-none d-sm-inline">Anything you want</div>
        {/* Default to the left */}
        <strong>
          Copyright © 2014-2019 <a href="https://adminlte.io">AdminLTE.io</a>.
        </strong>{" "}
        All rights reserved.
      </footer>
    );
  }
}
