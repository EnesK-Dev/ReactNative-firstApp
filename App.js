import { View,} from 'react-native';
import React from 'react';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import Sign from './src/screens/Sign';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigation from './src/navigation/rootNavigation';

const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    <RootNavigation/>
    
  )
}

export default App;

