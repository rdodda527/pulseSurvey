/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects';
import AllSurveysActions from '../Redux/AllSurveysRedux';
import SurveyDetailsActions from '../Redux/SurveyDetailsRedux';
import Reactotron from 'reactotron-react-native';
import { NavigationActions } from 'react-navigation';
// import { SurveyQuestionsSelectors } from '../Redux/SurveyQuestionsRedux'


export function * getSurveys (api, action) {
  try{
    const response = yield call(api.allSurveys);
    yield put(AllSurveysActions.allSurveysSuccess(response.Data))
  }
  catch(e){
    yield put(AllSurveysActions.allSurveysFailure()) 
  }
}

export function * getSurveyQuestions (api, action) {
      const {survey} = action;
  yield put(NavigationActions.navigate({
    routeName: 'AnswerSurvey',
    params: {
      survey,
      title: survey.survey.SurveyName,
    },
  }));
  try{

    const response = yield call(api.surveyQuestions, survey.survey.SurveyId);
    yield put(SurveyDetailsActions.surveyDetailsSuccess(response.Data))
  }
  catch(e){
    yield put(SurveyDetailsActions.surveyDetailsFailure()) 
  }
}

export function * saveSurveyQuestions(api, action) {
  try {
    const {
      name, questions, date
    } = action;
    const response = yield call(api.saveQuestion, name, questions, date);
    if (response.ResponseCode === 200) {
    // success?

        // You might need to change the response here - do this with a 'transform',
        // located in ../Transforms/. Otherwise, just pass the data back from the api.
        yield put(SurveyDetailsActions.surveyDetailsSuccess(response.data))
          yield put(NavigationActions.navigate({
    routeName: 'AllSurveys',
    params: {
      survey,
      title: survey.survey.SurveyName,
    },
  }));

    }
  } catch (e) {
      yield put(SurveyDetailsActions.surveyDetailsFailure())

  }
}

