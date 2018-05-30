import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import Authentication from '../Services/Authentication'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'
import SurveyQuestions from '../Services/SurveyQuestions'
import AppConfig from '../Config/AppConfig'
/* ------------- Types ------------- */


import { LoginTypes } from '../Redux/LoginRedux'
import { SurveyDetailsTypes } from '../Redux/SurveyDetailsRedux'
import { AllSurveysTypes } from '../Redux/AllSurveysRedux'
import { EmployeeRoasterTypes } from '../Redux/EmployeeRoasterRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { saveSurveyQuestions } from './SurveyQuestionsSagas'
import { getSurveys } from './SurveyQuestionsSagas'
import { getSurveyQuestions } from './SurveyQuestionsSagas'
import { doLogin } from './LoginSagas'
import { getEmployeeRoaster } from './EmployeeRoasterSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const { baseUrl } = AppConfig
const authApi = Authentication.create(baseUrl)
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
const questionsApi = SurveyQuestions.create(baseUrl)

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
  	// Login
    takeLatest(LoginTypes.LOGIN_REQUEST, doLogin, authApi),
    takeLatest(SurveyDetailsTypes.SURVEY_DETAILS_REQUEST, saveSurveyQuestions, questionsApi),
    // some sagas only receive an action
    takeLatest(AllSurveysTypes.ALL_SURVEYS_REQUEST, getSurveys, questionsApi),
    takeLatest(SurveyDetailsTypes.SURVEY_SELECT, getSurveyQuestions, questionsApi),
    takeLatest(EmployeeRoasterTypes.EMPLOYEE_ROASTER_REQUEST, getEmployeeRoaster, questionsApi),
    
    // some sagas receive extra parameters in addition to an action

  ])
}
