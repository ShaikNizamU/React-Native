import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Intro() {

    const navigation = useNavigation();

    useEffect(() =>{
        setTimeout(()=>{
          checkLogin()
        },3000)
    }, []);

    const checkLogin = async () =>{
      const email=await AsyncStorage.getItem('EMAIL')

      if(email!==null){
        navigation.navigate('Contact')
      }else{
        navigation.navigate('Login')
      }
    }

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 23, fontWeight: 'bold', color: '#000000'}}>My Contact App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})