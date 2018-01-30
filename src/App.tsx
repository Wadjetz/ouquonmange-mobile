import React, { PureComponent } from "react"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { createEpicMiddleware } from "redux-observable"
import { Provider } from "react-redux"
import RootNavigator from "~/RootNavigator"
import LoginReducer from "~/login/LoginReducer"
import RootEpic from "~/RootEpic"

const reducers = combineReducers({
  login: LoginReducer,
})

const epicMiddleware = createEpicMiddleware(RootEpic)

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(epicMiddleware)
))

export default class App extends PureComponent<{}> {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}
