import React, {Component, PropTypes } from 'react';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {
  constructor(props,context) {
    super(props,context);
    this.state = { };
  }

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave(text) {
    if(text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
    	<header className='header'>
		<h1>todos </h1>
		<TodoTextInput newTodo={true} onSave={::this.handleSave} placeHolder='what needs to be done?' />
	</header>
    );
  }
}
