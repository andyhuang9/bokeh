import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home'
import Chat from './src/pages/Chat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './src/shared/Header'


const Stack = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Bokeh',  headerStyle: { backgroundColor: '#FFA500',}}} />
        <Stack.Screen name="Chat" component={Chat} options={{ title: 'Bokeh',  headerStyle: { backgroundColor: '#FFA500',}}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
