
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Login } from '../screens';

const Stack = createNativeStackNavigator();

const rootNavigation = () => {

 const isAuth = false;
    
  return (
   
   <NavigationContainer>
        {
            !isAuth ? <AuthStack/> : <UserStack/>
        }
   </NavigationContainer>
  )
}

export default rootNavigation

