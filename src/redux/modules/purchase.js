import { getProductDetail } from "./entities/products";
import { orderStates, actions as orderActions } from "./entities/orders";

export const types = {
  SET_ORDER_QUANTITY: "PURCHASE/SET_ORDER_QUANTITY",
  CLOSE_TIP: "PURCHASE/CLOSE_TIP",
  SUBMIT_ORDERS_REQUEST: "PURCHASE/SUBMIT_ORDER_REQUEST",
  SUBMIT_ORDERS_SUCCESS: "PURCHASE/SUBMIT_ORDER_SUCCESS",
  SUBMIT_ORDERS_FAILURE: "PURCHASE/SUBMIT_ORDER_FAILURE",
};

const initialState = {
  quantity: 1,
  showTip: false,
};

export const action = {
  setOrderQuantity: (quantity) => ({
    type: types.SET_ORDER_QUANTITY,
    quantity,
  }),
  closeTip: () => ({
    type: types.CLOSE_TIP,
  }),
  submitOrder: (productId) => {
    return (dispatch, getState) => {
      dispatch({ type: types.SUBMIT_ORDERS_REQUEST });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const product = getProductDetail(getState(), productId);
          const quantity = getState().purchase.quantity;
          const totalPrice = (product.currentPrice * quantity).toFixed(1);
          const text1 = `Amount: ${quantity} | Total price: ${totalPrice}`;
          const text2 = product.validityPeriod;
          const order = {
            title: `${product.shop}:${product.product}`,
            orderPicUrl: product.picture,
            channel: "Groupon",
            statusText: "Pending payment",
            text: [text1, text2],
            type: orderStates.UNPAID_TYPE,
          };
          dispatch(orderActions.addOrder(order));
          dispatch({ type: types.SUBMIT_ORDERS_SUCCESS });
        }, 500);
      });
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ORDER_QUANTITY:
      return {
        ...state,
        quantity: action.quantity,
      };
    case types.CLOSE_TIP:
      return {
        ...state,
        showTip: false,
      };
    case types.SUBMIT_ORDERS_SUCCESS: {
      return { ...state, showTip: true };
    }
    default:
      return state;
  }
};

export default reducer;

export const getQuantity = (state) => {
    return state.purchase.quantity;
};

export const getTipStatus = (state) => {
    return state.purchase.showTip;
};

export const getProduct = (state, productId) => {
    return getProductDetail(state, productId);
};
