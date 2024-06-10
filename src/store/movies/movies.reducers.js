import * as actions from './movies.actions';


const moviesReducer = (state = {
                    data: [],
                    selectedMovie:0,
                    isLoading: false,
                    error:null
                }, action) => {
                    switch(action.type){
                        case (actions.REQUEST_MOVIES): {
                            return {
                                ...state,
                                isLoading:true
                            }
                        }
                        case (actions.FETCH_MOVIES_SUCCESS): {
                            return {
                                ...state,
                                isLoading: false,
                                data: [...action.movies]
                            }
                        }
                        case (actions.FETCH_MOVIES_ERROR): {
                            return {
                                ...state, 
                                error : action.error
                            }
                        }
                        case (actions.SET_SELECTED_MOVIE): {
                            return {
                                ...state,
                                selectedMovie: action.index
                            }
                        }
                        default:{
                            return {
                                ...state
                            }
                        }
                    }
}

export default moviesReducer