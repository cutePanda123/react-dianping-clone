import { FETCH_DATA } from "../middlewares/api";
import { schema } from "./entities/products";
import url from '../../utils/urls.js';

export const types = {
  FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST",
  FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS",
  FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE",
};

const initialState = {
  favorites: {
    isFetching: false,
    pageIndex: 0,
    ids: []
  },
  discounts: {
    isFetching: false,
    ids: []
  }
};

const defaultFetchLikesOffset = 0;
const defaultFetchLikesPageSize = 10;

export const actions = {
  fetchLikes: () => {
    return (dispatch, getState) => {
      const endpoint = url.getProductList(
        defaultFetchLikesOffset,
        defaultFetchLikesPageSize
      );
      return dispatch(fetchLikes(endpoint));
    };
  },
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
      types.FETCH_LIKES_REQUEST,
      types.FETCH_LIKES_SUCCESS,
      types.FETCH_LIKES_FAILURE,
    ],
    endpoint,
    schema,
  },
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
