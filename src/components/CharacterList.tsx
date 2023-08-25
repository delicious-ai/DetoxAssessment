import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../navigation'
import CharacterDetailTile from './CharacterDetailTile'
import { CHARACTERS } from '../data'

type Props = NativeStackScreenProps<RootStackParamList, 'Characters'>

const CharacterList = ({ route, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Welcome {route.params?.email}!</Text>
        <Text>Star Wars Character List</Text>
        <Text>Select a character to learn more</Text>
      </View>
      <FlatList
        data={CHARACTERS}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <CharacterDetailTile
            character={item}
            onSelect={() =>
              navigation.navigate('Character', { character: item })
            }
          />
        )}
        ListEmptyComponent={<Text>No Data!</Text>}
        style={styles.list}
        contentContainerStyle={styles.content}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    padding: 25,
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    gap: 10,
    marginHorizontal: 10,
  },
  list: {
    flex: 1,
    marginBottom: 50,
    width: '100%',
    marginHorizontal: 20,
  },
})

export default CharacterList
