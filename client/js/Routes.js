import React from "react";
import {Route} from "react-router";
import {DefaultRoute} from "react-router";
import App from "./components/App";
import About from "./components/About";
import ChapterOne from "./components/chapterone/ChapterOne";
import ChapterTwo from "./components/chaptertwo/ChapterTwo";
import ChapterThree from "./components/chapterthree/ChapterThree";
import ChapterFour from "./components/chapterfour/ChapterFour";
console.log('Routes run');

export default (
	<Route name="app" path="/" handler={App}>
		<Route path="/about" handler={About}/>
		<Route path="/chapters/chapterone" handler={ChapterOne} />
		<Route path="/chapters/chaptertwo" handler={ChapterTwo} />
		<Route path="/chapters/chapterthree" handler={ChapterThree} />
		<Route path="/chapters/chapterfour" handler={ChapterFour} />
		<DefaultRoute name="default" handler={About}/>
	</Route>
);
