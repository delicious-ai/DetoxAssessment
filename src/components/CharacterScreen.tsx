import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { RootStackParamList } from '../navigation'
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

type Props = NativeStackScreenProps<RootStackParamList, 'Character'>

const CharacterScreen = ({ route }: Props) => {
  const [loading, setLoading] = useState(true)
  const { character } = route.params
  const { name, ...details } = character
  const detailList = Object.entries(details).filter(
    ([_, value]) => typeof value !== 'object',
  )

  useEffect(() => {
    // Simulates a slow network request
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          {detailList.map(([key, value]) => (
            <View style={styles.row} key={key}>
              <Text style={{ fontSize: 20 }}>{key}</Text>
              <Text style={{ fontSize: 15 }}>{value}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    height: 50,
    backgroundColor: '#ffe7e1',
    marginVertical: 10,
    padding: 10,
  },
})

export default CharacterScreen
