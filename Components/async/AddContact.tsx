import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';


export default function AddContact() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const navigation = useNavigation();

    const saveContact = async () =>{

      if(!name) {
        Toast.show('Please Enter Name', Toast.SHORT)
        return;
      }

      if (!mobile ) {
        Toast.show('Please Enter Mobile No',Toast.SHORT)
        return;
      }

      try{

        const storedContacts = await AsyncStorage.getItem('CONTACTS')
        let contacts = storedContacts? JSON.parse(storedContacts) : [];

        contacts.push({name, mobile})

        await AsyncStorage.setItem('CONTACTS', JSON.stringify(contacts))
        navigation.goBack();
        
      }catch(e){
        console.log(e)
      }
    }



  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={text => setName(text)}
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
        placeholder="Enter mobile number"
        keyboardType='number-pad'
        value={mobile}
        onChangeText={text => setMobile(text)}
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
        onPress={()=>{saveContact()}}
      >
        <Text style={{color: '#ffffff'}}>Save Contact</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})