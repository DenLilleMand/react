import React from "react";

export default class DynamicValuesForClassName extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {

	  }
	}
	calculateClassName(){
	  return "random-class-name";
	}

	render() {
	  return (
	  	<div id={this.props.id} className={this.props.font}>
			<div className={this.calculateClassName()}>
				Content inside of DynamicValuesForClassName Component!!!	
			</div>

		</div>
	  );
	}

}
