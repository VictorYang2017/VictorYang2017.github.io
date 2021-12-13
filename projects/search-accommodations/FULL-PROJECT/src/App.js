import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import PopularResults from './components/popularResults/PopularResults';
import NotFound from './components/NotFound/NotFound';

import RouteCheck from './components/route/RouteCheck';

import './App.css';

const App = () => {
	return (
		<div className='App'>
			<h1>HELLO WORLD</h1>
			<div className='main-container'>
				<div className='app-container container'>
					<Router basename={'/projects/search-accommodations'}>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/popular' component={PopularResults} />
							<RouteCheck path='/search' component={SearchResults} />
							<Route path='*' component={NotFound} />
						</Switch>
					</Router>
				</div>
			</div>
		</div>
	);
};

export default App;
