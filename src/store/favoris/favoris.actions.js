import functions from "../../conf/api.firebase";

export const REQUEST_FAVORIS = 'Request favoris';

export const FETCH_FAVORIS = 'Fetch favoris';
export const FETCH_FAVORIS_SUCCESS = 'Favoris fetched successfullly';
export const FETCH_FAVORIS_ERROR = 'Error fetching favoris'

export const TRY_ADD_FAVORIS = "trying to add favorites..."
export const ADD_FAVORIS_SUCCESS = "Adding favorites successful"
export const ADD_FAVORIS_ERROR = "Error adding favorites"

export const TRY_REMOVE_FAVORIS = "trying to remove favorites..."
export const REMOVE_FAVORIS_SUCCESS = "Removing favorites successful"
export const REMOVE_FAVORIS_ERROR = "Error removing favorites"

export const requestFavoris = () => ({
    type: REQUEST_FAVORIS
});

export const fetchFavorisError = error => ({
    type: FETCH_FAVORIS_ERROR,
    error
});

export const fetchFavorisSuccess = favoris => ({
    type: FETCH_FAVORIS_SUCCESS,
    favoris
});

export const fetchFavoris = () => dispatch => {
    dispatch(requestFavoris);
    return functions.getFavoris().then(
        favoris => dispatch(fetchFavorisSuccess(favoris)),
        error => dispatch(fetchFavorisError(error)))
}

export const addFavSuccess = favoris => ({
    type: ADD_FAVORIS_SUCCESS,
    favoris
})

export const addFavError = error => ({
    type: ADD_FAVORIS_ERROR,
    error
})

export const tryAddFavori = movie => (dispatch, getState) => {
    const favoris = [ ...getState().favs.data, movie];
    return functions.saveFavoris(favoris).then( () => dispatch(addFavSuccess(favoris)), error => dispatch(addFavError(error)))  
    
}
export const removeFavSuccess = favoris => ({
    type: REMOVE_FAVORIS_SUCCESS,
    favoris
})

export const removeFavError = error => ({
    type: REMOVE_FAVORIS_ERROR,
    error
})

export const tryRemoveFavori = title => (dispatch, getState) => {
    const favoris = [ ...getState().favs.data];
    const index = favoris.findIndex(f=> f.title === title)
    favoris.splice(index,1);
    return functions.saveFavoris(favoris).then( () => dispatch(removeFavSuccess(favoris)), error => dispatch(removeFavError(error)));
}

