import React, { Component } from 'react';

export default class ChapterTwentyOne extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {}
  }

  render() {
    return (
    	<div>
		<h1> TodoExample in another way </h1>
		<p>
			Basically you have to look in the code for this example, the reason being 
			  that this example was made to be self as its own react app, while we allready have 
			    the previous todoApp nested inside of our app. basically we could do the same, but 
			because this example uses something interesting, which is a combineReducers way of createing 
			a store, we kind of cannot run our old code, because they rely on a Store being just 1 ActionCreator.
			So to run this, you will have to copy paste it into another project or whatever.
		</p>


	</div>
    
    );
  }
}
