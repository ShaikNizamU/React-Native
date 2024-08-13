import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Components/Home';
import Touchable from './Components/Touchable';
import TextInputs from './Components/TextInput';
import FlatList from './Components/FlatList';
import Register from './Components/Register';
import Todo from './Components/Todo';
import Notifications from './Components/Notifications';

const Tab = createBottomTabNavigator();

export default function App3() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
        <Tab.Screen name="TextInput" component={TextInputs} 
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}
