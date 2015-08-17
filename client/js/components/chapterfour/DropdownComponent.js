import React,{ Component } from 'react';
import OptionsComponent from './OptionsComponent';

export default class DropdownComponent extends Component {
  constructor(props,context) {
  	super(props,context);
	this.state = { 
		showOptions:false,
		countries:['Denmark', 'Canada', 'Turkey','USA', 'Mongolia']
	}
	this.handleClick = this.handleClick.bind(this);
  }

  render() {
    var options;

    if(this.state.showOptions) {
      options = <OptionsComponent countries={this.state.countries}/>;
    }
    return (
    	<div className="dropdown"  onClick={this.handleClick}>
		showing options: {this.state.showOptions}
		<label> Choose a country </label>
		{options}
	</div>

    );
  }

  handleClick(event) {
    this.setState({
	showOptions:this.state.showOptions ? false : true
    });
  }

}
