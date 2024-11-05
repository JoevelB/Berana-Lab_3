import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogInPage from './LogInPage'; 
import SignUpScreen from './SignUpScreen'; 
import ForgotPasswordScreen from './ForgotPasswordScreen'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogInPage" component={LogInPage} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ title: 'Forgot Password' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
