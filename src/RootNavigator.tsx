import { StackNavigator } from "react-navigation"
import LoginScreen from "~/LoginScreen"
import SignupScreen from "~/SignupScreen"
import AuthorizedNavigator from "~/AuthorizedNavigator"

const RootNavigator = StackNavigator({
  Authorized: {
    screen: AuthorizedNavigator,
  },
  Login: {
    screen: LoginScreen,
  },
  Signup: {
    screen: SignupScreen,
  },
}, {
  headerMode: "none"
})

export default RootNavigator
