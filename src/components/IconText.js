import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function IconText({
  iconName,
  iconColor,
  bodyText,
  bodyTextStyles
}) {
  return (
    <View style={styles.container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold'
  }
})
