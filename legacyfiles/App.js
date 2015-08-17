import React, {Component} from 'react';
import ReactEdgeApp from "./ReactEdgeApp";
import { createRedux } from 'redux';
import { Provider } from 'redux/react';

const redux = createRedux();

export default class App extends Component {
  render() {
    return (
    	<Provider redux={redux}>
		{() => <ReactEdgeApp />}
	</Provider>
    );
  }
}
