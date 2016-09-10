// Require any dependency here for Webpack to bundle
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, Navigation, browserHistory} from 'react-router';

import Main from './components/main';

class App extends React.Component{
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Main}/>
		</Route>
	</Router>
), document.getElementById('app-container'))
