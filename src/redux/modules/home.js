import { FETCH_DATA } from "../middlewares/api";
import { schema } from "./entities/products";
import url from '../../utils/urls.js';
import { combineReducers } from "redux";

export const types = {
  FETCH_FAVORITES_REQUEST: "HOME/FETCH_FAVORITES_REQUEST",
  FETCH_FAVORITES_SUCCESS: "HOME/FETCH_FAVORITES_SUCCESS",
  FETCH_FAVORITES_FAILURE: "HOME/FETCH_FAVORITES_FAILURE",
  FETCH_DISCOUNTS_REQUEST: "HOME/FETCH_DISCOUNTS_REQUEST",
  FETCH_DISCOUNTS_SUCCESS: "HOME/FETCH_DISCOUNTS_SUCCESS",
  FETCH_DISCOUNTS_FAILURE: "HOME/FETCH_DISCOUNTS_FAILURE",
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

export const params = {
  FETCH_FAVORITES_OFFSET: 0,
  FETCH_FAVORITES_PAGE_SIZE: 5,
  FETCH_FAVORITES_PATH: 'favorites',
  FETCH_DISCOUNTS_OFFSET: 0,
  FETCH_DISCOUNTS_PAGE_SIZE: 3,
  FETCH_DISCOUNTS_PATH: 'discounts',
};

export const actions = {
  fetchFavorites: () => {
    return (dispatch, getState) => {
      const { pageIndex } = getState().home.favorites.pageIndex;
      const offset = pageIndex * params.FETCH_FAVORITES_PAGE_SIZE;
      const endpoint = url.getProductList(
        params.FETCH_FAVORITES_PATH,
        offset,
        params.FETCH_FAVORITES_PAGE_SIZE
      );
      return dispatch(fetchFavorites(endpoint));
    };
  },
  fetchDiscounts: () => {
    return (dispatch, getState) => {
      const endpoint = url.getProductList(
        params.FETCH_DISCOUNTS_PATH,
        0,
        params.FETCH_DISCOUNTS_PAGE_SIZE
      );
      return dispatch(fetchDiscounts(endpoint));
    };
  },
  /*
    fetchFAVORITES: () => {
        return (dispatch, getState) => {
            dispatch(FETCH_FAVORITES_REQUEST());
            return get(url.getProductList(defaultFetchFAVORITESOffset, defaultFetchFAVORITESPageSize)).then(
                data => {
                    dispatch(FETCH_FAVORITES_SUCCESS());
                },
                error => {
                    dispatch(fetchFAVORITESFailure());
                }
            );
        };
    }*/
};

const fetchFavorites = (endpoint) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_FAVORITES_REQUEST,
      types.FETCH_FAVORITES_SUCCESS,
      types.FETCH_FAVORITES_FAILURE,
    ],
    endpoint,
    schema,
  },
});

const fetchDiscounts = (endpoint) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_DISCOUNTS_REQUEST,
      types.FETCH_DISCOUNTS_SUCCESS,
      types.FETCH_DISCOUNTS_FAILURE,
    ],
    endpoint,
    schema,
  },
});

/*
const fetchFAVORITESRequest = () => ({
    type: FETCH_FAVORITES_REQUEST
});

const fetchFAVORITESFailure = () => ({
    type: FETCH_FAVORITES_FAILURE
});

const fetchFAVORITESSuccess = () => ({
    type: FETCH_FAVORITES_SUCCESS
});*/

const favorites = (state = initialState.favorites, action) => {
  switch (action.type) {
    case types.FETCH_FAVORITES_FAILURE:
      return {...state, isFetching: false};
    case types.FETCH_FAVORITES_REQUEST:
      return {...state, isFetching: true};
    case types.FETCH_FAVORITES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pageIndex: state.pageIndex + 1,
        ids: state.ids.concat(action.response.ids)
      };
    default:
      return state;
  }
};

const discounts = (state = initialState.discounts, action) => {
  switch (action.type) {
    case types.FETCH_FAVORITES_FAILURE:
      return {...state, isFetching: false};
    case types.FETCH_FAVORITES_REQUEST:
      return {...state, isFetching: true};
    case types.FETCH_FAVORITES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ids: state.ids.concat(action.response.ids)
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  discounts,
  favorites
});

export default reducer;

//selectors
export const getFavorites = state => {
  return state.home.favorites.ids.map((id) => {
    return state.entities.products[id];
  });
};

export const getDiscounts = state => {
  return state.home.discounts.ids.map((id) => {
    return state.entities.products[id];
  });
};

export const getPageIndexOfFavorites = state => {
  return state.home.favorites.pageIndex;
};
