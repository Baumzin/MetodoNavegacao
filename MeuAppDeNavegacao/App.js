import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native';
import HomeScreen from 'src/screens/HomeScreen';
import DetailScreen from 'src/screens/DetailScreen';
import ProfileScreen from 'src/screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>      
      </Stack.Navigator>
    </NavigationContainer>
  );
}