const initialState = {
  username: "",
  password: "",
  isFetching: false,
  isLogined: false,
};

//action types
export const types = {
  LOGIN_REQUEST: "LOGIN/LOGIN_REQUSET",
  LOGIN_SUCCESS: "LOGIN/LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN/LOGIN_FAILURE",
  LOGOUT: "LOGIN/LOGOUT",
  SET_USERNAME: "LOGIN/SET_USERNAME",
  SET_PASSWORD: "LOGIN/SET_PASSWORD",
};

// action creators
export const actions = {
  login: () => {
    return (dispatch, getState) => {
      const { username, password } = getState().login;
      if (
        !username ||
        username.length == 0 ||
        !password ||
        password.length == 0
      ) {
        return dispatch(loginFailure("invalid password or username"));
      }
      dispatch(loginRequest());
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          dispatch(loginSuccess());
          resolve();
        }, 3000);
      });
    };
  },
  logout: () => ({
    type: types.LOGOUT,
  }),
  setUsername: (username) => ({
    type: types.SET_USERNAME,
    username,
  }),
  setPassword: (password) => ({
    type: types.SET_PASSWORD,
    password,
  }),
};

const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS,
});

const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
});

const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  error,
});

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, isFetching: true };
    case types.loginFailure:
      return { ...state, isFetching: false };
    case types.LOGIN_SUCCESS:
      return { ...state, isFetching: false, isLogined: true };
    case types.LOGOUT:
      return { ...state, isLogined: false, username: "", password: "" };
    case types.SET_USERNAME:
      return { ...state, username: action.username };
    case types.SET_PASSWORD:
      return { ...state, password: action.password };
    default:
      return state;
  }
};

export default reducer;

// selectors
export const getUsername = (state) => state.login.username;
export const getPassword = (state) => state.login.password;
export const isLogin = (state) => state.login.isLogined;
