import { FETCH_DATA } from "../middlewares/api";
import { schema as keywordSchema, getKeywordById } from "./entities/keywords";
import url from "../../utils/urls.js";
import { combineReducers } from "redux";
import { schema as shopSchema } from "./entities/shops";

export const types = {
  FETCH_POPULAR_KEYWORDS_REQUEST: "FETCH_POPULAR_KEYWORDS_REQUEST",
  FETCH_POPULAR_KEYWORDS_SUCCESS: "FETCH_POPULAR_KEYWORDS_SUCCESS",
  FETCH_POPULAR_KEYWORDS_FAILURE: "FETCH_POPULAR_KEYWORDS_FAILURE",
  FETCH_RELATED_KEYWORDS_REQUEST: "FETCH_RELATED_KEYWORDS_REQUEST",
  FETCH_RELATED_KEYWORDS_SUCCESS: "FETCH_RELATED_KEYWORDS_SUCCESS",
  FETCH_RELATED_KEYWORDS_FAILURE: "FETCH_RELATED_KEYWORDS_FAILURE",
  SET_INPUT_TEXT: "SEARCH/SET_INPUT_TEXT",
  CLEAR_INPUT_TEXT: "SEARCH/CLEAR_INPUT_TEXT",
  ADD_HISTORY_KEYWORD: "SEARCH/ADD_HISTORY_KEYWORD",
  CLEAR_HISTORY_KEYWORDS: "SEARCH/CLEAR_HISTORY_KEYWORDS",
  FETCH_SHOPS_REQUEST: "SEARCH/FETCH_SHOPS_REQUEST",
  FETCH_SHOPS_SUCCESS: "SEARCH/FETCH_SHOPS_SUCCESS",
  FETCH_SHOPS_FAILURE: "SEARCH/FETCH_SHOPS_FAILURE",
};

const initialState = {
  inputText: "",
  popularKeywords: {
    isFetching: false,
    ids: [],
  },
  /**
   * relatedKeywords structure:
   * {
   *  'fastfood': {
   *      isFetching: false,
   *      ids: []
   *  }
   * }
   */
  relatedKeywords: {},
  historyKeywords: [], //keyword ids,
  /**
   * searchedShopsByKeywords structure:
   * {
   *  'keywordId': {
   *      isFetching: false,
   *      ids: []
   *  }
   * }
   */
  searchedShopsByKeywords: {},
};

export const actions = {
  loadPopularKeywords: () => {
    return (dispatch, getState) => {
      const { ids } = getState().search.popularKeywords;
      if (ids.length > 0) {
        return null;
      }
      const endpoint = url.getPopularKeywords();
      return dispatch(fetchPopularKeywords(endpoint));
    };
  },
  loadRelatedKeywords: (text) => {
    return (dispatch, getState) => {
      const { relatedKeywords } = getState().search;
      if (relatedKeywords[text]) {
        return null;
      }
      const endpoint = url.getRelatedKeywords(text);
      return dispatch(fetchRelatedKeywords(text, endpoint));
    };
  },
  loadRelatedShops: (keyword) => {
    return (dispatch, getState) => {
      const { searchedShopsByKeywords } = getState().search;
      if (searchedShopsByKeywords[keyword]) {
        return null;
      }
      const endpoint = url.getRelatedShops(keyword, end);
      return dispatch(fetchRelatedShops(keyword, endpoint));
    };
  },
  setInputText: (text) => ({
    type: types.SET_INPUT_TEXT,
    text,
  }),
  clearInputText: () => ({
    type: types.CLEAR_INPUT_TEXT,
  }),
  addHistoryKeyword: (keywordId) => ({
    type: types.ADD_HISTORY_KEYWORD,
    text: keywordId,
  }),
  clearHistoryKeywords: () => ({
    type: types.CLEAR_HISTORY_KEYWORDS,
  }),
};

const fetchPopularKeywords = (endpoint) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_POPULAR_KEYWORDS_REQUEST,
      types.FETCH_POPULAR_KEYWORDS_SUCCESS,
      types.FETCH_POPULAR_KEYWORDS_FAILURE,
    ],
    endpoint,
    schema: keywordSchema,
  },
});

