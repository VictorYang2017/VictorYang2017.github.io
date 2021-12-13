import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Results from '../results/Results';
import { POPULAR_ACCOMMODATIONS_RESULTS_RESET } from '../../state/accommodations/accommodationsConstants';
import { getPopularAccommodationsResults } from '../../state/accommodations/accommodationsActions';

function PopularResults() {
	const dispatch = useDispatch();

	const popularAccommodations = useSelector((state) => {
		return state.popularAccommodationsResults;
	});
	const { popularAccommodationsResults } = popularAccommodations;

	useEffect(() => {
		dispatch(getPopularAccommodationsResults());
		return () => {
			dispatch({ type: POPULAR_ACCOMMODATIONS_RESULTS_RESET });
		};
	}, [dispatch]);

	return (
		<div className='popular-results'>
			<Results accommodations={popularAccommodationsResults} title="Popular"/>
		</div>
	);
}

export default PopularResults;
