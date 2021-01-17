import { get } from '../../utils/requests';
import { url } from '../../utils/urls';
import { FETCH_DATA } from '../middlewares/api';
import { schema } from './entities/products'; 

export const types = {
    FETCH_LIKES_REQUEST: 'HOME/FETCH_LIKES_REQUEST',
    FETCH_LIKES_SUCCESS: 'HOME/FETCH_LIKES_SUCCESS',
    FETCH_LIKES_FAILURE: 'HOME/FETCH_LIKES_FAILURE'
};

const defaultFetchLikesOffset = 0;
const defaultFetchLikesPageSize = 10;

export const actions = {
    fetchLikes: () => {
        const endpoint = url.getProductList(defaultFetchLikesOffset, defaultFetchLikesPageSize);
        return dispatch(fetchLikes(endpoint));
    }
    /*
    fetchLikes: () => {
        return (dispatch, getState) => {
            dispatch(FETCH_LIKES_REQUEST());
            return get(url.getProductList(defaultFetchLikesOffset, defaultFetchLikesPageSize)).then(
                data => {
                    dispatch(FETCH_LIKES_SUCCESS());
                },
                error => {
                    dispatch(fetchLikesFailure());
                }
            );
        };
    }*/
};

const fetchLikes = (endpoint) => ({
    [FETCH_DATA]: {
        types: [
            type.FETCH_LIKES_REQUEST,
            type.FETCH_LIKES_SUCCESS,
            type.FETCH_LIKES_FAILURE
        ],
        endpoint,
        schema
    }
});

/*
const fetchLikesRequest = () => ({
    type: FETCH_LIKES_REQUEST
});

const fetchLikesFailure = () => ({
    type: FETCH_LIKES_FAILURE
});

const fetchLikesSuccess = () => ({
    type: FETCH_LIKES_SUCCESS
});*/

const reducer = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_LIKES_REQUEST:
            //todo
        case types.FETCH_LIKES_SUCCESS:
            //todo
        case types.FETCH_LIKES_FAILURE:
            //todo
        default:
            return state;
    }
};

export default reducer;