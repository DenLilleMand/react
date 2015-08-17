import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import Header from './todoexample/components/Header';
import MainSection from './todoexample/components/MainSection';
import * as TodoActions from './todoexample/actions/TodoActions';

export default class ChapterTwenty extends Component {

  render() {
    return (
      <div>
      <h1> The Flux Implementation: Redux </h1>
      <h2> The Intro </h2>
      <p> 
      There is alot of implementations of flux, the one we're going to go through is Redux.
      We're going to go through the official tutorial of the todo-app step-by-step and look at the 
      different components and their role. 
      </p>
      <h2> The TodoMVC example </h2>
      <p>
      This is the TodoComponent:
      <Connector select={state => ({ todos: state.todos })}>
      	{ this.renderChild }
      </Connector>
      </p>
      <p>
      	As we can see in the code located at './client/js/components/chaptertwenty/todoexample',
	Ive adapted the code in the tutorial to my site, but since the stores are being loaded,
	when we render the app for the first time, we wern't able to keep it all together, i had 
	to move the Todos.js(TodoStore) into the root components/stores directory, everything else 
	was able to be loaded at "runtime".
      </p>
      <p>
      	We're going to walk through the basic components in Redux, which are Actions, Reducers and a Store.
      </p>
      <h2> The Actions, ActionCreators and our code  </h2>
      <p>
      <p>
      	Actions are the payloads of data that goes from our application to our store. They are the only objects 
	able to mutate the stores data. In the sense that a Ajax call returning some data or a react component cannot directly write 
	to the store, it has to create a action object first. This action object we can send with the store.dispatch(), we'll 
	get to that.

	The action object requires a type field, that usually contains a string constant. This type field indicates 
	the kind of action that is being performed, like 'ADD_TODO' if we look at our Actions  in ./todoexample/actions/TodoActions
	file, we can see that we have a type field and a text field. Then we import our string 
      constants from ./todoexample/constants/ActionTypes.js in order to avoid spelling mistakes, when we're not doing 
      a staticly typed languaged we really have to be careful when useing javascripts version of Enums, which is string constants.
	Besides the 'type' field, its actually up to us, to construct these Action objects by ourselfes, there is a best-practices 
      repository at <a href="https://github.com/acdlite/flux-standard-action">https://github.com/acdlite/flux-standard-action  </a> 
      . Some of the surgested ways of doing it, is giving the action a chance to return failure/success, a field to contain 
      the data. In out todo-app it could be like this:
	</p>
	<p>
	
  		type: 'ADD_TODO'
  		payload: 
		  text:'herpderp'
  		error: true
	
	</p>
	<p>
	
  		type: 'ADD_TODO'
  		payload: new Error()
  		error: true
	
	</p>
	There is a bunch of other good advice on that site, like how to stash additional information, that isn't part of the payload
	in a meta variable etc.

	<p>
	  In the todo-example we can see how the TodoItem.js component, knows
	  about the actions Delete and Edit, because the buttons for 
	    these options are put inside of our TodoItem, but these 
	  methods are just  props, like any simple data-prop, there is no  
	  Singleton import of those actionMethods directly into TodoItem com-
	    ponent, that might've been a valid thing in Java to do, 
	  but not here.  Our Root component 
	  imports these action methods, and provide them as props 
	  down the chain, and the components that doesn't need them on 
	  the way, just pass them along. In our example this very file 
	  youre in right now, ChapterTwenty.js, is the root component So 
	  this is the component that imports the TodoActions as you can 
	  see in the top. 
	  We're not in the root of the entire application though, because
	  this is an embedded example inside of a whole tutorial example,
	  we actually just proved that it is possible to import the TodoActions 
	  at the FIRST component that uses any of those, and then that 
	  component will pass it along to the next components, So that the entire
	  tree of components doesn't have to pass down ALL actionmethods, but
	  that its maybe a good idea to seperate them into domains, 
	  and then make the root component of that domain import those actions. 
	  <p>
	  And it shows how our components is just components despite  of 
	  their position in the hierarchy of components, 
	  so we can abuse them as much as possible and make the worst react app ever, where every component import all of the actions that it needs,
	  or we can put alot of thouth into where we declare state and import 
	  ActionMethods and get a very efficient app. 
	  </p>
	  <p>
	    The store.dispatch() that dispatches these Actions, can be found
	    at the very bottom of this ChapterTwenty.js file, inside of the
	    renderChild() method, and it isn't shown as store.dispatch() it 
	    is shown as a bindActionCreators(TodoActions,dispatch), 
	    so when we read about this solution, the official docs says 
	    that this isn't the complete standard thing to do, normally the 
	    components should have access directly to the store and be able to 
	    call store.dispatch(someAction). Our solution is the solution
	     you use when you dont want your components to know about redux,
	     you dont see any store or redux imports in any of our components.
	       Which is a nice thing i think, because it makes 
	     our components have less dependencies all over. 
	  </p>
	  <p>
	    The docs for bindActionCreators: <a href="http://gaearon.github.io/redux/docs/api/bindActionCreators.html"> bindActionCreators </a>
		and the docs for ActionCreator:
		  <a href="http://gaearon.github.io/redux/docs/Glossary.html#action-creator"> action-creator </a>
		  So the ActionCreator is like a FactoryPattern 
	      for Actions, so its a function that generates actions. 
		  But as the example goes on, we realize that we've been 
		cheated by the example, because we called our folder './Actions'
	      and thouth that that entire folder was just Actions and
	      ActionCreators was something else, but its not, both our 
		Actions and ActionCreators are to be found in our 
	      'TodoActions.js' file, The ActionCreators are the functions we 
	      export, while the actions are the objects being returned 
		from these functions.
		And that is why it makes sense that we import TodoActions, 
	      and give them as parameter to 
	      bindActionCreators(actionCreators,dispatch) method.  
		</p>
	      <p>
		we still have one question mark in the binding of our 
	      actionCreators, and thats the dispatch object, what is the 
	      dispatch object, how does it know about our store and following the trail of state and props 
	      we can't see it being initialized anywhere, until we take it in as parameter in the renderChild() 
	      method in the bottom of this ChapterTwenty.js component. 
	      </p>
	      <p>
	      	To investigate this, we have to look closely in the code and follow the trail, that might be a shorter journey 
		than we expect though. So if you take a look at the renderChild() method, this method declaration has funny looking
		  syntax parameter wise, this is called 'tupple' in other languages but is called 'Destructuring' in es6. And it 
		is basically a way of extracting only the variable that we need from a object. There is a pretty nice looking article 
		at:<a href="https://strongloop.com/strongblog/getting-started-with-javascript-es6-destructuring/"> destructuring function arguments </a>.
		One of their best examples is showing how we used to have a optional  Options argument at the end of most functions, and instead 
		of that its easier to pass a Options object to a function, and it makes it easier for the guy writeing the function to make optional parameters.
		At the very top of every component, you see this syntax aswell, in the react import statement we often just 'destructure' the react class
		  to get the 'Component' class.
	      </p>
	      <p>
	    	So what we know now is that we have a renderChild method that takes one object, with a todos and dispatch variable.
		So if we take a look at the code calling the renderChild() method, its located in this very render() method. We 
		can't see the dispatch object being passed, the only thing we can see is the 'todos' object, so theres something magical
		about this 'Connector' tag that wraps our method call. If we look at the official documentation at: <a href="https://github.com/gaearon/redux">
		Official github docs  </a>  And look at the <em>smart components section</em>, we can see that the Connector wrapper tag is especially 
	      highlighted to our delight. It declares that we can observe stores using the 'Connector' tag and bind actions to the dispatcher 
	      with bindActionCreators. Which is exactly what we have in our code. We will get to our store eventually in this chapter, but 
	      i think its good to know, that we registered our store in our './client/js/containers/App' component, 
	      and used it in the createRedux(store) method, so you would think that thats how the 'Connector' knows about
	      our store.
	      </p>
	      <p>
	      	The Actions we have in our ActionCreators doesn't pass much state to the store. What would be interesting,
		would be to make a ajax call or something to a web API and load in "huge" amounts of data into the store,
		these ActionCreators would not be the regular kind though, in 'redux' the way we fetch data from a API
		is with something called  'async action creators', we dont use these in our todo-example though, 
		so i will declare chapter 21 to be a 'async action creators' chapter. 
	      </p>
		<p>
			Just to sum it up, our ActionCreators are declared to return Actions. These ActionCreators are 
			imported by a root component, that wraps a method in a 'Connector' tag, this method then has access
			to both the ActionCreators and a dispatch object, so its able to provide bindActionCreators with 
			the respective arguments, the dispatch object knows magically about our redux registered store, 
			and the end result is a 'actions' constant that has all of the ActionCreators as we know them, 
			now they just call our ActionCreator methods on the 'actions' object, and its going to automatically dispatch
			to the store.
			  So a missing link here, is how does the store handle these
			actions, well, we're going to find out.
		</p>
	  </p>
	  <h2> Reducers  </h2>
	  <p> 
	  	Actions describe the fact that something happended, but doesn't specify how our applications state changes 
		in response to that event.
	  </p>
	  <p>
	  	So i hope that we're ready to get our minds blown again, this Reducer, is a very foreign term 
		to us, its not part of the official flux architecture, its something that Redux made up. 
		But it has been playing an essential part in our todo-example nevertheless. 
		If we take a look at the './client/js/store/todos.js' This thing that we thouth was our store,
		is actually a 'Reducer', how i figuired that out was compareing <em>that</em> files code compared to the 
		example Reducer code at: <a href="http://gaearon.github.io/redux/docs/basics/Reducers.html"> Reducers </a>.
	  </p>
	 <p>
	 	So to understand where our store suddenly went, and what took its place. Lets look at our 'stores/todos.js'
		file, and go through the code.
	 </p>
	<p>
		We start out by importing all of the ActionType
		constants, this makes sense because this is 
		the code that catches our Actions, and our 
		Actions we're declared with these very same,
		constants, so the code receiveing them should 
		declare its receivers with the same constants.
	</p>
	<p>
		We then declare a initialState, that makes
		sense because the initialState only gets handed to the 
		reducer the first time the reducer runs, the logical 
		way of looking at the code would be that the initialState
		object overrides our state everytime it runs, but as i said,
		thats not the case. As you might've noticed, the initialState
		object contains the first data we can see in our Todos 
		example. So the magical thing about these reducers is 
		that after the first time its called, then it starts to build
		the state for every call, being made to the reducer.
		This structure can be described as this:
		<p>
		  <em>(previousState, action) => newState</em>
		</p>
		The syntax used to declare our initialState object,
		to the state object in the parameters is es6 
		related and documented at: <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/default_parameters"> link </a> .
	</p>
	<p>
		inside of our 'reducer' we use a switch case,
		that uses our ActionType constants as to know 
		which method is suppose to be called, if we take 
		 ADD_TODO as our first example, we see some shady 
	       syntax again. The first realization we're going to make 
	       is that the entire state of our application is just 
	       one array, and thats simply because its an example tutorial,
	       when im going to try to make my own example application, in
	       other of the later chapters, im going to make some more logical 
	       choices of state objects, and i'll show how to do seperate 
	       reducers, since this reducer allso just contains the 
	       Todo domain, what if we had a User domain? surely we're 
		 not suppose to put that code with this, so i will walk through
	       that. Even in this example it might make sense to move the 
	       filtering logic out of the todos reducer. 
	</p>
	<h2> Store </h2>
	<p>
	     As we're going to see in my own example application, the Store is just a combination of several 
	     Reducers, that each mutate the same piece of state. 
	</p>
	<h2> Data Flow </h2>
	<p>
	     
	    


	</p>

	</p>
	
      </div>
    );
  }

  renderChild({ todos, dispatch}) {
      const actions = bindActionCreators(TodoActions,dispatch);
      return (
		<p> 
				<Header addTodo={actions.addTodo} />
				<MainSection todos={todos} actions={actions} />
		 </p>
      );
  }
}
