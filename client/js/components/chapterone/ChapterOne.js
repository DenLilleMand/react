import React from "react";

export default class ChapterOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="centered">
      <h1> Chapter 1: A React Introduction </h1>
      <p>
      If you look in ./client/js/chapterone/ChapterOne.js you 
	will see this simple HelloWorld component ! 
      this component has a constructor that takes in props, and has a state 
      object, we <em>dont</em> use those though, they're just for the sake of semantics.
      And then we have the only method inside of our react component that actually does something right now,
      which is the render() method, the render() method is one of the 'component lifecycles' that we will talk
      about in chapter 3, and is the only one of the 'component lifecycles' that we've hooked into as of right now.
      </p>

      <p>
      This render method uses the JSX syntax, JSX we will get to in the next chapter, 
      right now we just need to notice that JSX isnt exactly HTML e.g look at our className attr for this 
	encloseing div. But it sure looks like it alot.
	</p>
      
	<h3>At first glance some would notice:</h3>
	<p>
      1. the usage of es6. its nothing fancy, es6 is up to be reviewed in 2015, 
      and everybody is using it, alot of the docs for marty is es6 friendly aswell,
	we use "babel" as a transpiler so that this is being transformed to es5 friendly syntax in production.
	What im thinking is that we might aswell get use to this kind of syntax, and it is ALOT more friendly 
      coming from object oriented languages.
	</p>

	<p>
	2. Our files postfix is  ".js" instead of ".jsx", this actually doesn't matter when we use the 
      gulp plugin "babelify", this plugin basically transpiles react and es6 at the same time, and does not 
      care about the postfix, it only requires a entry file  which in our case is "./client/js/Application.js"
      and from that entry file its going to ripple through our dependencies. 
	If we we're to use some other transpiler plugins than "babelify" like the official "react-tools" i think
      that the postfix would matter.
	</p>

      </div>
    );
  }
}
