// Import libraries
import React, { Component } from 'react';
import Cookies from 'js-cookie';

// Import utils
import api from '../utils/fetchApiData';

const authContext = React.createContext();

const Provider = authContext.Provider;
const Consumer = authContext.Consumer;

class AuthContextProvider extends Component {
	state = {
		authenticatedUser: Cookies.getJSON('authenticatedUser') || null,
		userCredentials: Cookies.get('userCredentials') || null,
	};

	// Use/call when user need to sign in
	signIn = async (emailAddress, password) => {
		const response = await api('/users', 'GET', null, true, {
			emailAddress,
			password,
		});
		// Check for status code and run specific code
		if (response.status === 200) {
			const user = await response.json();
			// Encode user email and password to base64 string
			const userCredentials = btoa(`${emailAddress}:${password}`);
			this.setState({ authenticatedUser: user, userCredentials });
			// Set authenticatedUser and userCredentials cookies
			Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 2 });
			Cookies.set('userCredentials', userCredentials, { expires: 2 });
			return user;
		} else if (response.status === 401) {
			this.setState({ authenticatedUser: null, userCredentials: null });
			// Remove authenticatedUser and userCredentials cookies
			Cookies.remove('authenticatedUser');
			Cookies.remove('userCredentials');
			return null;
		} else {
			throw new Error();
		}
	};

	// Use/call when user need to sign up
	signUp = async (newUserData) => {
		const { firstName, lastName, emailAddress, password } = newUserData;
		const response = await api('/users', 'POST', {
			firstName,
			lastName,
			emailAddress,
			password,
		});
		// Check for status code and run specific code
		if (response.status === 201) {
			return [];
		} else if (response.status === 400) {
			const { errors } = await response.json();
			return errors;
		} else {
			throw new Error();
		}
	};

	// Use/call when user need to sign out
	signOut = () => {
		this.setState({ authenticatedUser: null, userCredentials: null });
		// Remove authenticatedUser and userCredentials cookies
		Cookies.remove('authenticatedUser');
		Cookies.remove('userCredentials');
	};

	render() {
		// Value pass to context provider
		const value = {
			authenticatedUser: this.state.authenticatedUser,
			userCredentials: this.state.userCredentials,
			actions: {
				signIn: this.signIn,
				signUp: this.signUp,
				signOut: this.signOut,
			},
		};
		return <Provider value={value}>{this.props.children}</Provider>;
	}
}

export { AuthContextProvider, Consumer };
