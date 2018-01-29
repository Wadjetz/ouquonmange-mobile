import React from "react"
import { View, Text, Button } from "react-native"
import { NavigationScreenProp } from "react-navigation"

interface Props {
  navigation: NavigationScreenProp<{}, {}>
}

export default class SignupScreen extends React.PureComponent<Props> {
  render() {
    const { navigation } = this.props
    console.log("SignupScreen.render", this.props)
    return (
      <View>
        <Button title="Login" onPress={() => {
          console.log("SignupScreen.onPress Login")
          navigation.navigate("Login", { lol: "Login" })
        }} />
      </View>
    )
  }
}
