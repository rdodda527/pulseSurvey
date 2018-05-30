import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Reactotron from 'reactotron-react-native'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  surveyDetailsRequest: ['name','questions','date'],
  surveyDetailsSuccess: ['payload'],
  surveyDetailsFailure: null,
  surveySelect :['survey']
})

export const SurveyDetailsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  surveys: null,
  answerquestions: null,
})

/* ------------- Selectors ------------- */

export const SurveyDetailsSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, action) => 
{
  const { name, questions, date} = action
  return state.merge({ name,questions,date, payload:null, saving:true, })
}

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, answerquestions: payload })
}

export const select = state =>
  state.merge({ fetching: true });

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SURVEY_DETAILS_REQUEST]: request,
  [Types.SURVEY_DETAILS_SUCCESS]: success,
  [Types.SURVEY_DETAILS_FAILURE]: failure,
  [Types.SURVEY_SELECT]: select
})
