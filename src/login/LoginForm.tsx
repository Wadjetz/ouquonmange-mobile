import React from "react"
import { View, Text, ViewStyle, StyleSheet, TextInput, Button } from "react-native"
import Input from "~/components/Input"

interface Props {
  email: string
  password: string
  loading: boolean
  error?: any
  onChange(field: string, value: string): void
  onSubmit(email: string, password: string): void
}

export default class LoginForm extends React.PureComponent<Props> {
  render() {
    const { email, password } = this.props
    return (
      <View style={styles.container}>
        <Input label="Email" value={email} onChange={this.handleChange("email")} />
        <Input label="Password" value={password} onChange={this.handleChange("password")} />
        <Button title="Login" onPress={this.handleSubmit} />
      </View>
    )
  }
  handleSubmit = () => this.props.onSubmit(this.props.email, this.props.password)
  handleChange = (field: string) => (value: string) => this.props.onChange(field, value)
}

interface Styles {
  container: ViewStyle,
  field: ViewStyle,
  label: ViewStyle,
  error: ViewStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    padding: 20,
  },
  field: {},
  label: {},
  error: {},
})
