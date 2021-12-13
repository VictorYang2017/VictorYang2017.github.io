const createUserModalClsEvent = (modalContainerHtml) => {
	const clsBtnHtml = modalContainerHtml.querySelector('.modal-close-btn');
	clsBtnHtml.addEventListener('click', () => {
		modalContainerHtml.style.display = 'none';
		removeUserModalData(modalContainerHtml);
	});
};

const createNextPrevBtnsEvent = (nextBtnHtml, prevBtnHtml) => {
	nextBtnHtml.addEventListener('click', () => {
		openUserModalCheck('next');
	});
	prevBtnHtml.addEventListener('click', () => {
		openUserModalCheck('previous');
	});
};
