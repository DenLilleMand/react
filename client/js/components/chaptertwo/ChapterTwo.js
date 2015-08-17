import React from "react";
//Components imported for examples:
import ExampleDynamicValues from "./ExampleDynamicValues";
import ChildrenProp from "./ChildrenProp";
import DynamicValuesForClassName from "./DynamicValuesForClassName";
import ConditionalExample from "./ConditionalExample";
import NoJSX from "./NoJSX";
import CorrectInputComponent from './refexamples/CorrectInputComponent';
import ImmediateChildRef from './refexamples/ImmediateChildRef';
import DangerouslySetInnerHTMLComponent from './DangerouslySetHTMLComponent';

export default class ChapterTwo extends React.Component {
	constructor(props) {
	  super(props);
	  console.log('this is the function:' + this.clearAndFocusInput);
	  this.clearAndFocusInput = this.clearAndFocusInput.bind(this);
	  this.printReferences = this.printReferences.bind(this);
	  this.state = {
	    //variable used in example to show how we can render our own state.
	    okay: "hmm... did that data just come from me?",
	    /* variable used for the 'ref' example */
	    userInput:''

	  };
	}
	printReferences() {
	  console.log(this.refs);
	  console.log(this.refs.myInput);
	}
	/* methods used for the 'ref' example */
	handleChange(e) {
	  console.log('handle event was called, with:');
	  this.state.userInput = e.target.value;
	}

	clearAndFocusInput() {
	  console.log('clearAndFocusInput was called!');
	  this.state.userInput = '';
	}
	/*ref example#end */

