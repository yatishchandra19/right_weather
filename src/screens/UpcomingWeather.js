import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground
} from 'react-native'

import ListItem from '../../src/components/ListItem'

import { StatusBar } from 'expo-status-bar'

export default function UpcomingWeather({ weatherData }) {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/clouds.jpg')}
        style={styles.image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'red'
  },
  image: {
    flex: 1
  }
})
