import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setEmail('');
      setPassword('');
    }
  }, [isFocused]);

  const saveEmailPass = async () => {

    if (!email) {
      Toast.show('Please Enter Your  Email', Toast.SHORT)
      return;
    } 

    if (!password) {
      Toast.show('Please Enter Password', Toast.SHORT)
      return;
    }

    const FIXED_EMAIL = 'nizzu030@gmail.com';
    const FIXED_PASSWORD = '123456'

    if (email === FIXED_EMAIL && password === FIXED_PASSWORD){
      try {
        await AsyncStorage.setItem('EMAIL', email);
        await AsyncStorage.setItem('PASSWORD', password);
        Toast.show('Login Sucessfully', Toast.SHORT);
        navigation.navigate('Contact');
      } catch (e) {
        console.log(e);
      }
    }else if (email != FIXED_EMAIL){
      Toast.show('Please Enter Your valid Email', Toast.SHORT)
    }else{
      Toast.show('Please Enter Your valid Password', Toast.SHORT)
    }
    
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 25,
          fontWeight: '600',
          color: '#000000',
        }}>
        Login
      </Text>

      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{
          width: '80%',
          height: 50,
          borderWidth: 1,
          marginTop: 30,
          borderRadius: 10,
          paddingLeft: 30,
          alignSelf: 'center',
        }}
      />

      <TextInput
        placeholder="Enter password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={{
          width: '80%',
          height: 50,
          borderWidth: 1,
          marginTop: 30,
          borderRadius: 10,
          paddingLeft: 30,
          alignSelf: 'center',
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#000000',
          height: 50,
          width: '80%',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          alignSelf: 'center',
        }}
        onPress={() => {
          saveEmailPass();
        }}>
        <Text style={{color: '#ffffff'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
