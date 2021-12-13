import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Results from '../results/Results';
import { SEARCH_ACCOMMODATIONS_RESULTS_RESET } from '../../state/accommodations/accommodationsConstants';

function SearchResults() {
	const dispatch = useDispatch();

	const searchAccommodations = useSelector((state) => {
		return state.searchAccommodationsResults;
	});
	const { searchAccommodationsResults, userSelected } = searchAccommodations;

	useEffect(() => {
		return () => {
			dispatch({ type: SEARCH_ACCOMMODATIONS_RESULTS_RESET });
		};
	}, [dispatch]);

	return (
		<div className='search-results'>
			<Results
				accommodations={searchAccommodationsResults}
				userEnteredData={userSelected}
				title="Results"
			/>
		</div>
	);
}

export default SearchResults;
