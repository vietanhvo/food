import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen'
import ResultShowScreen from './src/screens/ResultShowScreen'

const Stack = createStackNavigator();
const navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SearchScreen' defaultNavigatorOptions={'Food'}>
        <Stack.Screen 
          name='SearchScreen'
          component={SearchScreen}
        />
        <Stack.Screen 
          name='ResultScreen'
          component={ResultShowScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default navigator;
