import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

// MODULES
import SignIn from './Components/SignIn';
import Keyword from './Components/Keyword';
import Language from './Components/Language';
import Panels from './Components/Dashboard/Panels';
import Dashboard from './Components/Dashboard';

function App() {
	return (
		<div className="App">
			
			<Switch>
				<Route exact path='/' component={SignIn} />
				<Route path='/createkeyword' component={Keyword} />
				<Route path='/selectlanguange' component={Language} />
				<Route path='/panels' component={Panels} />
				<Route path='/projects/results' component={Dashboard} />
			</Switch>
		</div>
	);
}

export default withRouter(App);
