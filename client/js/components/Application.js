import React from "react";
import Footer from "./core/Footer";
import Header from "./core/Header";
import About from "./About";


export default class Application extends React.Component {
  render() {
    const { props: { children }} = this;
    return (
    	<div className="Application">
			<div className="container">
			<Header />
			<div className="content">
				{children}
			</div>
			<Footer />
			</div>
	</div>
    );
  }
}
