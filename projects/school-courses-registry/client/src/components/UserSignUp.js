// Import libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import components
import Errors from './error/Errors';

class UserSignUp extends Component {
	state = {
		firstName: '',
		lastName: '',
		emailAddress: '',
		password: '',
		confirmPassword: '',
		errors: [],
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
		if (this.state.password !== this.state.confirmPassword) {
			this.setState({
				errors: ['Password and confirm password does not match.'],
			});
		} else {
			try {
				const errors = await actions.signUp({
					firstName: this.state.firstName,
					lastName: this.state.lastName,
					emailAddress: this.state.emailAddress,
					password: this.state.password,
				});
				// Check for if user sign up successfully and run specific code
				if (errors.length) {
					this.setState({ errors });
				} else {
					await actions.signIn(this.state.emailAddress, this.state.password);
					this.props.history.push('/');
				}
			} catch (error) {
				this.props.history.push('/error');
			}
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
					<h2>Sign Up</h2>
					{this.state.errors.length > 0 && (
						<Errors errors={this.state.errors} />
					)}
					<form onSubmit={this.submit}>
						<label htmlFor='firstName'>First Name</label>
						<input
							id='firstName'
							name='firstName'
							type='text'
							value={this.state.firstName}
							onChange={this.handleInputChange}
						/>
						<label htmlFor='lastName'>Last Name</label>
						<input
							id='lastName'
							name='lastName'
							type='text'
							value={this.state.lastName}
							onChange={this.handleInputChange}
						/>
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
						<label htmlFor='confirmPassword'>Confirm Password</label>
						<input
							id='confirmPassword'
							name='confirmPassword'
							type='password'
							value={this.state.confirmPassword}
							onChange={this.handleInputChange}
						/>
						<button className='button' type='submit'>
							Sign Up
						</button>
						<button className='button button-secondary' onClick={this.cancel}>
							Cancel
						</button>
					</form>
					<p>
						Already have a user account? Click here to{' '}
						<Link to='/signin'>sign in</Link>!
					</p>
				</div>
			</>
		);
	}
}

export default UserSignUp;
