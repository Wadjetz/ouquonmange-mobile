import { Epic } from "redux-observable"
import { Action } from "redux"
import { Observable } from "rxjs/Observable"
import { GlobalState } from "~/GlobalState"
import * as Api from "~/Api"
import * as LoginActions from "~/login/LoginActions"

export const loginEpic: Epic<Action, GlobalState> = (actions, state) => actions.ofType("LOGIN_SUBMIT")
  .mergeMap((action: LoginActions.LOGIN_SUBMIT) => {
    return Api.authenticate(action.email, action.password)
      .then(LoginActions.loginSubmitSuccess)
      .catch(LoginActions.loginSubmitError)
  })
