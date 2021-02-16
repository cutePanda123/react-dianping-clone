import { combineReducers } from "redux";
import url from "../../utils/urls.js";
import { FETCH_DATA } from "../middlewares/api";
import { schema, orderStates } from "./entities/orders";

const initialState = {
  orders: {
    isFetching: false,
    ids: [],
    unpaidIds: [],
    paidIds: [],
    returnedIds: [],
  },
  currentTabIndex: 0,
};

export const types = {
  FETCH_ORDERS_REQUEST: "USER/FETCH_ORDERS_REQUEST",
  FETCH_ORDERS_FAILURE: "USER/FETCH_ORDERS_FAILURE",
  FETCH_ORDERS_SUCCESS: "USER/FETCH_ORDERS_SUCCESS",
  SET_CURRENT_TAB: "USER/SET_CURRENT_TAB",
};

export const actions = {
  loadOrders: () => {
    return (dispatch, getState) => {
      const { ids } = getState().users.orders;
      if (ids.length > 0) {
        return null;
      }
      const endpoint = url.getOrders();
      return dispatch(fetchOrders(endpoint));
    };
  },
  setCurrentTab: (index) => ({
    type: types.SET_CURRENT_TAB,
    index,
  }),
};

const fetchOrders = (endpoint) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_ORDERS_REQUEST,
      types.FETCH_ORDERS_SUCCESS,
      types.FETCH_ORDERS_FAILURE,
    ],
    endpoint,
    schema,
  },
});

//reducers
const orders = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ORDERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_ORDERS_SUCCESS:
      const paidOrderIds = action.response.ids.filter((id) => {
        return action.response.orders[id].type === orderStates.PAID_TYPE;
      });
      const unpaidOrderIds = action.response.ids.filter((id) => {
        return action.response.orders[id].type === orderStates.UNPAID_TYPE;
      });
      const returnedOrderIds = action.response.ids.filter((id) => {
        return action.response.orders[id].type === orderStates.RETURNED_TYPE;
      });
      return {
        ...state,
        isFetching: false,
        ids: state.ids.concat(action.response.ids),
        unpaidIds: state.unpaidIds.concat(unpaidOrderIds),
        paidIds: state.paidIds.concat(paidOrderIds),
        returnedIds: state.returnedIds.concat(returnedOrderIds),
      };
    case types.FETCH_ORDERS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

const currentTabIndex = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_TAB:
      return action.index;
    default:
      return state;
  }
};

const reducer = combineReducers({
    currentTabIndex,
    orders
});

export default reducer;
