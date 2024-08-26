import React from 'react'

import { View,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Components/Home'
import Touchable from './Components/Touchable'
import TextInput from './Components/TextInput'
import FlatList from './Components/FlatList'
import Register from './Components/Register'
import Todo from './Components/Todo'
import Notifications from './Components/Notifications';
import Performance from './Components/Performance';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// const App1 = () => {
//   return (
    
//       <Stack.Navigator> 
        
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Touchable" component={Touchable}/>
//         <Stack.Screen name="TextInput" component={TextInput} />
//         <Stack.Screen name="FlatList" component={FlatList} />
//         <Stack.Screen name="Register" component={Register} />
//         <Stack.Screen name="Todo" component={Todo} />
//         <Stack.Screen name="Notifications" component={Notifications} />

//       </Stack.Navigator> 
    

//   );
// };



const App2 = () => {
  return (
    
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
         <Drawer.Screen
          name="Performance"
          component={Performance}
          options={{
            drawerActiveTintColor: 'orange',
            drawerLabelStyle:{color:'black'},
            drawerIcon:({focused, size}) => (
                <Image
                source={require('./assets/Performance.png')}
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

    

  );
};



const App3 = () => {
    return (
        
        <Tab.Navigator >
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarActiveTintColor: '#b5058c',
              tabBarIcon: ({focused,size}) => (
                <View>
                  <Image
                    source={require('./assets/Home.png')}
                    style={{
                      width: size,
                      height: size,
                      tintColor:focused? '#b5058c' :'gray',
                    }}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen 
          name="Touchable" 
          component={Touchable} 
          options={{
              tabBarActiveTintColor: '#b5058c',
              tabBarIcon: ({focused,size}) => (
                  <View>
                      <Image 
                      source={require('./assets/Touchable.png')}
                      style={{
                          width:size,
                          height:size,
                          tintColor:focused? '#b5058c':'gray',
                      }}
                      />
                  </View>
              )
          }}
          />
          <Tab.Screen name="TextInput" component={TextInput} 
          options={{
              tabBarActiveTintColor: '#b5058c',
              tabBarIcon: ({focused, size}) => (
                  <View>
                      <Image 
                      source={require('./assets/TextInput.png')}
                      style={{
                          width:size,
                          height:size,
                          tintColor:focused? '#b5058c': 'gray'
                      }}
                      />
                  </View>
              )
          }}
          />
          <Tab.Screen name="FlatList" component={FlatList} 
          options={{
              tabBarActiveTintColor: '#b5058c',
              tabBarIcon: ({focused, size}) => (
                  <View>
                      <Image 
                      source={require('./assets/FlatList.png')}
                      style={{
                          width:size,
                          height:size,
                          tintColor:focused?'#b5058c': 'gray'
                      }}
                      />
                  </View>
              
              )
                  
          }}/>
          <Tab.Screen name="Register" component={Register} 
          options={{
              tabBarActiveTintColor: '#b5058c',
              tabBarIcon: ({focused, size}) =>(
                  <View>
                      <Image 
                      source={require('./assets/Register.png')}
                      style={{
                          width:size,
                          height:size,
                          tintColor:focused? '#b5058c': 'gray'
                      }}
                      />
                  </View>
              )
          }}
          />
          <Tab.Screen name="Todo" component={Todo} 
          options={{
              tabBarActiveTintColor: '#b5058c',
              tabBarIcon: ({focused, size}) =>(
                  <View>
                      <Image 
                      source={require('./assets/Todo.png')}
                      style={{
                          width:size,
                          height:size,
                          tintColor:focused? '#b5058c': 'gray'
                      }}
                      />
                  </View>
              )
          }}
          />
          <Tab.Screen name="Notification" component={Notifications} 
          options={{
              tabBarActiveTintColor: '#b5058c',
              tabBarIcon: ({focused, size}) =>(
                  <View>
                      <Image 
                      source={require('./assets/Notifications.png')}
                      style={{
                          width:size,
                          height:size,
                          tintColor:focused? '#b5058c': 'gray'
                      }}
                      />
                  </View>
              )
          }}
          />
          <Tab.Screen 
          name='Performance'
          component={Performance}
          options={{
            tabBarActiveTintColor: '#b5058c',
            tabBarIcon: ({focused,size}) => (
              <View>
                <Image 
                source={require('./assets/Performance.png')}
                style={{
                  width:size,
                  height:size,
                  tintColor:focused? '#b5058c' : 'gray'
                }}
                />
              </View>
            )
          }}
          />
        </Tab.Navigator>
    
    )    
}

const App = () => {
    return (
      <NavigationContainer>
        <App2 />
      </NavigationContainer>
    );
  };

export default App;


