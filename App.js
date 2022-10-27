import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Home from "./screens/Home"
import Detailed from "./screens/Details"

const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detailed" component={Detailed} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
