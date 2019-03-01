import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import About from './components/about/About';
import Services from './components/services/Services';
import Migration from './components/services/Migration/Migration';
import Microservices from './components/services/Microservices/Microservices';
import Devops from './components/services/Devops/Devops';
import Articles from './components/articles/Articles';

export default () => (
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/services' exact component={Services} />
		<Route path='/services/cloud_migration' exact component={Migration} />
		<Route path='/services/microservices' exact component={Microservices} />
		<Route path='/services/devops' exact component={Devops} />
		<Route path='/articles' exact component={Articles} />
		<Route path='/about' exact component={About} />

		{/* Finally, catch all unmatched routes */}
		<Route component={NotFound} />
	</Switch>
);
