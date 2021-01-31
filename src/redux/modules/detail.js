import { combineReducers, combineReucer } from "redux";
import { FETCH_DATA } from "../middlewares/api";
import { getShop, schema as shopSchema } from "./entities/shops";
import {
  getProductDetail,
  schema as productSchema,
  getProductById,
} from "./entities/products";
import urls from "../../utils/urls";

export const types = {
  FETCH_PRODUCT_DETAIL_REQUEST: "ETCH_PRODUCT_DETAIL_REQUEST",
  FETCH_PRODUCT_DETAIL_SUCCESS: "FETCH_PRODUCT_DETAIL_SUCCESS",
  FETCH_PRODUCT_DETAIL_FAILURE: "FETCH_PRODUCT_DETAIL_FAILURE",
  FETCH_SHOP_REQUEST: "ETCH_SHOP_REQUEST",
  FETCH_SHOP_SUCCESS: "FETCH_SHOP_SUCCESS",
  FETCH_SHOP_FAILURE: "FETCH_SHOP_FAILURE",
};

const initialState = {
  product: {
    isFetching: false,
    id: null,
  },
  relatedShop: {
    isFetching: false,
    id: null,
  },
};

export const actions = {
  fetchProductDetail: (id) => {
    return (dispatch, getState) => {
      const product = getProductDetail(getState(), id);
      if (product) {
        return dispatch(fetchProductDetailSuccess(id));
      }
      const endpoint = urls.getProductDetail(id);
      return dispatch(fetchProductDetail(endpoint, id));
    };
  },
  fetchShop: (id) => {
    return (dispatch, getState) => {
      const shop = getShop(getState(), id);
      if (shop) {
        return dispatch(fetchShopSuccess(id));
      }
      const endpoint = urls.getShop(id);
      return dispatch(fetchShop(endpoint, id));
    };
  },
};

const fetchProductDetail = (endpoint, id) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_PRODUCT_DETAIL_REQUEST,
      types.FETCH_PRODUCT_DETAIL_SUCCESS,
      types.FETCH_PRODUCT_DETAIL_FAILURE,
    ],
    endpoint,
    schema: productSchema,
  },
  id,
});

const fetchShop = (endpoint, id) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_SHOP_REQUEST,
      types.FETCH_SHOP_SUCCESS,
      types.FETCH_SHOP_FAILURE,
    ],
    endpoint,
    schema: shopSchema,
  },
  id,
});

const fetchProductDetailSuccess = (id) => ({
  type: types.FETCH_PRODUCT_DETAIL_SUCCESS,
  id,
});

const fetchShopSuccess = (id) => ({
  type: types.FETCH_SHOP_SUCCESS,
  id,
});

const product = (state = initialState.product, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCT_DETAIL_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_PRODUCT_DETAIL_SUCCESS:
      return { ...state, id: action.id, isFetching: false };
    case types.FETCH_PRODUCT_DETAIL_FAILURE:
      return { ...state, isFetching: false, id: null };
    default:
      return state;
  }
};

const relatedShop = (state = initialState.relatedShop, action) => {
  switch (action.type) {
    case types.FETCH_SHOP_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_SHOP_SUCCESS:
      return { ...state, id: action.id, isFetching: false };
    case types.FETCH_SHOP_FAILURE:
      return { ...state, isFetching: false, id: null };
    default:
      return state;
  }
};

const reducer = combineReducers({
  product,
  relatedShop,
});

export default reducer;

// selectors
export const getProduct = (state, id) => {
  return getProductDetail(state, id);
};

export const getRelatedShop = (state, productId) => {
  const product = getProductById(state, productId);
  let shopId = product ? product.nearestShop : null;
  if (shopId) {
    return getShop(state, shopId);
  }
  return null;
};
