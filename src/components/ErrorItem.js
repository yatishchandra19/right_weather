import { Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useGetWeather } from '../hooks/useGetWeather'

export default function ErrorItem() {
  const [weather, error, loading] = useGetWeather()

  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{error}</Text>
      <Feather name="frown" size={100} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorMessage: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 10,
    textAlign: 'center'
  }
})
