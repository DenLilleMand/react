import React from "react";
import {Route} from "react-router";
import {DefaultRoute} from "react-router";
import HomePage from "./HomePage";
import About from "./About";
import Application from "./Application";
import ChapterOne from "./chapterone/ChapterOne";
import ChapterTwo from "./chaptertwo/ChapterTwo";
import ChapterThree from "./chapterthree/ChapterThree";
import ChapterFour from "./chapterfour/ChapterFour";
import ChapterNineteen from './chapternineteen/ChapterNineteen';
import ChapterTwenty from './chaptertwenty/ChapterTwenty';
import ChapterTwentyOne from './chaptertwentyone/ChapterTwentyOne';
import ChapterTwentyThree from './chaptertwentythree/ChapterTwentyThree';


export default (
	<Route component={Application}>
		<Route path="/" component={HomePage}/>
		<Route path="/about" component={About}/>
		<Route path="/chapters/chapterone" component={ChapterOne} />
		<Route path="/chapters/chaptertwo" component={ChapterTwo} />
		<Route path="/chapters/chapterthree" component={ChapterThree} />
		<Route path="/chapters/chapterfour" component={ChapterFour} />
		<Route path="/chapters/chapternineteen" component={ChapterNineteen} />
		<Route path="/chapters/chaptertwenty" component={ChapterTwenty} />
		<Route path="/chapters/chaptertwentyone" component={ChapterTwentyOne} />
		<Route path="/chapters/chaptertwentythree" component={ChapterTwentyThree} />
	</Route>
);
