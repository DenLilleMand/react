import React, {Component} from 'react';

export default class NestedRefComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { }
  }

  render(){
    return (
    	<div>
		<input type="text" ref="moreMoreNestedRef" />
	</div>
    );
  }
}
