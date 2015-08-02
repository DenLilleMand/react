import React from "react";

export default class ConditionalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted:true,
    }
  }
  setVariableExampleFunction() {
    return this.state.isCompleted ? 'is-completed' : '';
  }

  getSomeClassName(){
    return this.state.isCompleted ? 'is-completed' : '';
  }

  render(){
    //the following variable is declared before return is called,
    //and is declared here, because you cannot declare it inside of the JSX syntax.
    //this variable is used for the 'set variable' example.
	var goodName = this.setVariableExampleFunction();
    return (
    	<div>
	{/* ternery example: */}
		<div className={this.state.isCompleted ? 'is-completed' : ''}> ternery example </div>

		{/*Set variable example */}
		<div className={goodName}> set variable example  </div>

		{/* Using a function call example */}
		<div className={this.getSomeClassName()}> Function call example </div>

		{/* Using the double-and(&&) operator, the reason why this works is that 
		* react doesn't output anything for null or false values, so we can hand a boolean 
		* and a String, depending on the boolean we will print the string.*/}
		<div className={this.state.isCompleted && 'is-completed'}>  && operator example </div>



	</div>
    );
  }
}
