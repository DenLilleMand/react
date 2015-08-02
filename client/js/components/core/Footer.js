import React from "react";
import Marty from "marty";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
	return (
		<div>
		<footer className="footer-distributed">

			<div className="footer-right">
				<a href="http://www.github.com/denlillemand/react"><i className="fa fa-github"></i></a>
			</div>

			<div className="footer-left">

				<p className="footer-links">
					<a href="/about">About</a>
				</p>

				<p>DenLilleMand</p>
			</div>

		</footer>

		</div>
	);
  }

}
