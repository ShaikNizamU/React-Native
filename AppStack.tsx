import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Home from './Components/Home'
import Touchable from './Components/Touchable'
import TextInput from './Components/TextInput'
import FlatList from './Components/FlatList'
import Register from './Components/Register'
import Todo from './Components/Todo'
import Notifications from './Components/Notifications';

const Stack = createNativeStackNavigator();

const App1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Touchable" component={Touchable}/>
        <Stack.Screen name="TextInput" component={TextInput} />
        <Stack.Screen name="FlatList" component={FlatList} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="Notifications" component={Notifications} />

      </Stack.Navigator> 
    </NavigationContainer>

  );
};

export default App1;
