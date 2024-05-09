import React, { useState, useEffect } from 'react'
import { WEATHER_API_KEY } from '@env'
import * as Location from 'expo-location'

export function useGetWeather() {
  const [loading, setLoading] = useState(true)
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
      )
      const data = await res.json()
      setWeather(data)
      setLoading(false)
    } catch (e) {
      setError('Could not fetch weather')
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location is denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLong(location.coords.longitude)
    })()
  }, [])

  useEffect(() => {
    if (lat !== null && long !== null) {
      fetchWeatherData()
    }
  }, [lat, long])

  return [weather, error, loading]
}
