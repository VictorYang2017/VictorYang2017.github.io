import {
	POPULAR_ACCOMMODATIONS_REQUEST,
	POPULAR_ACCOMMODATIONS_RESULTS,
	POPULAR_ACCOMMODATIONS_RESULTS_RESET,
	SEARCH_ACCOMMODATIONS_REQUEST,
	SEARCH_ACCOMMODATIONS_RESULTS,
	SEARCH_ACCOMMODATIONS_USER_SELECTED,
	SEARCH_ACCOMMODATIONS_RESULTS_RESET,
} from './accommodationsConstants';

// Popular accommodations reducers
const popularAccommodationsInitialState = {
	loading: false,
	popularAccommodationsResults: [],
};

const popularAccommodationsReducer = (
	state = popularAccommodationsInitialState,
	action
) => {
	switch (action.type) {
		case POPULAR_ACCOMMODATIONS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case POPULAR_ACCOMMODATIONS_RESULTS:
			return {
				loading: false,
				popularAccommodationsResults: action.payload,
			};
		case POPULAR_ACCOMMODATIONS_RESULTS_RESET:
			return {
				loading: false,
				popularAccommodationsResults: [],
			};
		default:
			return state;
	}
};

// Search accommodations reducers
const searchAccommodationsInitialState = {
	loading: false,
	searchAccommodationsResults: [],
	userSelected: {},
};

const searchAccommodationsReducer = (
	state = searchAccommodationsInitialState,
	action
) => {
	switch (action.type) {
		case SEARCH_ACCOMMODATIONS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case SEARCH_ACCOMMODATIONS_RESULTS:
			return {
				...state,
				loading: false,
				searchAccommodationsResults: action.payload,
			};
		case SEARCH_ACCOMMODATIONS_USER_SELECTED:
			return {
				...state,
				loading: false,
				userSelected: action.payload,
			};
		case SEARCH_ACCOMMODATIONS_RESULTS_RESET:
			return {
				loading: false,
				searchAccommodationsResults: [],
				userSelected: {},
			};
		default:
			return state;
	}
};

export { popularAccommodationsReducer, searchAccommodationsReducer };
