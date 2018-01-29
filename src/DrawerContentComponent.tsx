import React, { PureComponent } from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from "react-native"
import { DrawerItems, SafeAreaView, DrawerNavigator } from "react-navigation"

export default class DrawerContentComponent extends PureComponent<{}> {
  render() {
    console.log("DrawerContentComponent", this.props)
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <DrawerItems {...this.props} />
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
