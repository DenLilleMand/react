import React, {Component } from "react";
import _ from "lodash";


class CorrectInputComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
	userInput: props.initialUserInput
    };
    /*
     *OKAY! these two following lines are very confuseing,
     *They're not nessecery if you use standard react syntax,
     *instead of es6, the reason for this is that when you 
     *write in es6, all of these things are normal javascript 
     *objects instead of React stuff, so react isn't 
     *able to automatically bind the inner scope of the functions to the 
     *outer scope of the component,  as it would if you used their buildin classes. 
     *React dev team has uttered their opinion and said that the only reason why they 
     * made it as  React.createClass() was that javascript didn't have class syntax,
     * and when javascript makes that change in late 2015, React will deprecate their 
     * class syntax.  So i think its a good idea to get used to this, allso since 
     * alot of the new code and examples you find on React etc. has this syntax.
     */
    this.handleChange = this.handleChange.bind(this);
    this.clearAndFocusInput = this.clearAndFocusInput.bind(this);
  }

  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  clearAndFocusInput() {
    this.setState({ userInput:''});
    this.refs.myInput.getDOMNode().focus(); //this is the point of the example, getting access to the DomNode
  }

  render() {
	return (
		<div>
			<div onClick={this.clearAndFocusInput}>
			    Click to focus and reset! 
			</div>
			<input ref="myInput" value={this.state.userInput} onChange={this.handleChange} />
		</div>
	);
  }
}


CorrectInputComponent.propTypes = { initialUserInput: React.PropTypes.string };
CorrectInputComponent.defaultProps = { initialUserInput: ''};
export default CorrectInputComponent; 
