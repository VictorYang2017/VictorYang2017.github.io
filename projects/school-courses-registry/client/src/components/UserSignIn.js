// Import libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import components
import Errors from './error/Errors';

class UserSignIn extends Component {
	state = {
		emailAddress: '',
		password: '',
		error: [],
	};

	componentDidMount() {
		// Get authenticatedUser and userCredentials from authContext;
		const { authenticatedUser, userCredentials } = this.props.context;
		// Redirect if user is already sign in
		if (authenticatedUser !== null && userCredentials !== null) {
			this.props.history.push('/');
		}
	}

	handleInputChange = (evt) => {
		const inputName = evt.currentTarget.name;
		const inputValue = evt.currentTarget.value;
		this.setState({ [inputName]: inputValue });
	};

	// Use/call to send user info to backend
	submit = async (evt) => {
		evt.preventDefault();
		// Get actions object from authContext;
		const { actions } = this.props.context;
		// Check if user was redirect from a specific page to this page
		const { from } = this.props.location.state || { from: { pathname: '/' } };
		try {
			const user = await actions.signIn(
				this.state.emailAddress,
				this.state.password
			);
			// Check for user response and run specific code
			if (user === null) {
				this.setState({ error: ['Sign-in unsuccessful!'] });
			} else {
				this.props.history.push(from.pathname);
			}
		} catch (error) {
			this.props.history.push('/error');
		}
	};

	cancel = (evt) => {
		evt.preventDefault();
		this.props.history.push('/');
	};

	render() {
		return (
			<>
				<div className='form--centered'>
					<h2>Sign In</h2>
					{this.state.error.length > 0 && <Errors errors={this.state.error} />}
					<form onSubmit={this.submit}>
						<label htmlFor='emailAddress'>Email Address</label>
						<input
							id='emailAddress'
							name='emailAddress'
							type='email'
							value={this.state.emailAddress}
							onChange={this.handleInputChange}
						/>
						<label htmlFor='password'>Password</label>
						<input
							id='password'
							name='password'
							type='password'
							value={this.state.password}
							onChange={this.handleInputChange}
						/>
						<button className='button' type='submit'>
							Sign In
						</button>
						<button className='button button-secondary' onClick={this.cancel}>
							Cancel
						</button>
					</form>
					<p>
						Don't have a user account? Click here to{' '}
						<Link to='/signup'>sign up</Link>!
					</p>
				</div>
			</>
		);
	}
}

export default UserSignIn;
