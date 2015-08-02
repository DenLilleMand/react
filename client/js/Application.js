import React from "react";
import Marty from "marty";
import actions from "./actions";
import stores from "./stores";
import queries from "./queries";
import sources from "./sources";
import Router from "./Router";
import RealApp from "./components/App";
console.log('Application runs')

class Application extends Marty.Application {
  constructor(options) {
    super(options);
    this.register(actions);
    this.register(stores);
    this.register(queries);
    this.register(sources);
    this.router = Router;
  }
}

var app = new Application();
var { ApplicationContainer }  = require('marty');

app.router.run(function(Handler,state){
	React.render((
		<ApplicationContainer app={app}>
			<Handler{...state} />
		</ApplicationContainer>
	), document.getElementById("app"));
});
