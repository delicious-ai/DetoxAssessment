import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Character } from '../types'

type CharacterDetailTileProps = {
  character: Character
  onSelect: () => void
}

const CharacterDetailTile = (props: CharacterDetailTileProps) => {
  const { character, onSelect } = props

  return (
    <Pressable onPress={onSelect} style={styles.details}>
      <View style={styles.row}>
        <Text>Name:</Text>
        <Text>{character.name}</Text>
      </View>
      <View style={styles.row}>
        <Text>Eye Color:</Text>
        <Text>{character.eye_color}</Text>
      </View>
      <View style={styles.row}>
        <Text>Mass:</Text>
        <Text>{character.mass}</Text>
      </View>
      <View style={styles.row}>
        <Text>Num Films:</Text>
        <Text>{character.films.length}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    width: '100%',
    backgroundColor: 'lightgrey',
    borderRadius: 4,
    borderColor: 'black',
    gap: 4,
    padding: 8,
  },
  row: {
    flexDirection: 'row',
  },
})

export default CharacterDetailTile
