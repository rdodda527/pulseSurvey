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

import { call, put, select } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import LoginActions,  { LoginSelectors }from '../Redux/LoginRedux'
import authUserToUser from '../Transforms/ConvertAuthUserToUser';
// import { LoginSelectors } from '../Redux/LoginRedux'

export function* doLogin (api, action) {
  try{
    const { email, password } = action;
      let response = yield call(api.login,email,password);
      if (response.ResponseCode === 200){
        yield put(LoginActions.loginSuccess(response.Data));
        try{
          const token = yield select(LoginSelectors.getToken);
          response = yield call(api.getAppUser, token);
          if(response.ResponseCode === 200){
            const user = authUserToUser(response.Data);
            yield put(LoginActions.loginUserFetchSuccess(user));
          }
        } catch(e){
          yield put(LoginActions.loginFailure(e.message));
        }
        yield put(NavigationActions.navigate({routeName: 'AllSurveys'}));
      } else {
        yield put(LoginActions.loginFailure(response.ErrorMessage));
      } 
  } catch(e){
    yield put(LoginActions.loginFailure(e.message));
  }
}

