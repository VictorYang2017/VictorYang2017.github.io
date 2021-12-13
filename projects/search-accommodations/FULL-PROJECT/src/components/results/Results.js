import { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../modal/Modal';

import './Results.css';

function Results({ accommodations, userEnteredData, title }) {
	const [isOpen, setIsOpen] = useState(false);
	const [clickedAccommodation, setClickedAccommodation] = useState({});

	const handleOpenModal = (accommodation) => {
		setIsOpen(true);
		setClickedAccommodation(accommodation);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
		setClickedAccommodation({});
	};

	return (
		<div className='results'>
			<div className='results-container container'>
				<Link className='back-home' to='/'>
					Back to home
				</Link>
				<h1>{title}</h1>
				<div className='accommodations'>
					{accommodations.map((accommodation, i) => {
						return (
							<div
								className='accommodation'
								key={i}
								onClick={() => {
									handleOpenModal(accommodation);
								}}
							>
								<div className='accommodation-img'>
									<div
										style={{
											backgroundImage: `url(${
												require(`../../assets/${accommodation.images[0].url}`)
													.default
											})`,
										}}
										className='background-img'
									></div>
								</div>
								<div className='accommodation-name'>
									<h4>{accommodation.name}</h4>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			{isOpen ? (
				<Modal onClose={handleCloseModal}>
					<div className='accommodation-details'>
						<div className='accommodation-details-imgs'>
							<div className='accommodation-details-img-one accommodation-details-img'>
								<div
									style={{
										backgroundImage: `url(${
											require(`../../assets/${clickedAccommodation.images[1].url}`)
												.default
										})`,
									}}
									className='accommodation-details-background-img'
								></div>
							</div>
							<div className='accommodation-details-img-two accommodation-details-img'>
								<div
									style={{
										backgroundImage: `url(${
											require(`../../assets/${clickedAccommodation.images[2].url}`)
												.default
										})`,
									}}
									className='accommodation-details-background-img'
								></div>
							</div>
						</div>

						<div className='accommodation-details-infos'>
							<div className='accommodation-details-infos-left'>
								<div className='accommodation-details-region accommodation-details-info'>
									<span>{clickedAccommodation.region}</span>
								</div>
								<div className='accommodation-details-name accommodation-details-info'>
									<span>{clickedAccommodation.name}</span>
								</div>
							</div>

							<div className='accommodation-details-infos-right'>
								<div className='accommodation-details-minmax-people accommodation-details-info'>
									<span>{`${clickedAccommodation.minOfPeople} - ${clickedAccommodation.maxOfPeople}/people`}</span>
								</div>
								<div className='accommodation-details-price-per-night accommodation-details-info'>
									<span>{`$${clickedAccommodation.pricePerNight}/night`}</span>
								</div>
							</div>
						</div>

						<div className='accommodation-details-description-infos'>
							<div className='accommodation-details-description'>
								<p>
									Nunc imperdiet, dolor eget egestas facilisis, augue magna
									viverra nulla, ut feugiat orci arcu ut erat. Integer bibendum
									convallis eros, rhoncus aliquam dui tempus ut. Mauris tortor
									diam, ultricies ac mollis at, viverra at sem. Vivamus eu
									feugiat mi. Nam pharetra bibendum blandit. Ut mollis quis leo
									a aliquet. Donec efficitur, nisi et ultrices feugiat, enim
									elit auctor quam, in aliquet ipsum urna et dolor. Phasellus
									cursus porttitor sapien in pulvinar. Phasellus imperdiet sem
									eu ex faucibus, a convallis arcu egestas. Nunc lacus massa,
									aliquam eget imperdiet ut, condimentum in dolor. Aenean
									tristique elit libero, ut pulvinar velit bibendum eget. In
									semper elit eu felis convallis sodales.
								</p>
								<p>
									Mauris non ante eu nisl fermentum imperdiet vitae at ante.
									Morbi eget lacinia lorem. Maecenas scelerisque dignissim enim
									eu gravida. Aliquam euismod, urna sed semper gravida, tellus
									ante auctor leo, vel sagittis nunc elit et leo. Etiam ultrices
									viverra bibendum. Quisque at ante vel libero tincidunt egestas
									sed at magna. Donec lobortis non eros id suscipit.
								</p>
								<p>
									Pellentesque commodo venenatis lectus non feugiat. Quisque
									semper turpis sed viverra rutrum. In hac habitasse platea
									dictumst. Nam lacus velit, mollis ac arcu a, molestie
									condimentum tellus. Etiam eget mi eget nunc sagittis
									porttitor. Vivamus sed ex justo. Maecenas elit magna, finibus
									id faucibus sed, luctus at justo.
								</p>

								<ul>
									<li>
										Vivamus eget elit egestas, dignissim enim a, porta arcu.
									</li>
									<li>Proin pretium tortor id finibus imperdiet.</li>
									<li>
										In id justo id libero sollicitudin cursus sed eleifend sem.
									</li>
									<li>Integer sit amet mauris ac quam tempor venenatis.</li>
									<li>Fusce semper tellus vitae odio pharetra finibus.</li>
									<li>Proin rhoncus ligula porta commodo lobortis.</li>
									<li>Nulla laoreet tortor ac dictum vulputate.</li>
									<li>Integer sit amet mauris ac quam tempor venenatis.</li>
									<li>Fusce semper tellus vitae odio pharetra finibus.</li>
								</ul>
							</div>

							{userEnteredData ? (
								<div className='accommodation-details-total-price'>
									<span>{` Total: $${
										userEnteredData.numOfNights *
										clickedAccommodation.pricePerNight
									} NZD`}</span>
								</div>
							) : (
								''
							)}
						</div>
					</div>
				</Modal>
			) : (
				''
			)}
		</div>
	);
}

export default Results;
