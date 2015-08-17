import React, { Component } from 'react';

export default class OptionsComponent extends Component {
  constructor(props, context) {
    super(props,context);
    this.state = {}
  }

  render() {
    var countries = new Array();
    this.props.countries.forEach(function(country){
      countries.push(<div> {country} </div>);
    });
    return(
    	<div>
		{countries}
	</div>
    );
  }
}
