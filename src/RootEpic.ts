import { combineEpics } from "redux-observable"
import { loginEpic } from "~/login/LoginEpic"

const RootEpic = combineEpics(
  loginEpic
)

export default RootEpic
