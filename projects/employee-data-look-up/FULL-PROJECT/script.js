const API_URL = 'https://randomuser.me/api/?results=12&nat=us';

const galleryHtml = document.getElementById('gallery');

let modalContainerHtml = '';
const searchContainerHtml = document.querySelector('.search-container');

let filteredUsersData = [];

const displayUsers = (usersResults) => {
	const users = usersResults;
	let cardHtml = '';
	users.forEach((user, i) => {
		cardHtml += cardHtmlTemplate(user, i);
	});
	galleryHtml.insertAdjacentHTML('beforeend', cardHtml);
	filteredUsersData = users;
	const userCardsArray = [...galleryHtml.children];
	userCardsArray.forEach((userCard, i) => {
		userCard.addEventListener('click', () => {
			const user = users[i];
			openUserModal(user, modalContainerHtml);
		});
	});
};

const createUserModal = () => {
	const userModalHtmlTemplate = `
    <div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="#" alt="profile picture">
                <h3 id="name" class="modal-name cap"></h3>
                <p class="modal-text"></p>
                <p class="modal-text cap"></p>
                <hr>
                <p class="modal-text"></p>
                <p class="modal-text"></p>
                <p class="modal-text"></p>
            </div>
        </div>
        <div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
            <button type="button" id="modal-next" class="modal-next btn">Next</button>
        </div>
    </div>`;

	galleryHtml.insertAdjacentHTML('afterend', userModalHtmlTemplate);
	modalContainerHtml = document.querySelector('.modal-container');
	const nextBtnHtml = document.getElementById('modal-next');
	const prevBtnHtml = document.getElementById('modal-prev');
	modalContainerHtml.style.display = 'none';
	createUserModalClsEvent(modalContainerHtml);
	createNextPrevBtnsEvent(nextBtnHtml, prevBtnHtml, modalContainerHtml);
};

const displaySearchForm = (usersResults) => {
	const searchFormHtmlTemplate = `
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>`;
	searchContainerHtml.insertAdjacentHTML('beforebegin', searchFormHtmlTemplate);

	const searchInputFieldHtml = document.getElementById('search-input');
	searchInputFieldHtml.addEventListener('keyup', (evt) => {
		const searchInputFieldValue = evt.currentTarget.value;
		filterUsers(searchInputFieldValue, usersResults);
	});
};

const init = async () => {
	const users = await fetchRandomUsers(API_URL);
	const usersResults = users.results;
	displayUsers(usersResults);
	createUserModal();
	displaySearchForm(usersResults);
};

init();
