const filterUsers = (searchInputValue, usersResults) => {
	const newFilteredUsersData = [];
	const searchInputFiledValue = searchInputValue.toLowerCase();
	const userCardsArray = [...galleryHtml.children];
	userCardsArray.forEach((userCard, i) => {
		userCard.style.display = 'none';
		const userFirstLastNameHtmlData = userCard.getAttribute('data-name');
		if (userFirstLastNameHtmlData.includes(searchInputFiledValue)) {
			userCard.style.display = 'flex';
			newFilteredUsersData.push(usersResults[i]);
		}
	});
	filteredUsersData = newFilteredUsersData;
};
