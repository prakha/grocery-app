import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from "../Screens/Main"
const Stack = createNativeStackNavigator();

const AppNavigtor = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Main' component={Main} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigtor;