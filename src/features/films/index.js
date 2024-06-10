import React from 'react';
import { MovieList, MovieDetails, SearchBar } from './components';
import Loading from '../../components/utils/Loading';
import { connect } from 'react-redux';
import { mLoadSelect, mListSelect, favTitleSelectro, mCHosenMSelect } from '../../store/selectors';
import { tryAddFavori, tryRemoveFavori, setSelectedMovie, fetchMovies } from '../../store/actions'
const Films = (props) => {
  return (
    <>
      <SearchBar updateMovies={props.fetchMovies} />
      {!props.isLoading ? (
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList
            movies={props.movies}
            updateSelectedMovie={props.setSelectedMovie}
            favoris={props.favTitles}
            removeFavori={props.tryRemoveFavori}
            addFavori={props.tryAddFavori}
          />
          <MovieDetails movie={props.movie} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default connect(state => ({ isLoading: mLoadSelect(state), movies: mListSelect(state), favTitles: favTitleSelectro(state), movie: mCHosenMSelect(state) }), { tryRemoveFavori, tryAddFavori, setSelectedMovie, fetchMovies })(Films);
