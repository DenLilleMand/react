import React from "react";

export default class ExampleDynamicValues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
/*
 *One of the important things to notice is that 
 *the render method HAS to return exactly 1 Tag, you 
 *can nest tags endlessly inside that one tag though.
 */
  render() {
    return (
      <div>
   	{this.props.herpderp} 
	</div>
    );
  }
}
