import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import Reactotron from 'reactotron-react-native';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  surveyQuestionsRequest: ['data'],
  surveyQuestionsSuccess: ['payload'],
  surveyQuestionsFailure: null,
  saveQuestion:['question'],
})

export const SurveyQuestionsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  question: null,
})

/* ------------- Selectors ------------- */

export const SurveyQuestionsSelectors = {
  getData: state => state.data,
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

//successful saving question
export const saveQuestion = (state, action) => {
  const { question } = action
  return state.merge({ question });
}  

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SURVEY_QUESTIONS_REQUEST]: request,
  [Types.SURVEY_QUESTIONS_SUCCESS]: success,
  [Types.SURVEY_QUESTIONS_FAILURE]: failure,
  [Types.SAVE_QUESTION]: saveQuestion,
})
