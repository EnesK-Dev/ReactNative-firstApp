import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'
import { Login,Sign } from '../screens'


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
     <Stack.Navigator>
           <Stack.Screen  name='Login'  component={Login}/>
           <Stack.Screen   name='Sign'  component={Sign}/>
       </Stack.Navigator>
  )
}

export default AuthStack
