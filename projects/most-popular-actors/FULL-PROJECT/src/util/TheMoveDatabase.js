const tmdbApiKey = 'ca201dff08c62bcf6679ce793b09f589';
const getPopularActors = 'popular';
const getNumOfActors = 5;
const TheMovieDatabase = {
	getFivePopularActors: () => {
		const tmdbPopularActorsApiUrl = `https://api.themoviedb.org/3/person/${getPopularActors}?api_key=${tmdbApiKey}&language=en-US&page=1`;
		return fetch(tmdbPopularActorsApiUrl)
			.then((response) => response.json())
			.then((popularActors) => {
				const results = popularActors.results;
				const topFivePopularActors = results.slice(0, getNumOfActors);
				return topFivePopularActors;
			});
	},
	getActorMoreDetails: (actorId) => {
		const tbmdActorId = actorId;
		const tmdbActorDetailsApiUrl = `https://api.themoviedb.org/3/person/${tbmdActorId}?api_key=${tmdbApiKey}&language=en-US`;
		return fetch(tmdbActorDetailsApiUrl)
			.then((response) => response.json())
			.then((actorDetails) => actorDetails);
	},
};

const getActors = TheMovieDatabase.getFivePopularActors();
const getActorDetails = TheMovieDatabase.getActorMoreDetails;

export { getActors, getActorDetails };
