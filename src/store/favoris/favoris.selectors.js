import {createSelector} from 'reselect'
export const favSelect = state => state.favs;

export const facListSelect = createSelector(
    [favSelect],
    favoris => favoris.data
)

export const favIsLoadingSelect = createSelector(
    [facListSelect],
    data => data.isLoading
)
export const favTitleSelectro = createSelector(
    [facListSelect],
    favData => favData.map(f=>f.title)
)