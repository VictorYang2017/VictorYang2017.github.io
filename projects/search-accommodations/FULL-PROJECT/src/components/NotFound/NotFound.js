import { Link } from 'react-router-dom';

import './NotFound.css';

const NotFound = () => {
	return (
		<div className='not-found'>
			<div className='not-found-container'>
				<Link to='/' className='back-home'>
					Back to Home
				</Link>
				<div className='message'>
					<span>Sorry, we could not find the page you are looking for!</span>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
