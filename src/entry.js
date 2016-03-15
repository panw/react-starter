// Require any dependency here for Webpack to bundle
import React from 'react';
import {render} from 'react-dom';
import {createHistory} from 'history';
import {Router, Route, IndexRoute, Link, Navigation} from 'react-router';

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

const history = createHistory()

render((
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={AutoGroup}/>
			<Route path='auto_group' component={AutoGroup}/>
			<Route path="org_spec" component={OrgSpec}/>
		</Route>
	</Router>
), document.getElementById('app-container'))
