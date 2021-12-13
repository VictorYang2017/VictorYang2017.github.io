// Import libraries
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const UserSignOut = ({ context }) => {
	useEffect(() => {
		const { actions } = context;
		actions.signOut();
	}, [context]);
	return (
		<>
			<Redirect to='/' />
		</>
	);
};

export default UserSignOut;
