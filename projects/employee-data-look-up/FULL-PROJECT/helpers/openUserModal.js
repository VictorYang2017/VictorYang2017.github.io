const openUserModal = (userData, modalContainerHtml) => {
	createNewUserModalData(userData, modalContainerHtml);
	modalContainerHtml.style.display = 'block';
};

const openUserModalCheck = (action) => {
	const userNameHtmlData = modalContainerHtml.getAttribute('data-name');
	filteredUsersData.forEach((user, i) => {
		const userFullName = `${user.name.first} ${user.name.last}`.toLowerCase();
		if (userFullName === userNameHtmlData) {
			if (action === 'next') {
				if (i >= filteredUsersData.length - 1) {
					return;
				} else {
					openUserModal(filteredUsersData[i + 1], modalContainerHtml);
				}
			} else if (action === 'previous') {
				if (i <= 0) {
					return;
				} else {
					openUserModal(filteredUsersData[i - 1], modalContainerHtml);
				}
			}
		}
	});
};
