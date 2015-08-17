import React, {Component} from 'react';
import NestedRef from './NestedRef';

export default class ImmediateChildRef extends Component {
  constructor(props,context) {
    super(props,context);
    this.state = { }
  }

  render() {
    return (
    	<div ref="nestedRef">
		<NestedRef ref="moreNestedRef"/>
	</div>
    );
  }
}

