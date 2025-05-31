import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from './src/screens/HomeScreen.js';
import DetailsScreen from './src/screens/DetailsScreen.js';
import ProfileScreen from './src/screens/ProfileScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}