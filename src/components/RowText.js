import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function RowText({
  containerStyles,
  messageOne,
  messageTwo,
  messageOneStyles,
  messageTwoStyles
}) {
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}

const styles = StyleSheet.create()
