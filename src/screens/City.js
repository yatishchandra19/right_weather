import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { Feather } from '@expo/vector-icons'

import moment from 'moment'

import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  StyleSheet
} from 'react-native'
import IconText from '../components/IconText'

export default function City({ weatherData }) {
  const sunriseTimestamp = weatherData.sunrise * 1000
  const sunsetTimestamp = weatherData.sunset * 1000

  const sunriseDate = new Date(sunriseTimestamp)
  const sunsetDate = new Date(sunsetTimestamp)

  const sunriseTime = sunriseDate.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  const sunsetTime = sunsetDate.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  // console.log(weatherData.name)
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/aerial-shot-downtown-los-angeles-night.jpg')}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityText, styles.cityName]}>
          {weatherData.name}
        </Text>
        <Text style={[styles.cityText, styles.cityName]}>
          {weatherData.country}
        </Text>

        <View style={[styles.populationWrapper, styles.rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={`Population: ${weatherData.population}`}
            bodyTextStyles={styles.populationText}
          />
        </View>

        <View style={[styles.riseSetWrapper, styles.rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={sunriseTime}
            bodyTextStyles={styles.riseSetText}
          />

          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={sunsetTime}
            bodyTextStyles={styles.riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  populationWrapper: {
    marginTop: 30,
    justifyContent: 'center'
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
