// Import libraries
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import withAuthContext from './utils/authContextConsumer';
import './App.css';

// Import components
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';

import PrivateRoute from './components/PrivateRoute';

import Notfound from './components/error/Notfound';
import Forbidden from './components/error/Forbidden';
import UnhandledError from './components/error/UnhandledError';

// Config component with auth context
const HeaderWithContext = withAuthContext(Header);
const CourseDetailWithContext = withAuthContext(CourseDetail);
const CreateCourseWithContext = withAuthContext(CreateCourse);
const UpdateCourseWithContext = withAuthContext(UpdateCourse);
const UserSignInWithContext = withAuthContext(UserSignIn);
const UserSignUpWithContext = withAuthContext(UserSignUp);
const UserSignOutWithContext = withAuthContext(UserSignOut);

class App extends Component {
	state = {
		courses: [],
	};

	render() {
		return (
			<div className='App'>
				<Router>
					<HeaderWithContext />
					<main>
						<Switch>
							<Route exact path='/' component={Courses} />

							{/* Private route create course */}
							<PrivateRoute
								path='/courses/create'
								component={CreateCourseWithContext}
							/>

							{/* Private route update course */}
							<PrivateRoute
								path='/courses/:id/update'
								component={UpdateCourseWithContext}
							/>

							<Route path='/courses/:id' component={CourseDetailWithContext} />

							<Route path='/signin' component={UserSignInWithContext} />

							<Route path='/signup' component={UserSignUpWithContext} />

							<Route path='/signout' component={UserSignOutWithContext} />

							<Route path='/notfound' component={Notfound} />

							<Route path='/forbidden' component={Forbidden} />

							<Route path='/error' component={UnhandledError} />

							{/* Route not found */}
							<Route path='*' component={Notfound} />
						</Switch>
					</main>
				</Router>
			</div>
		);
	}
}

export default App;
