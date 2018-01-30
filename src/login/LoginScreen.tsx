import React from "react"
import { connect, Dispatch } from "react-redux"
import { View, Text, Button, ViewStyle, StyleSheet } from "react-native"
import { NavigationScreenProp, NavigationActions, StackNavigator } from "react-navigation"
import { GlobalState } from "~/GlobalState"
import LoginForm from "~/login/LoginForm"
import { LoginState } from "~/login/LoginReducer"
import * as LoginActions from "~/login/LoginActions"

interface StateProps {
  login: LoginState
}

interface DispatchProps {
  onChange(field: string, value: string): void
  onSubmit(login: string, password: string): void
}

interface OwnProps {
  navigation: NavigationScreenProp<{}, {}>
}

type Props = StateProps & DispatchProps & OwnProps

export class LoginScreen extends React.PureComponent<Props> {
  render() {
    const { navigation, login, onChange, onSubmit } = this.props
    console.log("LoginScreen.render", this.props)
    return (
      <View style={styles.container}>
        <LoginForm {...login} onChange={onChange} onSubmit={this.handleSubmit} />
        <Button title="Signup" onPress={() => {
          navigation.navigate("Signup")
        }} />
      </View>
    )
  }

  handleSubmit = () => {
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: "Authorized" })
      ]
    }))
  }
}

function mapStateToProps(state: GlobalState, props: OwnProps): OwnProps & StateProps {
  return {
    login: state.login,
    navigation: props.navigation
  }
}

function mapDispatchToProps(dispatch: Dispatch<GlobalState>): DispatchProps {
  return {
    onChange: (field, value) => dispatch(LoginActions.loginChange(field, value)),
    onSubmit: (login, password) => dispatch(LoginActions.loginSubmit(login, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

interface Styles {
  container: ViewStyle,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
})
