import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { RootStackParamList } from '../navigation'

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>

const Login = ({ navigation }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    if (!email.includes('.com')) {
      Alert.alert('Invalid Email', 'Must contain .com', [
        {
          text: 'Okay',
          style: 'default',
        },
      ])
      return
    }
    if (password.length < 6) {
      Alert.alert('Invalid Password', 'Must be at least 6 characters', [
        {
          text: 'Okay',
          style: 'default',
        },
      ])
      return
    }
    navigation.navigate('Characters', { email })
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize={'none'}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button
        onPress={handleSubmit}
        title="Submit"
        disabled={!email || !password}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    height: '100%',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 4,
    height: 50,
    backgroundColor: 'white',
    marginHorizontal: 10,
    padding: 8,
  },
})

export default Login
