import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Intro from './Components/async/Intro';
import Login from './Components/async/Login';
import Contact from './Components/async/Contact';
import AddContact from './Components/async/AddContact';


const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen 
                name='Intro'
                component={Intro}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen 
                name='Login'
                component={Login}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen 
                name='Contact'
                component={Contact}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen 
                name='AddContact'
                component={AddContact}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})