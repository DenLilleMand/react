import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
	return (
		<div>
		<footer className="navbar navbar-default footer">
				<a href="http://www.github.com/denlillemand/react"><i className="fa fa-github"></i></a>
				<a href="/about">About</a>
				<p>DenLilleMand</p>
		</footer>

		</div>
	);
  }
}
