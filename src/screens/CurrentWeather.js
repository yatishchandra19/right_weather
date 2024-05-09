import React, { useState } from 'react'
import { useGetWeather } from '../hooks/useGetWeather'
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weather }) => {
  const weatherData = weather.list[0].main
  // console.log(weatherData)
  console.log(weather)
  // console.log(weather.list[0]['weather'][0].main)
  const weatherCondition = weather.list[0]['weather'][0].main

  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
    >
      <View style={styles.container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="black"
        />
        <Text style={styles.tempStyles}>{`${weatherData.temp}°`}</Text>
        <Text
          style={styles.feel}
        >{`Feels like ${weatherData.feels_like}°`}</Text>

        <RowText
          messageTwo={`Low: ${weatherData.temp_min}`}
          messageOne={`High: ${weatherData.temp_max}° | `}
          messageOneStyles={styles.highLow}
          messageTwoStyles={styles.highLow}
          containerStyles={styles.highLowWrapper}
        />
      </View>

      <RowText
        containerStyles={styles.bodyWrapper}
        messageOne={weather.list[0]['weather'][0].description}
        messageTwo={weatherType[weatherCondition].message}
        messageOneStyles={styles.description}
        messageTwoStyles={styles.message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    fontSize: 48,
    color: 'black'
  },
  feel: {
    fontSize: 30
  },
  highLow: {
    fontSize: 20
    // ,marginLeft: 10
  },
  highLowWrapper: {
    flexDirection: 'row'
  },

  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  },

  bodyWrapper: {
    paddingLeft: 25,
    marginBottom: 40
  }
})

export default CurrentWeather
