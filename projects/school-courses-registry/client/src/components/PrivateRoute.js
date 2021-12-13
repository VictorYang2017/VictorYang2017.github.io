// Import libraries
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Import authContext
import { Consumer } from '../authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Consumer>
			{(context) => (
				<Route
					{...rest}
					render={(props) => {
						// Get userCredentials and authenticatedUser from authContext;
						const { authenticatedUser, userCredentials } = context;
						return (
							<>
								{authenticatedUser && userCredentials ? (
									<Component {...props} context={context} />
								) : (
									<Redirect
										to={{
											pathname: '/signin',
											// Getting url location where I was redirect from
											state: {
												from: props.location,
											},
										}}
									/>
								)}
							</>
						);
					}}
				/>
			)}
		</Consumer>
	);
};

export default PrivateRoute;
