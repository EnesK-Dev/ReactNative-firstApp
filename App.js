import { View,} from 'react-native';
import React from 'react';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import Sign from './src/screens/Sign';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={Login} name='Login'/>
        <Stack.Screen component={Sign} name='Sign'/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App;

