import * as axios from 'axios';

export const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/'
})

apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWUxZWQxNDEzYzI0OTBlNTRhZTk5ODZmM2Q3MDJkMCIsInN1YiI6IjYyNGRhOGU0YzM5MjY2MDA2NDJkNDdjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fnl_6OP3ggkHA5Vqr1OnlxetvgMeBB-zS6TV_la0K94'
  return req;
})

export const apiMovieMap = (m) => ({
  img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
  title: m.title,
  details: `${ m.release_date } | ${ m.vote_average }/10 (${ m.vote_count })`,
  description: m.overview
})

const searchMovies = {
  searchMovies : (filter) => {
    const query = '?' + Object.keys(filter).map(k => `${k}=${filter[k]}&`).join('');
    return apiMovie.get('3/search/movie' + query + 'api_key=6ee1ed1413c2490e54ae9986f3d702d0')
                   .then(response => response.data.results)
                   .then(moviesApi => moviesApi.map(apiMovieMap))
  }
}
export default searchMovies;