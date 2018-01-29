import * as React from "react"
import { Text } from "react-native"
import { DrawerNavigator } from "react-navigation"
import CommunitiesScreen from "~/CommunitiesScreen"
import DrawerContentComponent from "~/DrawerContentComponent"

const AuthorizedNavigator = DrawerNavigator({
  Communities: {
    screen: CommunitiesScreen,
    navigationOptions: {
      drawerLabel: "Login",
      drawerIcon: () => {
        return (
          <Text>L</Text>
        )
      }
    }
  },
}, {
  contentComponent: DrawerContentComponent,
})

export default AuthorizedNavigator
