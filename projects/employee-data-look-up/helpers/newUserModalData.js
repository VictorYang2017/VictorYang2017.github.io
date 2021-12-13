const createNewUserModalData = (userData, modalContainerHtml) => {
	const modalInfoContainerHtml = modalContainerHtml.querySelector(
		'.modal-info-container'
	);
	const modalInfoContainerHtmlChildren = [...modalInfoContainerHtml.children];
	const userFullNameHtmlData =
		`${userData.name.first} ${userData.name.last}`.toLowerCase();
	const userModalChildEls = {
		img: modalInfoContainerHtmlChildren[0],
		userName: modalInfoContainerHtmlChildren[1],
		email: modalInfoContainerHtmlChildren[2],
		city: modalInfoContainerHtmlChildren[3],
		phoneNumber: modalInfoContainerHtmlChildren[5],
		address: modalInfoContainerHtmlChildren[6],
		dateOfBirth: modalInfoContainerHtmlChildren[7],
	};

	modalContainerHtml.setAttribute('data-name', userFullNameHtmlData);
	userModalChildEls.img.src = userData.picture.large;
	userModalChildEls.userName.textContent = `${userData.name.first} ${userData.name.last}`;
	userModalChildEls.email.textContent = userData.email;
	userModalChildEls.city.textContent = userData.location.city;
	userModalChildEls.phoneNumber.textContent = userData.phone;
	userModalChildEls.address.textContent = `${userData.location.street.number} ${userData.location.street.name}., ${userData.location.city}`;
	userModalChildEls.dateOfBirth.textContent = userData.dob.date;
};

const removeUserModalData = (modalContainerHtml) => {
	modalContainerHtml.removeAttribute('data-name');
	const modelInfoContainerEl = modalContainerHtml.querySelector(
		'.modal-info-container'
	);
	const modelInfoContainerElChildren = [...modelInfoContainerEl.children];

	modelInfoContainerElChildren.forEach((modelInfoContainerElChild) => {
		if (modelInfoContainerElChild.tagName === 'IMG') {
			modelInfoContainerElChild.src = '#';
		} else if (
			modelInfoContainerElChild.tagName === 'H3' ||
			modelInfoContainerElChild.tagName === 'P'
		) {
			modelInfoContainerElChild.innerText = '';
		}
	});
};
