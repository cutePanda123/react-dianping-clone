import { combineReducers } from "redux";
import url from "../../utils/urls.js";
import { FETCH_DATA } from "../middlewares/api";
import {
  schema,
  orderStates,
  getOrderById,
  actions as orderActions,
  types as orderActionTypes,
} from "./entities/orders";
import { actions as commentActions } from "./entities/comments";

const initialState = {
  orders: {
    isFetching: false,
    ids: [],
    unpaidIds: [],
    paidIds: [],
    returnedIds: [],
  },
  currentTabIndex: 0,
  currentOrder: {
    id: null,
    isDeleting: false,
    isCommenting: false,
    comment: "",
    stars: 0,
  },
};

export const types = {
  FETCH_ORDERS_REQUEST: "USER/FETCH_ORDERS_REQUEST",
  FETCH_ORDERS_FAILURE: "USER/FETCH_ORDERS_FAILURE",
  FETCH_ORDERS_SUCCESS: "USER/FETCH_ORDERS_SUCCESS",
  SET_CURRENT_TAB: "USER/SET_CURRENT_TAB",

  DELETE_ORDER_REQUEST: "USER/DELETE_ORDER_REQUEST",
  DELETE_ORDER_FAILURE: "USER/DELETE_ORDER_FAILURE",
  DELETE_ORDER_SUCCESS: "USER/DELETE_ORDER_SUCCESS",

  SHOW_DELETE_DIALOG: "USER/SHOW_DELETE_DIALOG",
  HIDE_DELETE_DIALOG: "USER/HIDE_DELETE_DIALOG",

  SHOW_COMMENT_AREA: "USER/SHOW_COMMENT_AREA",
  HIDE_COMMENT_AREA: "USER/HIDE_COMMENT_AREA",

  SET_COMMENT: "USER/SET_COMMENT",
  SET_STARS: "USER/SET_STARS",

  POST_COMMENT_REQUEST: "USER/POST_COMMENT_REQUEST",
  POST_COMMENT_SUCCESS: "USER/POST_COMMENT_SUCCESS",
  POST_COMMENT_FAILURE: "USER/POST_COMMENT_FAILURE",
};

export const actions = {
  loadOrders: () => {
    return (dispatch, getState) => {
      const { ids } = getState().user.orders;
      if (ids.length > 0) {
        return null;
      }
      const endpoint = url.getOrders();
      return dispatch(fetchOrders(endpoint));
    };
  },
  setCurrentTabIndex: (index) => ({
    type: types.SET_CURRENT_TAB,
    index,
  }),
  removeOrder: () => {
    return (dispatch, getState) => {
      const { id } = getState().user.currentOrder;
      if (id) {
        dispatch(deleteOrderRequest());
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            dispatch(deleteOrderSuccess(id));
            dispatch(orderActions.deleteOrder(id));
            resolve();
          }, 500);
        });
      }
    };
  },
  showDeleteDialog: (orderId) => ({
    type: types.SHOW_DELETE_DIALOG,
    orderId,
  }),
  hideDeleteDialog: () => ({
    type: types.HIDE_DELETE_DIALOG,
  }),
  showCommentArea: (orderId) => ({
    type: types.SHOW_COMMENT_AREA,
    orderId,
  }),
  hideCommentArea: () => ({
    type: types.HIDE_COMMENT_AREA,
  }),
  setComment: (comment) => ({
    type: types.SET_COMMENT,
    comment,
  }),
  setStars: (stars) => ({
    type: types.SET_STARS,
    stars,
  }),
  submitComment: () => {
    return (dispatch, getState) => {
      dispatch(postCommentRequest());
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const {
            currentOrder: { id, stars, comment },
          } = getState().user;
          const commentObj = {
            id: +new Date(),
            stars: stars,
            content: comment,
          };
          dispatch(postCommentSuccess());
          dispatch(commentActions.addComment(commentObj));
          dispatch(orderActions.addComment(id, commentObj.id));
          resolve();
        });
      });
    };
  },
};

const deleteOrderRequest = () => ({
  type: types.DELETE_ORDER_REQUEST,
});

const deleteOrderSuccess = (orderId) => ({
  type: types.DELETE_ORDER_SUCCESS,
  orderId,
});

const postCommentRequest = () => ({
  type: types.POST_COMMENT_REQUEST,
});

const postCommentSuccess = () => ({
  type: types.POST_COMMENT_SUCCESS,
});

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
const orders = (state = initialState.orders, action) => {
  switch (action.type) {
    case types.FETCH_ORDERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_ORDERS_SUCCESS:
      const paidOrderIds = action.response.ids.filter((id) => {
        return action.response.orders[id].type == orderStates.PAID_TYPE;
      });
      const unpaidOrderIds = action.response.ids.filter((id) => {
        return action.response.orders[id].type == orderStates.UNPAID_TYPE;
      });
      const returnedOrderIds = action.response.ids.filter((id) => {
        return action.response.orders[id].type == orderStates.RETURNED_TYPE;
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
    case orderActionTypes.DELETE_ORDER:
    case types.DELETE_ORDER_SUCCESS:
      return {
        ...state,
        ids: removeOrderId(state, "ids", action.orderId),
        unpaidIds: removeOrderId(state, "unpaidIds", action.orderId),
        paidIds: removeOrderId(state, "paidIds", action.orderId),
        returnedIds: removeOrderId(state, "returnedIds", action.orderId),
      };
    default:
      return state;
  }
};

const removeOrderId = (state, key, orderId) => {
  return state[key].filter((id) => {
    return id !== orderId;
  });
};

const currentTabIndex = (state = initialState.currentTabIndex, action) => {
  switch (action.type) {
    case types.SET_CURRENT_TAB:
      return action.index;
    default:
      return state;
  }
};

const currentOrder = (state = initialState.currentTabIndex, action) => {
  switch (action.type) {
    case types.SHOW_DELETE_DIALOG: {
      return {
        ...state,
        id: action.orderId,
        isDeleting: true,
      };
    }
    case types.SHOW_COMMENT_AREA:
      return {
        ...state,
        isCommenting: true,
        id: action.orderId,
      };
    case types.HIDE_DELETE_DIALOG:
    case types.HIDE_COMMENT_AREA:
    case types.POST_COMMENT_SUCCESS:
    case types.POST_COMMENT_FAILURE:
    case types.DELETE_ORDER_SUCCESS:
    case types.DELETE_ORDER_FAILURE:
      return initialState.currentOrder;
    case types.SET_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
    case types.SET_STARS:
      return {
        ...state,
        stars: action.stars,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  currentTabIndex,
  orders,
  currentOrder,
});

export default reducer;

// selectors
export const getCurrentTabIndex = (state) => state.user.currentTabIndex;

export const getOrders = (state) => {
  const key = ["ids", "unpaidIds", "paidIds", "returnedIds"][
    state.user.currentTabIndex
  ];
  return state.user.orders[key].map((id) => {
    return getOrderById(state, id);
  });
};

export const getDeletingOrderId = (state) => {
  return state.user.currentOrder && state.user.currentOrder.isDeleting
    ? state.user.currentOrder.id
    : null;
};
