import React, { PureComponent } from "react"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { Provider } from "react-redux"
import RootNavigator from "~/RootNavigator"
import LoginReducer from "~/login/LoginReducer"

const reducers = combineReducers({
  login: LoginReducer,
})

const store = createStore(reducers, composeWithDevTools())

export default class App extends PureComponent<{}> {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}
