import Router from "react-router";
import routes from "./Routes";

console.log('Router.js runs');
let location = () => {
	if(typeof window !== undefined){
	  return Router.historyLocation;
	}

}

export default Router.create({
	routes:routes,
	location:location()
});