	render() {
	  var styles = {
	  	backgroundColor: "red",
		fontSize: "200%"
	  }
	  return (
	  	<div className="centered">
			<h1> Chapter 2: A JSX Introduction  </h1>
			<h3> JSX: The specification </h3>
			<p>
				This specification does not attempt to comply with any XML or HTML specification.
				  JSX is designed as an ECMAScript feature. And the similarity is just for familarity.
			</p>
			<h3> First impression </h3>
			<p> 
				This text is rendered by JSX, so if you look inside of 
				  ./client/components/chaptertwo/ChapterTwo.js, and look at the 'return' method, all that 
				is inside of those parenthesis is JSX.
				One of the first things programmers think about when they see a react render() 
				method without JSX, is 'oh no, are we going back to the printWriter'.
				
				  We've imported the component  ./client/components/chaptertwo/NoJSX.js, 
				you can go and look at the implementation, to see
				how a render method looks w/o jsx.
				 This is the result:
				  <p>
				<NoJSX />
				</p>


				And there was a very good reason why we left those technologies behind, because of the 
				annoying aspect of calling a php or java  function and give it html syntax as parameter,
				and try to format it so it looks human readable. Basically react is like that, if you remove the JSX(except that its 
				ofc client side, while php/java functions would be on the server).
				So thats why we're going to use JSX in all of our examples, another good reason to get on the JSX 
				  wagon is that from v0.11 to v0.12 the semantics of the react equivalent of a printwriter 
				changed, but everybody who used JSX had abstracted away the specific syntax, so their transition 
				was painless.
			</p>
				<h3> Theoretical stuff </h3>
			<p>
				One of the more theorectical things is that "Seperation of concerns" is definetely being 
				broken here, especially if you look at the MVC paradigm, where the view was retarded, 
				and the controller had all of the logic. Here we're mixing display logic with 
			      method calls etc.   So react doesn't seperate this, but react is build on components, being 
			      building blocks, so we could kind of say that the seperation has just moved to a on-component-basis. 
			</p>
			      <h3> Overview of JSX </h3>
			<p>
				<ul> 
					<li> 
						Allows for familiar markup to define the element tree.
						If a team onboards ui/ux people, they will feel right at home,
						  without knowing much about JS.
					</li>
					<li>
				      		Provides more semantic, easier to understand markup.
						When we have a large code base it will get hard to 
						comprehend the javascript syntax, especially when we start 
						adding alot of classes to our elements. the abstraction allso 
						allows us to use our own components in the markup, like we would use 
						any html tags and JSX supports all of HTML5 tags. One of these "larger code base"
						things is visible in this project actually, on a little smaller scale. 
						If you go into ./client/components/App.js,  App.js is our top component, 
						and its possible to see how the entire application is layed out from this component, 
						that compared to a regular html file with footer and header all thrown into one mix,
						is waay harder to comprehend.
					</li>
					<li>
						It is easier to visualize the structure of your application.
						A little like the note above.
					</li>
					<li>
						It abstracts the creation of ReactElements;
					</li>
					<li>
						Keeps markup and the code that generates it close at hand.
					</li>
					<li>
						It's plain javascript. after you've build this application 
						with gulp, its fun to go into the ./build/js/bundle.js file,
						and look at the javascript being generated from this code when we build it.
						It looks very much like eachother, but its obvious why we would prefer JSX.
					</li>	
					<li>
						Its a old rule that we'll allways prefer to catch bugs at compile time instead of runtime,
						which is why strongly typed languages has had such a huge impact on programming.
						Writeing JSX gives us this transpile step so when we use our gulp task, its going to tell us 
						if we forgot to close a tag somewhere. 
					</li>
				</ul>
			</p>
			<h3> Dynamic values </h3>
			<p>
						<p>
				      		One of the big one-ups jsx has on HTML is because its just javascript, 
						we can do dynamic values on "className", regular content etc. 
						JSX does this through curley brackets as some would know from the templateing 
						system 'handlebars'.
						Take the following example, we've imported a component 
						from ./client/js/components/chaptertwo/DynamicValues.js 
						And we're going to give it a dynamic value to render: 
						</p>
						<p>	
						<ExampleDynamicValues herpderp="dynamic value!!!" />
						</p>

						<p>
						These dynamic values can ofc be used to do className aswell, so if you want to 
						  animate something based on javascript values this is a pretty easy way to do that.
						  </p>

						<p>
						  In this example we gave in the value the component had to render, we dont have to do that 
						though, our component can declare its own state and methods and use them like this:
						  </p>

						<p>
						  {this.state.okay}
						  </p>

						  <p>
						So when we look at that code, we can assume that "props" is when the data is received from 
						a component outside, while "state" is used when the component declares its own data. So when we use 
						  our own 'state' as a dynamic value in another component, that piece of data 
						will be a 'prop' in the other component. 
						  </p>

						<p>
						This brings us to a very key aspect of react called 'uni-directional-dataflow',
						The idea is that there will only be ONE truth in any given data. As soon as State becomes 
						props, by passing it down the component hierarchy, it becomes garbage ready to be replaced by a new 
						update. So a hard part is to decide which component should declare this one source of truth,
						all of the components  high or low has access to the same options of data fetching from a API,
						or hardcoding its own state, so when decideding on which component should retrieve the data we 
						need to look for the component highest in the hierarchy that uses that data. Which brings 
						us to another idea that is completely optional, and that is to name components based on
					      'ControllerComponents', and 'regularComponents' the definition of the these would 
					      be that the controller fetches the data, and the regular  uses the props being passed to it.
						</p>

					      <p>
						We're going to return to this in chapter 4:Data Flow.
						</p>


						<p>
					      Another way to pass a prop, is the predefined 'children' property, so we would forexample import 
					      the  ./client/js/components/chaptertwo/ChildrenProp.js component, and then write it like 
					      regular html:
						</p>

					      <p>
						<ChildrenProp>
					      		this will be rendered to the children prop.
					      	</ChildrenProp>
							</p>

							<p>
						If you look at this components implementation you can see that all it calls 
						  is   this.props.children which refers to the values inside of the encloseing tag.
						  this.props.children is a Array of the values, so 'i might like react' would 
						become ['i', 'might','like','react']
						  </p>

			</p>
			<h3> dynamic values for classNames </h3>
			<p> 
		      		so we're going to import the component ./client/js/components/chaptertwo/DynamicValuesForClassName,
				give it in some props, and if we look at its implementation it has a method calculateing a className aswell.
				<p>
					<DynamicValuesForClassName id="random-id" font="font" />
			      	</p>
				As we can see, we've just dynamically set classNames to alot of random stuff.		
			</p>
			<h3> Conditionals </h3>
			<p>
				JSX does not support if-else logic directly embedded in it. That leaves us with 4 options:
				<ul>
					<li>
				      		Use ternery logic.
				      </li>
				      <li>
				      		Set a variable and refer to it in the attribute.
				      </li>
					<li>
						Offload the switching logic to a function.
					</li>
					<li>
						Use the && operator.
					</li>
				</ul>
				We will see an example of each of these, in the same component. So we've imported 
				the component  'ConditionalExample' from  ./client/js/components/chaptertwo/ConditionalExample:
				<p>
					<ConditionalExample />
				</p>
			</p>
			<h3> Non-DOM/HTML5 attributes </h3>
			<p>
				<ul>
					<li>
						Key
					</li>
					<li>
						ref
					</li>
					<li>
						dangerouslySetInnerHTML
					</li>
				</ul>
				<p>
					So like we set className="someclass", we allso have these additional attributes available 
					in the JSX syntax, they do not map over directly like 'className' does to 'class' though.
				</p>
				
				<h4> Key </h4>
				<p>
					'key' is an optional unique identifier. The benefit of declaring a 'key',
					is forexample when a component moves up or down the hierarchy tree, maybe 
					if a user does a search. React having access to a unique identifier will be able 
					  to render this search more effectively. Imagine two items allready in the dom,
					they switch positions, react can then match the keys and move them without completely 
					rerendering their DOM. To get closer to the real answer, we would have to go through the source code 
					of course. 
					
				</p>
				<h4> Ref </h4>
				<p>
					'ref' is used for components higher up in the hierarchy to call methods on their children,
					  the following example simply shows how to access the refs a component has, 
					so we have a input field with a set ref, and the button below prints all of the refs inside 
					of the ChapterTwo component, so basically we will get a object containing all of the refs. 
					  We haven't looked at onClick methods etc. yet, all you have to do looking at this code, 
					is scroll up and look under the constructor of the ChapterTwo component, and find the method called 
					'printReferences' and it prints the object containing all of the refs, and then  'myInput' ref specifically.
					to see the output click 'f12' and go to the 'console' tab. (i have added in the component immediateChildRef,
					that has nested 'ref' inside of it, just to experiment with how many refs  this.ref would print, but aparently we
					only have access to the 'ref' of the components immediate children(the children it renders it self))
					  <p> Example: </p>
					<p> 
						<input ref="myInput" type="text" />
						<ImmediateChildRef />	
						<div className="btn btn-primary" onClick={this.printReferences}> print this components references  </div>
					</p>

					<p> 
						The following example will be more complex, and is taken from facebooks official examples, what we will show is a 
						anti-pattern, which is basically a implementation that wont work, this example will be W/O 'ref'. 
						And then the right way to do it, with 'ref'  which should clarify why 'ref' is needed.

						The usecase is that we have a InputComponent, this component renders a 
						input field and a clickable div, whenever we write something in this field the internal props are being automatically 
						updated via the onChange method, but whenever someone clicks our div, we would like the input fields text to reset
						and the field to 'focus', and to set a field 'focused' we would have to have a reference to the Node so the initial 
						example('./client/js/components/chaptertwo/refexamples/WrongInputComponent'), unfortunately this implementation is so wrong 
						that it doesn't even render. The following example: './client/js/components/chaptertwo/refexamples/CorrectInputComponent does 
						render and work fine though:
					</p>
						<p>
							<CorrectInputComponent />
						</p>
						<p>
						The thing we have to notice, is the focus() call on the domNode whenever we click the clickable div, The WrongInputComponent 
						tried to get access to the domNode by saving the domNode in a variable before rendering it, to access it for later use,
						  the problem with that is that  a render() method only returns a snapshot of the DOM in that particular moment in time, 
						  so saving a DOMNode in a variable will be undefined by the time we get to it. This tutorial was found at: 
						    <a href="https://facebook.github.io/react/docs/more-about-refs.html">
						  	Here!
						    </a>
						    Our solution differs in the usage of es6 and the way we access the domNode, they have a fancy line of code aswell, 
						    that declares 'ref' with a callback function, im not entirely sure what thats about, but it looks pretty fancy.
						</p>
				</p>
				<h4> DangerouslySetInnerHTML </h4>
				<p>
					This ref allows us to manipulate the DOM  via Strings, 
					they say its if you work with third party libraries that 
					manipulate it via String, doing it through React would allow interoperability 
				        with this libraries. They surgest that we dont use it in text and by name, so i dont 
				        think we need to spent more time on that attribut. 
					This is an example useing it though('./client/js/components/chaptertwo/DangerouslySetInnerHTMLComponent'):
					result:
					<p>
						<DangerouslySetInnerHTMLComponent />
				      </p>
				      <p>
				      		few things worth mentioning is that the tag having the attribute must not have any children(text, other tags etc.)
						and the string must be wrapped in a object and be put inside of that variable __html. And ive noticed that 
						my page just doesn't show up in its entirety if one of these things goes wrong, so JSX is definetely not as forgiving 
						as html.
				      </p>
				</p>
			</p>
			<h3> Events </h3>
			<p> 
				In JSX these are camelcased, so change becomes onChange(), click becomes onClick() etc.
				thats because not all events are the same in all browsers, so this way its normalized accross all of them.
				if you want to see how to bind a method to a component you can look at the CorrectInputComponent we had 
				above, events indepth will be covered in chapter 5. 
			</p>
			<h3> Comments </h3>
			<p>
				In JSX these can be added in two ways, either by doing it in-inline with a tag like this:
				<div /* */ className="herpderp"> this is a div with inline commenting </div>
				or as a child of the component inside angel brackets:
				Has to look in the code to see this obviously. the code is in the comments section of the ChaperTwo component.
				{/* This is a comment as a child */}
			</p>
			<h3> Special Attributes </h3>
			<p>
				Because JSX transforms to pure javascript, there is a few keywords that are off-limit, such as 
				'for' and 'class'.
				  There is a html attribute called 'for' though, so to use this its changed to 'htmlFor',
				and this is allso why the 'class' attribute has been changed to 'className'. and then we have 
				the inline styles, to show how to do this, ive made a object right above this components render method, 
				that contains some styles we're going to apply this div:
				<p>
				<div style={styles}> inline styles are bad? </div>
				</p>
				And notice how the css names are all camelCase, comma seperated and values are inside strings.
				And just remember, in-line styles are as common in the react world as any other place,
				so you probably wont have to deal too much with it. Dispite some argue that a react components encapsulation 
				is enhanced by doing the CSS inside every component, but since every component usually is affected by its surroundings,
				it will be hard to keep track of the exact CSS being applied, and besides that - even though a component is reusable maybe the 
				style wont be relevant in all cases.
			</p>
			<h3> At the end </h3>
			<p>
				JSX is just transpiled into regular javascript and hence, as said earlier, is not required when writeing React.
				There is several tips and tricks to make pure javascript easier to pull off, 
				but we wont get into them here. Should seek out the official docs if interested.
			</p>
				
		</div>
	  );
	}

}
