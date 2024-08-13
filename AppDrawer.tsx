import { Image } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Touchable from './Components/Touchable';
import TextInput from './Components/TextInput';
import FlatList from './Components/FlatList';
import Register from './Components/Register';
import Todo from './Components/Todo';
import Home from './Components/Home';
import Notifications from './Components/Notifications'

const Drawer = createDrawerNavigator();

export default function App2() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerActiveTintColor: 'green',
            drawerLabelStyle:{color:'black'},
            drawerIcon:({focused, size}) => (
                <Image
                source={require('./assets/Home.png')}
                style={{
                    width:size,
                    height:size,
                    tintColor:focused ?'green' : 'grey',
                }}
                />
            )
          }}
        />
        <Drawer.Screen
          name="Touchable"
          component={Touchable}
          options={{
            drawerActiveTintColor: 'blue',
            drawerLabelStyle:{color:'black'},
            drawerIcon:({focused, size}) => (
                <Image
                source={require('./assets/Touchable.png')}
                style={{
                    width:size,
                    height:size,
                    tintColor:focused ? 'blue' : 'gray',
                }}
                />
            )
        }}
        />
        <Drawer.Screen
          name="TextInput"
          component={TextInput}
          options={{
            drawerActiveTintColor: 'black',
            drawerLabelStyle:{color:'black'},
            drawerIcon:({focused, size}) => (
                <Image
                source={require('./assets/TextInput.png')}
                style={{
                    width:size,
                    height:size,
                    tintColor:focused ? 'black' : 'gray',
                }}
                />
            )
        }}
        />
        <Drawer.Screen
          name="FlatList"
          component={FlatList}
          options={{
            drawerActiveTintColor: 'pink',
            drawerLabelStyle:{color:'black'},
            drawerIcon:({focused, size}) => (
                <Image
                source={require('./assets/FlatList.png')}
                style={{
                    width:size,
                    height:size,
                    tintColor:focused ? 'pink' : 'gray',
                }}
                />
            )
        }}
        />
        <Drawer.Screen
          name="Register"
          component={Register}
          options={{
            drawerActiveTintColor: 'red',
            drawerLabelStyle:{color:'black'},
            drawerIcon:({focused, size}) => (
                <Image
                source={require('./assets/Register.png')}
                style={{
                    width:size,
                    height:size,
                    tintColor:focused ? 'red' : 'gray',
                }}
                />
            )
        }}
        />
        <Drawer.Screen
          name="Todo"
          component={Todo}
          options={{
            drawerActiveTintColor: 'yellow',
            drawerLabelStyle:{color:'black'},
            drawerIcon:({focused, size}) => (
                <Image
                source={require('./assets/Todo.png')}
                style={{
                    width:size,
                    height:size,
                    tintColor:focused ? 'yellow' : 'gray',
                }}
                />
            )
        }}
        />
        <Drawer.Screen
          name="Notifications"
          component={Notifications}
          options={{
            drawerActiveTintColor: 'orange',
            drawerLabelStyle:{color:'black'},
            drawerIcon:({focused, size}) => (
                <Image
                source={require('./assets/Notifications.png')}
                style={{
                    width:size,
                    height:size,
                    tintColor:focused ? 'orange' : 'gray',
                }}
                />
            )
        }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
