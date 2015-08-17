import React from "react";
import LifecycleComponent from './LifecycleComponent';

export default class ChapterThree extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    isChecked:false
	  }
	  this.handleCheckbox = this.handleCheckbox.bind(this);
	  this.setState = this.setState.bind(this);
	}

	handleCheckbox() {
	  this.setState({
	    isChecked: this.state.isChecked ? false : true
	  });
	}

	render() {
	  return (
	  	<div>
			<h1> Chapter 3:A Components Lifecycle </h1>
			<p>
				A component has several phases it goes through in its creation,
				life  and destruction. These phases has what we call 'hooks',
				this is a very known programming concept widely used in Android, Drupal and many 
				other platforms/technologies. 
				The point of a hook is that we can run our own code at one of phases the component goes through,
				there is a phase where it's okay to manipulate for DOM elements forexample,
				while in another phase that would be detrimental for the component.
			</p>
			<h2> Lifecycle methods </h2>
			<p> 
				We're going to go through a components lifecycle, and what methods are being called 
				at each of the stages. We have 3 stages in total that consist of 'instantiation', 'lifetime' and
				'Teardown & cleanup'.
				  <h3> Instantiation: First time a component is initialized </h3>
				<ul>
					<li>
						getDefaultProps()
					</li>
					<li>
						getInitialState()
					</li>

					<li>
						componentWillMount()
					</li>

					<li>
						render()
					</li>
					<li>
						componentDidMount()
					</li>
				</ul>
				<h3> Instantiation: Subsequent initializations of a component </h3>
				<ul>
					<li>
						getInitialState()
					</li>

					<li>
						componentWillMount()
					</li>

					<li>
						render()
					</li>
					<li>
						componentDidMount()
					</li>
				</ul>
				<p>
				As we can see the instantiation of a component is slightly different the first time we initialize that class, compared to the subsequent 
				initializations, thats because the defaultProps object gets created when that method is called the first time, then react
				 knows how to hand it to the rest of the components of that same class.  As we can see in our './client/js/components/chapterthree/LifecycleComponent'
				 we have commented out getInitialState and getInitalProps, and thats because we use es6 syntax, so our corresponding syntax is to 
				 add a state object inside of the constructor and then we have a  defaultProps object statically added to the component  before we export it.
				</p> 
				 <h4><em> getDefaultProps()</em> </h4>
				<p>
				 In the LifecycleCompononent we can see that  we've made a randomProp variable in the defaultProps object. A thing about 
				 defaultProps is that these properties, if they're complex objects(arrays etc.).  Is shared accross all instances of the same component, 
				 so they are not copied or cloned, they're the same object reference, if a component edits in that data, it will be reflected in the other components aswell. 
			       	
			       	So a obvious use-case is, how do we get default data, that the other instances doesn't  know anything about? we will touch on that,
				in the explanation of the getInitialState()
				 </p>
				 <h4><em> getInitialState() </em></h4>
				<p>
				 is a method that is called exactly once for each component, this method provides a chance to set a custom 
				   variable specific to that instance.  inside this methods scope we have access to the previous set props, so if we want to take 
				  get a unique copy of any of these props in our instance we can copy the value from props to our state. The immediate use-case 
			      for useing this copy method instead of just hardcoding value into our state object im not quite sure about, anyway, we've shown how to do this 
				in the lifecycleComponent aswell, is visible inside of the state object. 
				</p>
			      	<h4><em> componentWillMount() </em></h4>
				<p>
					This method doesn't have anything special about it, it's just a last ditch effort to change the state before 
					the component renders, so maybe you can put various util methods that formats dates and what not in this 
					hook, if it hasn't been done on the server side allready.
				</p>
				<h4><em> render() </em></h4>
				<p>
					This is the only required method for a component and has specific rules.
					<ul>
					  <li>
						The only data it can access is this.props and this.state
					  </li>
					  <li>
					  	You can return null, false or any React component.
					  </li>
					  <li>
					  	There can only be one top level component(you cannot return an array of elements)
					  </li>
					</ul>
					The result of the render method will not be the real dom, its just a virtual DOM that it will diff against the 
					real dom, and only make changes if something is different.
				</p>
				<h4><em> componentDidMount() </em></h4>
			      	<p>
					After a render is complete and the real DOM has updated, this is where we have access to the raw dom. 
					So if we want to do something like run a jquery method or whatever, this is the method we would hook into.
					we can see in the ComponentLifeCycle how we can access the DOMNode inside of this method, and apply something,
					im really sorry about the horrifieing CSS, but the autocomplete method with 'herpderp', 'okay' and 'yes' does work. 
					The example is at the very bottom. of all of these explanations, because im planning on doing examples from both 
					'instantiation', 'lifecycle' and 'teardown' inside of the same component.
					  I allso think its interesting to notice how i just import jquery in the component, browserify sees that dependency and puts 
					it in the bundle together with the other files, i just think thats awesome.
				</p>
				<h3> Lifetime  </h3>
				<p>
					The following methods are the ones being called while the component is alive.
				</p>
				<ul>
					<li>
						componentWilLReceiveProps()
					</li>
					<li>
						shouldComponentUpdate()
					</li>
					<li>
						componentWillUpdate()
					</li>
					<li>
						render()
					</li>
					<li>
						componentDidUpdate()
					</li>
				</ul>
				<p>
					The lifetime methods are enabled when your component is rendered and 
					the user is able to interact with it. Whenever a user interacts with our component via
					a click, hover, keyboard click etc. as the new data ripples through the application we get 
					the possibility to act on it.
				</p>
				<h4> <em> componentWilLReceiveProps() </em></h4>
				<p>
					props is allways able to change, remember that its possible to inherit props from 
					parent components, so we should be hooking into this method if we want the option 
					to fiddle with the data our component receives before it just updates our props, this could 
					be something like if we have a integer updateing all the time, we dont really feel like updateing 
					the state every time, so we only let it update every fifth time, the use-cases for this is endless. 
					In our example component we're going to have a radioButton, that behaves on behalf of the props
					that are given to it, so since ChapterThree component will be this components parent, we will make a 
				 	variable in our state object, just a boolean, and a button to change this boolean from true to false.
					Whenever that boolean changes we will see the checkbox toggle on and off, because our example component 
					knows what to do whenever this specific prop changes.

				</p>
				<h4> <em> shouldComponentUpdate() </em> </h4>
				<p>
					If we override this method we have to return either true or false from it. 
					React is fast at rendering a site, but it can become even faster if we make sure that we only 
					render components when its required. in our LifecycleComponent we tried to override their method without 
				      returning true, and suddenly our component did not render at all, but just got a warning in a console,
				      so its pretty important if we do choose to hook into this method, to return something. 
					  This method is not called on the initial render, and it does not get called when we call force-update.
					    if we do return false, we do not call the before: and after: hooks, 'componentWillUpdate()' and 'componentDidUpdate()'.
				</p>
				<h4> <em> componentWillUpdate() </em> </h4>
			      	<p>
					Like the 'componentWillReceiveProps()' method, this hook is called immediately before the render() method,
					this method on the contrary is not used to update state or props though, thats illegal. 
					So just look at it like a adhoc hook, if you want to do something non-related to props or state.
				</p>

				<h3> Teardown and cleanup </h3>
				<ul>
					<li>
						componentWillUnmount()
					</li>
				</ul>
				<p> 
					When react is done with a component, is has to be torn down and destroyed. 
					We have a single hook into this moment of time in a components lifetime.
				</p>
				<h4> <em> componentWillUnmount() </em> </h4>
				<p>
					So this is the last chance to clean up any custom work we've done in componentDidMount() like 
					event listeners etc. we should undo all of that in this hook.
				</p>
				<p>
					Examples(found at  './client/js/components/chapterthree/LifecycleComponent & ChapterThree'):
				</p>
				<p>
			      		<button className="btn btn-primary" onClick={this.handleCheckbox} >
				         	 Checkbox button
					</button>
					<LifecycleComponent isChecked={this.state.isChecked}/>
				</p>
				<h3> Using calculated values derived from state in react </h3>
				<p>
					Its a anti-pattern to use the getInitialState() method to return calculated values, what we want 
					to do is to call methods that calculate what we need inside of the render() method before the return statement,
					so that we calculate the values as close to render time as possible, so we dont get out-of-sync data.
				</p>
			</p>
		</div>
	  );
	}
}

