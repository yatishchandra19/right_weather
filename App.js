import React, { useState, useEffect } from 'react'

import { WEATHER_API_KEY } from '@env'
import * as Location from 'expo-location'
import { useGetWeather } from './src/hooks/useGetWeather'

import ErrorItem from './src/components/ErrorItem'

import CurrentWeather from './src/screens/CurrentWeather'

import { NavigationContainer } from '@react-navigation/native'

import { Text, View, StyleSheet, ActivityIndicator, Button } from 'react-native'

import Tabs from './src/components/Tabs'

export default function App() {
  const [weather, error, loading] = useGetWeather()
  console.log(weather)

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={80} color={'blue'} />
      </View>
    )
  }

  if (!weather) {
    return <ErrorItem />
  } else {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})
