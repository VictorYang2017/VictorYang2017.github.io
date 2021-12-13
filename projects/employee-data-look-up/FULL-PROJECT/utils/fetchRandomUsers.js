const fetchRandomUsers = async (apiUrl) => {
	const response = await fetch(apiUrl);
	const randomUsers = await response.json();
	return randomUsers;
};
