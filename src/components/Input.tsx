import React from "react"
import { View, Text, TextInput, StyleSheet, ViewStyle, TextStyle } from "react-native"

interface Props {
  value: string
  label: string
  type?: string
  error?: string
  onChange(value: string): void
}

type InputEvent = { nativeEvent: { text: string } }

export default class Input extends React.PureComponent<Props> {
  render() {
    const { label, value, error } = this.props
    return (
      <View style={styles.field}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} value={value} onChange={this.handleChange} />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    )
  }

  handleChange = (event: InputEvent) => this.props.onChange(event.nativeEvent.text)
}

interface Styles {
  field: ViewStyle
  input: ViewStyle,
  label: TextStyle,
  error: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  field: {
    marginVertical: 10,
  },
  input: {
    paddingVertical: 4,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
  },
  label: {
  },
  error: {
  }
})
