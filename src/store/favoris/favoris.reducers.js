import * as actions from './favoris.actions'
const fReducers = (state = {
    data: [],
    isLoading: false,
    error: null
}, action) => {
    switch (action.type) {
        case actions.FETCH_FAVORIS_SUCCESS: {
            return {
                ...state,
                data: action.favoris,
                isLoading: false,
                error: null
            }
        }
        case actions.FETCH_FAVORIS_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        }
        case (actions.REMOVE_FAVORIS_SUCCESS): 
        case (actions.ADD_FAVORIS_SUCCESS): {
            return {
                ...state,
                data: action.favoris,
                isLoading: false,
            }
        }
        case (actions.ADD_FAVORIS_ERROR): {
            return {
                ...state,
                error: action.error
            }
        }
        case (actions.REMOVE_FAVORIS_ERROR): {
            return {
                ...state,
                error: action.error
            }
        }
        case (actions.REQUEST_FAVORIS): {
            return {
                ...state,
                isLoading: true
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default fReducers;