import React from "react";

export default class NoJSX extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
  	return (
		React.createElement("div", null, "content of no jsx component")
	);
  }
}
