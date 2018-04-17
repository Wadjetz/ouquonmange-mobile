import { Epic } from "redux-observable"
import { Action } from "redux"
import { Observable } from "rxjs/Observable"
import { GlobalState } from "~/GlobalState"
import * as Api from "~/Api"
import * as LoginActions from "~/login/LoginActions"

export const loginEpic: Epic<Action, GlobalState> = (actions, state) => actions.ofType("LOGIN_SUBMIT")
  .mergeMap((action: LoginActions.LOGIN_SUBMIT) => {
    Api.authenticate(action.email, action.password).then(response => {
      console.log("authenticate.then", response)
      /*if (response.type === "Ok") {
        return LoginActions.loginSubmitSuccess(response.data)
      } else if (response.type === "BadRequest") {
        return LoginActions.loginSubmitError(response.errors)
      } else {
        return Observable.empty()
      }*/
      return Observable.empty()
    }).catch(error => {
      return Observable.empty()
    })

    return Observable.empty()
  })
