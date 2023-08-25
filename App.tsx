import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, View, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Login from './src/components/Login'
import { Stack } from './src/navigation'
import CharacterList from './src/components/CharacterList'
import CharacterScreen from './src/components/CharacterScreen'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Characters" component={CharacterList} />
          <Stack.Screen name="Character" component={CharacterScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}

export default App
