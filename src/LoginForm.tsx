import React from "react"
import { View, Text, ViewStyle, StyleSheet, TextInput } from "react-native"

interface Props {
  email: string
  password: string
  loading: boolean
  error?: any
  onChange: (field: string, value: string) => void
  onSubmit: (login: string, password: string) => void
}

export default class LoginForm extends React.PureComponent<Props> {
  render() {
    const { email, password } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput value={email} onChange={this.handleChange("email")} />
          <Text style={styles.error}>Error</Text>
        </View>
      </View>
    )
  }

  handleChange = (field: string) => (event: { nativeEvent: { text: string } }) => this.props.onChange(field, event.nativeEvent.text)
}

interface Styles {
  container: ViewStyle,
  field: ViewStyle,
  label: ViewStyle,
  error: ViewStyle,
}

const styles = StyleSheet.create({
  container: {
  },
  field: {},
  label: {},
  error: {},
})
