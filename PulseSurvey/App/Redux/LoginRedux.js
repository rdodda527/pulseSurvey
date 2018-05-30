import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['email','password'],
  loginSuccess: ['payload'],
  loginUserFetchSuccess: ['payload'],
  loginFailure: ['payload'],
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  errorMsg: null,
  token: null,
  user: null,
})

/* ------------- Selectors ------------- */

export const LoginSelectors = {
  getData: state => state.data,
  getToken: (state) => {
    if (state.login.token) {
      return state.login.token;
    }
    return null;
  },
  getUser: (state) => {
    if (state.login.user) {
      return state.login.user;
    }
    return null;
  },
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = state => state.merge({ fetching: true })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, token: payload.access_token })
}

// successfully fetched user from auth token
export const userFetchSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ user: payload })
}

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: false, errorMsg: payload })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_USER_FETCH_SUCCESS]: userFetchSuccess,
  [Types.LOGIN_FAILURE]: failure,
})
