import { useRef, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import accommodationTypesData from '../../data/accommodationTypes.json';

import {
	getSearchAccommodationsResults,
	setSearchAccommodationsUserSelected,
} from '../../state/accommodations/accommodationsActions';

import './Home.css';

function Home() {
	const history = useHistory();
	const dispatch = useDispatch();
	const accommodationTypes = useRef(accommodationTypesData.accommodationTypes);
	const [region, setRegion] = useState('Auckland');
	const [accommodationType, setAccommodationType] = useState('hotel');
	const [accommodationMaxPeople, setaccommodationMaxPeople] = useState(0);
	const [amountOfPeople, setAmountOfPeople] = useState(1);
	const [amountOfNights, setAmountOfNights] = useState(1);

	useEffect(() => {
		accommodationTypes.current.forEach((accommodation) => {
			if (accommodation.slug === accommodationType) {
				setaccommodationMaxPeople(accommodation.maxOfPeople);
			}
		});
	}, [accommodationType]);

	const numOfOptions = (numOfOptions) => {
		const options = [];
		for (let i = 1; i <= numOfOptions; i++) {
			const option = (
				<option key={i} value={i}>
					{i}
				</option>
			);
			options.push(option);
		}
		return options;
	};

	const handleAccommodationTypesSelect = (e) => {
		setAccommodationType(e.currentTarget.value);
	};

	const handleRegionsSelect = (e) => {
		setRegion(e.currentTarget.value);
	};

	const handlePeopleCountSelect = (e) => {
		setAmountOfPeople(+e.currentTarget.value);
	};

	const handleNightCountSelect = (e) => {
		setAmountOfNights(+e.currentTarget.value);
	};

	const onSelectFormSubmit = (e) => {
		e.preventDefault();
		dispatch(
			setSearchAccommodationsUserSelected(
				region,
				accommodationType,
				amountOfPeople,
				amountOfNights
			)
		);
		dispatch(getSearchAccommodationsResults(region, accommodationType));
		history.push('/search');
	};

	return (
		<div className='home'>
			<div className='home-container container'>
				<h1>Looking for a trip?</h1>
				<form onSubmit={onSelectFormSubmit}>
					<div className='form-link'>
						<Link className='form-popular-btn' to='/popular'>
							Looking for popular accommodations?
						</Link>
					</div>

					<div className='form-main-container'>
						<div className='form-left-container'>
							<div className='region-container select-container'>
								<h3>City/Region:</h3>
								<select
									name='regions'
									className='regions-dropdown dropdown'
									onChange={handleRegionsSelect}
									value={region}
								>
									<option value='Auckland'>Auckland</option>
									<option value='Dunedin'>Dunedin</option>
									<option value='Wellington'>Wellington</option>
									<option value='Christchurch'>Christchurch</option>
								</select>
							</div>
							<div className='accommodation-types-container select-container'>
								<h3>Accommodation type:</h3>

								<select
									name='accommodation-types'
									className='accommodation-types-dropdown dropdown'
									onChange={handleAccommodationTypesSelect}
									value={accommodationType}
								>
									{accommodationTypes.current.map((accommodationType) => (
										<option
											key={accommodationType.id}
											value={accommodationType.slug}
										>
											{accommodationType.type}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='form-right-container'>
							<div className='people-count-container select-container'>
								<h3>Amount of people:</h3>

								<select
									name='people-count'
									className='people-count-dropdown dropdown'
									onChange={handlePeopleCountSelect}
									value={amountOfPeople}
								>
									{numOfOptions(accommodationMaxPeople)}
								</select>
							</div>
							<div className='nights-count-container select-container'>
								<h3>Amount of nights:</h3>

								<select
									name='nights-count'
									className='nights-count-dropdown dropdown'
									onChange={handleNightCountSelect}
									value={amountOfNights}
								>
									{numOfOptions(7)}
								</select>
							</div>
						</div>
					</div>
					<div className='form-button'>
						<button className='form-submit-btn' type='submit'>
							Search
						</button>
					</div>
				</form>
				{/* <span style={{ color: 'red' }}>{region}</span>{' '}
				<span
					style={{ color: 'red' }}
				>{`${accommodationType}(${accommodationMaxPeople})`}</span>{' '}
				<span style={{ color: 'red' }}>{amountOfPeople}</span>{' '}
				<span style={{ color: 'red' }}>{amountOfNights}</span>{' '} */}
			</div>
		</div>
	);
}

export default Home;
