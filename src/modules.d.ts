import * as ReactNavigation from "react-navigation"
import * as ReactNative from "react-native"

declare module "react-navigation" {
  interface SafeAreaViewProps {
    activeItemKey: string
    items: Item[]
    onItemPress: () => void
    navigation: ReactNavigation.NavigationScreenProp<any, any>
  }

  interface Item {
    key: string
    routeName: string
  }
  export const SafeAreaView: React.ComponentClass<ReactNative.ViewProperties>
}
