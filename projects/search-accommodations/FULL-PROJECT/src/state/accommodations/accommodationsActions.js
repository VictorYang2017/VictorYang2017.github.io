import {
	POPULAR_ACCOMMODATIONS_REQUEST,
	POPULAR_ACCOMMODATIONS_RESULTS,
	SEARCH_ACCOMMODATIONS_REQUEST,
	SEARCH_ACCOMMODATIONS_USER_SELECTED,
	SEARCH_ACCOMMODATIONS_RESULTS,
} from './accommodationsConstants';
import accommodationsData from '../../data/accommodations.json';

// Popular accommodations actions
const getPopularAccommodationsResults = () => (dispatch) => {
	const accommodations = accommodationsData.accommodations;
	dispatch({ type: POPULAR_ACCOMMODATIONS_REQUEST });
	const popularAccommodationsResults = [];
	accommodations.forEach((accommodation) => {
		if (accommodation.popular) {
			popularAccommodationsResults.push(accommodation);
		}
	});
	dispatch({
		type: POPULAR_ACCOMMODATIONS_RESULTS,
		payload: popularAccommodationsResults,
	});
};

// Search accommodations actions
const getSearchAccommodationsResults =
	(region, accommodationType) => (dispatch) => {
		const accommodations = accommodationsData.accommodations;
		dispatch({ type: SEARCH_ACCOMMODATIONS_REQUEST });
		const filteredAccommodationsResults = [];
		accommodations.forEach((accommodation) => {
			const matchedRegion = accommodation.region === region;
			const matchedAccommodationType = accommodation.type === accommodationType;
			if (matchedRegion && matchedAccommodationType) {
				filteredAccommodationsResults.push(accommodation);
			}
		});
		dispatch({
			type: SEARCH_ACCOMMODATIONS_RESULTS,
			payload: filteredAccommodationsResults,
		});
	};

const setSearchAccommodationsUserSelected =
	(region, accommodationType, numOfPeople, numOfNights) => (dispatch) => {
		const userSelected = {
			region,
			accommodationType,
			numOfPeople,
			numOfNights,
		};
		dispatch({ type: SEARCH_ACCOMMODATIONS_REQUEST });
		dispatch({
			type: SEARCH_ACCOMMODATIONS_USER_SELECTED,
			payload: userSelected,
		});
	};

export {
	getPopularAccommodationsResults,
	getSearchAccommodationsResults,
	setSearchAccommodationsUserSelected,
};
