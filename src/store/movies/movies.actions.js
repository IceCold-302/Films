import apiMovieRequest from '../../conf/api.movie'
export const REQUEST_MOVIES = 'Request movies';
export const FETCH_MOVIES = 'Fetch movies';
export const FETCH_MOVIES_SUCCESS = 'Movies fetched successfullly';
export const FETCH_MOVIES_ERROR = 'Error fetching movies'
export const SET_SELECTED_MOVIE = 'Setting selected movie';
// Action creators 

export const requestMovies = () => ({
    type: REQUEST_MOVIES
});

export const fetchMoviesError = (error) => ({
    type: FETCH_MOVIES_ERROR,
    error
});

export const fetchMoviesSuccess = (movies) => ({
    type: FETCH_MOVIES_SUCCESS,
    movies
});

export const setSelectedMovie = (index) => ({
    type: SET_SELECTED_MOVIE,
    index
})
export const fetchMovies = (filter) => dispatch => {
    dispatch(requestMovies);
    return apiMovieRequest.searchMovies(filter).then(
        movies => dispatch(fetchMoviesSuccess(movies)),
        error => dispatch(fetchMoviesError(error)))
}