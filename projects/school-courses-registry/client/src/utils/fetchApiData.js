// API base url
const apiBaseUrl = 'http://localhost:5000/api';

const api = (path, method, body, requiresAuth = false, credentials = null) => {
	const apiUrl = apiBaseUrl + path;
	let encodedCredentials = credentials;

	const options = {
		method,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	};

	if (body !== null) {
		options.body = JSON.stringify(body);
	}

	// Check if the "credentials" is an object that means user either try to sign in or sign up
	// if the "credentials" is a string that means user is already sign in and trying to do CRUD
	if (requiresAuth && typeof credentials === 'object') {
		encodedCredentials = btoa(
			`${credentials.emailAddress}:${credentials.password}`
		);
		options.headers['Authorization'] = `Basic ${encodedCredentials}`;
	} else if (requiresAuth && typeof credentials === 'string') {
		options.headers['Authorization'] = `Basic ${encodedCredentials}`;
	}

	const response = fetch(apiUrl, options);
	return response;
};

export default api;
