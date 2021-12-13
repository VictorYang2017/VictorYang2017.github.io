import data from './testimonials/data.js';
import { capitalizeWord, capitalizeSentence } from './utils/utils.js';

const testimonials = data;

const contentHtml = document.getElementById('content');
const buttonHtml = document.querySelector('button');
const noDataHtml = document.querySelector('.no-data');

let startFromTestimonial = 5;

const testimonialsToShowFirstTime = 5;
const testimonialsToLoadEachTime = 10;

const createTestimonials = () => {
	for (let i = 0; i < testimonialsToShowFirstTime; i++) {
		createNewTestimonials(testimonials[i]);
	}
	handleLoadMoreBtnClick(testimonials);
};

const handleLoadMoreBtnClick = (testimonialsData) => {
	buttonHtml.addEventListener('click', () => {
		for (let i = 0; i < testimonialsToLoadEachTime; i++) {
			if (startFromTestimonial === testimonialsData.length) {
				buttonHtml.disabled = true;
				buttonHtml.classList.add('disabled');
				noDataHtml.style.display = 'flex';
				return;
			} else {
				const testimonialData = testimonialsData[startFromTestimonial];
				createNewTestimonials(testimonialData);
				startFromTestimonial++;
			}
		}
	});
};

// Append new data to html function
const createNewTestimonials = (testimonialData) => {
	// Create new div element
	const testimonialContainerDiv = document.createElement('div');
	const testimonialPrimaryInfoDiv = document.createElement('div');
	const testimonialUserNameDiv = document.createElement('h2');
	const testimonialUserImgDiv = document.createElement('img');
	const testimonialUserGenderDiv = document.createElement('span');
	const testimonialUserEmailDiv = document.createElement('div');
	const testimonialDiv = document.createElement('p');

	// Append title and description new element to postDiv element
	testimonialContainerDiv.appendChild(testimonialPrimaryInfoDiv);
	testimonialContainerDiv.appendChild(testimonialUserGenderDiv);
	testimonialContainerDiv.appendChild(testimonialUserEmailDiv);
	testimonialContainerDiv.appendChild(testimonialDiv);
	testimonialPrimaryInfoDiv.appendChild(testimonialUserImgDiv);
	testimonialPrimaryInfoDiv.appendChild(testimonialUserNameDiv);

	// Append postDiv to the content html
	contentHtml.appendChild(testimonialContainerDiv);

	// Give class to postDiv title div and description div
	testimonialContainerDiv.classList.add(
		'testimonial-container',
		`testimonial-${testimonialData.id}`
	);
	testimonialPrimaryInfoDiv.classList.add('testimonial-user-primary-info');
	testimonialUserNameDiv.classList.add('testimonial-user-name');
	testimonialUserImgDiv.classList.add('testimonial-user-img');
	testimonialUserGenderDiv.classList.add('testimonial-user-gender');
	testimonialUserEmailDiv.classList.add('testimonial-user-email');
	testimonialDiv.classList.add('user-testimonial');

	// Give content to title div and description div to show on web page
	testimonialUserNameDiv.textContent = `${testimonialData.firstName} ${testimonialData.lastName}`;
	testimonialUserGenderDiv.textContent = capitalizeWord(testimonialData.gender);
	testimonialUserEmailDiv.textContent = testimonialData.email;
	testimonialDiv.textContent = capitalizeSentence(testimonialData.testimonial);
	testimonialUserImgDiv.src = testimonialData.userImage;
	testimonialUserImgDiv.alt =
		`${testimonialData.firstName} ${testimonialData.lastName}`.toLowerCase();

};

createTestimonials();