const fetchRelatedKeywords = (text, endpoint) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_RELATED_KEYWORDS_REQUEST,
      types.FETCH_RELATED_KEYWORDS_SUCCESS,
      types.FETCH_RELATED_KEYWORDS_FAILURE,
    ],
    endpoint,
    schema: keywordSchema,
  },
  text,
});

const fetchRelatedKeywords = (text, endpoint) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_SHOPS_REQUEST,
      types.FETCH_SHOPS_SUCCESS,
      types.FETCH_SHOPS_FAILURE,
    ],
    endpoint,
    schema: shopSchema,
  },
  text,
});

//reducers
const popularKeywords = (state = initialState.popularKeywords, action) => {
  switch (action.type) {
    case types.FETCH_POPULAR_KEYWORDS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_POPULAR_KEYWORDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ids: state.ids.concat(action.response.ids),
      };
    case types.FETCH_POPULAR_KEYWORDS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

const relatedKeywords = (state = initialState.relatedKeywords, action) => {
  switch (action.type) {
    case types.FETCH_RELATED_KEYWORDS_REQUEST:
    case types.FETCH_RELATED_KEYWORDS_SUCCESS:
    case types.FETCH_RELATED_KEYWORDS_FAILURE:
      return {
        ...state,
        [action.text]: relatedKeywordsByText(state[action.text], action),
      };
    default:
      return state;
  }
};

const relatedKeywordsByText = (
  state = { isFetching: false, ids: [] },
  action
) => {
  switch (action.type) {
    case types.FETCH_RELATED_KEYWORDS_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_RELATED_KEYWORDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ids: state.ids.concat(action.response.ids),
      };
    case types.FETCH_RELATED_KEYWORDS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

const inputText = (state = initialState.inputText, action) => {
  switch (action.type) {
    case types.SET_INPUT_TEXT:
      return action.text;
    case types.CLEAR_INPUT_TEXT:
      return "";
    default:
      return state;
  }
};
const historyKeywords = (state = initialState.historyKeywords, action) => {
  switch (action.type) {
    case types.ADD_HISTORY_KEYWORD:
      const keywords = state.filter((keyword) => {
        if (keyword != action.text) {
          return true;
        }
        return false;
      });
      return [action.text, ...keywords];
    case types.CLEAR_HISTORY_KEYWORDS:
      return [];
    default:
      return state;
  }
};

const searchedShopsByKeywords = (state = initialState.searchedShopsByKeywords, action) => {
  switch (action.type) {
    case types.FETCH_SHOPS_REQUEST:
    case types.FETCH_SHOPS_SUCCESS:
    case types.FETCH_SHOP_FAILURE:
      return {
        ...state,
        [action.text]: searchedShops(state[action.text], action),
      };
    default:
      return state;
  }
};

const searchedShops = (
  state = { isFetching: false, ids: [] },
  action
) => {
  switch (action.type) {
    case types.FETCH_SHOPS_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_SHOPS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ids: action.response.ids,
      };
    case types.FETCH_SHOPS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};


export const reducer = combineReducers({
  popularKeywords,
  relatedKeywords,
  inputText,
  historyKeywords,
  searchedShopsByKeywords
});

export default reducer;

// selectors
export const getPopularKeywords = (state) => {
  return state.search.popularKeywords.ids.map((id) => {
    return getKeywordById(state, id);
  });
};

export const getRelatedKeywords = (state) => {
  const text = state.search.inputText;
  if (!text || text.trim().length == 0) {
    return [];
  }
  const relatedKeywords = state.search.relatedKeywords[text];
  if (!relatedKeywords) {
    return [];
  }
  return relatedKeywords.ids.map((id) => {
    return getKeywordById(state, id);
  });
};

export const getInputText = (state) => {
  return state.search.inputText;
};

export const getHistoryKeywords = (state) => {
  return state.search.historyKeywords.map((keywordId) => {
    return getKeywordById(state, keywordId);
  });
};
