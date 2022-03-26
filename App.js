import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home'
import Chat from './src/pages/Chat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
