const cardHtmlTemplate = (user, i) => {
	const cardHtmlTemplate = `
    <div class="card" data-name="${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}" data-num="${i}">
        <div class="card-img-container">
            <img class="card-img" src="${
							user.picture.large
						}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${user.name.first} ${
		user.name.last
	}</h3>
            <p class="card-text">${user.email}</p>
            <p class="card-text cap">${user.location.city}, ${
		user.location.state
	}</p>
        </div>
    </div>
    `;
	return cardHtmlTemplate;
};
