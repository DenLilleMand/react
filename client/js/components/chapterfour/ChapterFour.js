import React from "react";
import ReceivePropsComponent from './ReceivePropsComponent';
import DropdownComponent from './DropdownComponent';


export default class ChapterFour extends React.Component {
	constructor(props){
	  super(props);
	  this.state = {
	    herpderp:"some valued we passed to a text component",
	    notImportantProp:"Not important prop"
	  }
	}

	render() {
	  var props = {
		someProp:"someProp",
		anotherProp:"anotherProp",
		receivedProp:"Prop received with spread syntax instead of single file"
	  };
	  return (
	  	<div>
			<h1> Chapter Four: Basic Data Flow </h1>
			<h2> Intro </h2>
			<p>
				Components are not alone, they have components below them and above them, this chapter is about 
				how this data flows through our application. We have to estimate eachtime we pass props to a child, how 
				much data that child really needs.
			</p>
			<p>
				Data in react is what we call unidirectional, so the data only flows in one direction, from the top of the hierarchy
				to the bottom. Parents passing in their props or state as props to their children.
			</p>
			<p>
				Two of the things we're going to have a look at here is props and state.
			</p>
			<h2> Props </h2>
			<p>
				Props are handed to our component at initialization, so giveing props to a component would be like this:
				<p>
					<em> Component output </em>
					<ReceivePropsComponent receivedProp={this.state.herpderp}/>
					<em> Component output end </em>
				</p>
				The ReceivePropsComponent, we can see in its implementation that it fetches the data through the props object, 
				even though its tempting just to modify the props object directly, this is a complete no-go. There is another method 
				called setProps, this method is viable, but it should only be called outside of the component or outside of the 'component tree'.
				We wont go any deeper into this setProps method though, i dont think its going to be very useful, as a React Beginner.

				So for now we will have to accept that props is given to us from a component higher in the hierarchy.

				Another way to pass props, instead of one at a time, is to use the spread syntax in JS, If you look above this 
				render methods return statement, we've declared a object with a spread syntax, and we're going to pass it into our 
				ReceivePropsComponent that we used earlier to just pass in 1 prop. 
				<em>Component output </em>	
				<ReceivePropsComponent /* This is the relevant part:*/ {...props} />
				<em> Component output end</em>

				Basically the onClick property is a prop aswell, so you can say that props make eventhandling possible aswell.
			</p>
			<h3> PropTypes </h3>
			<p>
				This is a way of validateing our prop types, basically all we have to know is that we dont need to use propTypes if we dont want to.
				If we do add them though, we will get a warning in the console, and if we add  'isRequired' to the prop but the prop 
				is of the wrong type, we will get an error thrown.
			</p>
			<h3> getDefaultProps() </h3> 
			<p>
				This is a method that can provide default values across all instances of the same Component class,
				because we use es6 though, we just add the object statically to the constructor of the component.
				The way it happens is that the first time a createClass is called, it caches these values, and pass them 
				into the next components of this same class through the constructor.


			</p>
			<h2> State </h2>
			<p>
				State is internal to the component, the component owns the state. That means that the component can change its state,
				and use it to whatever it wants(other components might rely on this state if we pass it along as props, 
				but that doesn't matter because they're just children, and dont get to decide), in the following example 
			      we've made a small dropdown kind of functionality, and it shows how you can click a 'div' which changes state, and then 
			      it shows data depending on this state. the  DropdownComponent renders the OptionsComponent inside of it, and that component
			      uses a foreach to push DOMNodes into an array that is then rendered, which we haven't seen yet, but is a very import use-case
			      for both search-functionality, tables etc.
				<em> Example: </em>
				<p>
				<DropdownComponent />
				</p>



			</p>
			<h2> Prop vs State </h2>
			<p>
				Okay, so we understand a little how to use state and how to use props, but we're not really sure about what 
				the REAL difference is, and how to decide when we're going to use what, so im going to go really deep into this subject in this 
				paragraph.
			</p>
			<p>

			</p>
		</div>
	  );
	}
}
