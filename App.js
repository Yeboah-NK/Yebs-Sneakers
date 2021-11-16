import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import Welcome from './screens/welcome';
import Home from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './screens/login';
import Cart from './screens/cart';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen  name='Welcome' component={Welcome} options ={{headerShown:false}}/>
        <Stack.Screen  name='LogIn' component={LogIn} options ={{headerShown:false}}/>
        <Stack.Screen name='Cart' component={Cart} option ={{headerShown:false}}/> 
         <Stack.Screen  name='Home' component={Home} options ={{headerShown:false}} />

        </Stack.Navigator>
    </NavigationContainer>



    
  );
}