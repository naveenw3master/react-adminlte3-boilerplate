import React, { Component } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default class DashboardPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <SideBar />
        <Content />
        <Footer />
      </div>
    );
  }
}
