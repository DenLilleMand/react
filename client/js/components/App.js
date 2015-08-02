import React from "react";
import Router from "react-router";
import Header from "./core/Header";
import Footer from "./core/Footer";
console.log('app runs in components');

var RouteHandler = Router.RouteHandler;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div>
      <Header />
      <RouteHandler />
      <Footer />
      </div>
    );
  }
}
