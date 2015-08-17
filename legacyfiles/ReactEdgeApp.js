import React, {Component} from "react";
import Header from "./components/core/Header";
import Footer from "./components/core/Footer";
import MainSection from "./components/MainSection";

export default class ReactEdgeApp extends Component {
  render() {
    return (
      <div>
    	<Header />
	<MainSection />
	<Footer />
      </div>
    );
  }
}


