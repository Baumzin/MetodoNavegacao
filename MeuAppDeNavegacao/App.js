import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.js';
import DetailsScreen from './src/screens/DetailsScreen.js';
import ProfileScreen from './src/screens/ProfileScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>      
      </Stack.Navigator>
    </NavigationContainer>
  );
}