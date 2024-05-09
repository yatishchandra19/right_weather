import React from 'react'

import { Feather } from '@expo/vector-icons'

import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { useGetWeather } from '../hooks/useGetWeather'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export default function Tabs({ weather }) {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'lightblue'
        },
        headerStyle: {
          backgroundColor: 'lightblue'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'tomato',
          fontSize: 25
        }
      }}
    >
      <Tab.Screen
        name={'Current'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={24}
              color={focused ? 'tomato' : 'grey'}
            />
          )
        }}
      >
        {() => <CurrentWeather weather={weather} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Upcoming'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={24}
              color={focused ? 'tomato' : 'grey'}
            />
          )
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={24}
              color={focused ? 'tomato' : 'grey'}
            />
          )
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
    // </NavigationContainer>
  )
}
