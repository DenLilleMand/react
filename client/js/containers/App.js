import React, { Component } from 'react';
import CounterApp from './CounterApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';
import History from 'react-router/lib/BrowserHistory';
import Router from "../components/Router";
import Header from '../components/core/Header';
import Footer from '../components/core/Footer';


const history = new History;
const redux = createRedux(stores);

export default class App extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {

    }
  }
  render(){
    	return(
		<Provider redux={redux}>
			{() => <Router {...{ history }} />}
		</Provider>
	);
  }
}
