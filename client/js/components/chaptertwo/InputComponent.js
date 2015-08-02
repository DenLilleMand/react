import React from "react";
import _ from "lodash";


export default class InputComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = _.bind(this.handleClick,this);
 	this.state = {count: props.initialCount};
  }
    handleClick() {
 	this.setState({count: this.state.count + 1});
    }
  render() {
	return (
		<div>
			<div className="btn btn-primary"  onClick={this.handleClick} >
				Clicks: {this.state.count}
			</div>
		</div>
	);
  }
}

InputComponent.propTypes = { initialCount: React.PropTypes.number };
InputComponent.defaultProps = { initialCount: 0 };
