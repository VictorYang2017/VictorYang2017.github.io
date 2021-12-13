// Import libraries
import React from 'react';

const Errors = ({ errors }) => {
	return (
		<>
			<div className='validation--errors'>
				<h3>Validation Errors</h3>
				<ul>
					{errors.length > 0 &&
						errors.map((error, i) => <li key={i}>{error}</li>)}
				</ul>
			</div>
		</>
	);
};

export default Errors;
