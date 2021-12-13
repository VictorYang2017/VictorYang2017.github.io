import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RouteCheck = ({ component: Component, ...rest }) => {
	const accommodation = useSelector(
		(state) => state.searchAccommodationsResults.searchAccommodationsResults
	);
	return (
		<Route
			{...rest}
			render={(props) => {
				return (
					<>
						{accommodation.length > 0 ? (
							<Component {...props} />
						) : (
							<Redirect to='/' />
						)}
					</>
				);
			}}
		/>
	);
};

export default RouteCheck;
