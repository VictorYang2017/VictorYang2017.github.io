// Import libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import authContext
import { AuthContextProvider } from './authContext';

// Import css
import './index.css';

// Wrap "App" inside "AuthContextProvider" so that every component inside of "App" can use authContext state/value
ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
