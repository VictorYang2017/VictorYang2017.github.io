import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
	popularAccommodationsReducer,
	searchAccommodationsReducer,
} from './accommodations/accommodationsReducers';

const mainReducer = combineReducers({
    popularAccommodationsResults: popularAccommodationsReducer,
    searchAccommodationsResults: searchAccommodationsReducer
});

const middleware = [thunk];

const store = createStore(mainReducer,{},composeWithDevTools(applyMiddleware(...middleware)));


export default store;