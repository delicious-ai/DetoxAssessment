import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Character } from './types'

export type RootStackParamList = {
  Login: undefined
  Characters: { email: string }
  Character: { character: Character }
}

export const Stack = createNativeStackNavigator<RootStackParamList>()
