import React from "react"
import { View, Text, Button } from "react-native"
import { NavigationScreenProp, NavigationActions, StackNavigator } from "react-navigation"
import SignupScreen from "~/SignupScreen"

interface Props {
  navigation: NavigationScreenProp<{}, {}>
}

export default class CommunitiesScreen extends React.PureComponent<Props> {
  componentWillMount() {
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: "Login" })
      ]
    }))
  }

  render() {
    const { navigation } = this.props
    console.log("CommunitiesScreen.render", this.props)
    return (
      <View>
        <Text>Communities Screen ff</Text>
        <Button title="Open" onPress={() => {
          navigation.navigate("DrawerOpen")
        }} />
      </View>
    )
  }
}
