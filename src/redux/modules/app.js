const initialState = {
    error: null
};

export const types = {
    CLEAR_ERROR: 'APP/CLEAR_ERROR'
};

export const actions = {
    clearError: () => ({
        type: types.CLEAR_ERROR
    })
};

const reducer = (state = initialState, action) => {
    const { type, error } = action;
    if (type === types.CLEAR_ERROR) {
        return {...state, error: null};
    }
    if (error) {
        return {...state, error: error};
    }
    return state;
}

export default reducer;

// use selectors to get state from redux to ducouple react ui from redux state
export const getError = (state) => {
    return state.app.error;
}