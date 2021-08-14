const apiKey = 'ca201dff08c62bcf6679ce793b09f589';
const getKindOfMovie = 'popular';
const TheMovieDatabase = {
    movieDatabase: (pageNumber) => {
        const movieUrl = `https://api.themoviedb.org/3/movie/${getKindOfMovie}?api_key=${apiKey}&language=en-US&page=${pageNumber}`;
        // const movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=${pageNumber}&primary_release_date.gte=1995&primary_release_date.lte=1998`;
        return fetch(movieUrl)
        .then(response => response.json())
        .then(movies => {
            const movieResults = movies.results;
            const movieTotalPage = movies.total_pages;
            const movieInfo = {
                theMovieResults: movieResults.map((movie)=>{
                    return movie.title;
                }),
                theMovieTotalPage: movieTotalPage
            }
            return movieInfo;

        })
        .catch(error => console.log(error));
    }
}

export {TheMovieDatabase};