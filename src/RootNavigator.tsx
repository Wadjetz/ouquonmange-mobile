import { StackNavigator } from "react-navigation"
import LoginScreen from "~/login/LoginScreen"
import SignupScreen from "~/SignupScreen"
import AuthorizedNavigator from "~/AuthorizedNavigator"

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Signup: {
    screen: SignupScreen,
  },
  Authorized: {
    screen: AuthorizedNavigator,
  },
}, {
  headerMode: "none"
})

export default RootNavigator
