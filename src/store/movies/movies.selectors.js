import { createSelector } from 'reselect'

export const mSelect = store => store.movies;

export const mListSelect = createSelector(
    [mSelect],
    movies => movies.data
)
export const mLoadSelect = createSelector(
    [mSelect],
    movies => movies.isLoading
)
export const mChosenMIndexSelect = createSelector(
    [mSelect],
    movies => movies.selectedMovie
)
export const mCHosenMSelect = createSelector(
    [mListSelect, mChosenMIndexSelect],
    (moviesData, index) => moviesData[index]
)