import React from 'react';
import { Router } from 'react-router';
import Routes from './Routes';
import Footer from "./core/Footer";
import Header from "./core/Header";

export default class AppRouter extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired
  }

  render() {
    return(
    	<Router {...this.props}>
		{Routes}
	</Router>
    );
  }
}
