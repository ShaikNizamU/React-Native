import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useIsFocused} from '@react-navigation/native';

export default function Contact() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [contactList, setContactList] = useState();

  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = async () => {
    const contacts = await AsyncStorage.getItem('CONTACTS');
    setContactList(JSON.parse(contacts));
  };
  
  const deleteContact = async index => {

    const tempData=contactList;
    console.log("This is temp data"+tempData)

    const slectedData = tempData.filter((item,ind)=>{
      return ind != index;
    });
    setContactList(slectedData)
    await AsyncStorage.setItem('CONTACTS', JSON.stringify(slectedData) )
  }

  const logout = async () =>{
    try{
      await AsyncStorage.removeItem('EMAIL');    
      await AsyncStorage.removeItem('PASSWORD'); 
      await AsyncStorage.clear();
      navigation.navigate('Login')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={{flex: 1}}>

      <FlatList
        data={contactList}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                height: 50,
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: 10,
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              
              <Text style={{marginHorizontal:10, fontWeight:'bold', color:'#000000'}}>{item.name.toUpperCase()}</Text>
              <Text style={{marginHorizontal:10}}>{item.mobile}</Text>
              
              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  height: 40,
                  width: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  position: 'absolute',
                  right:5,

                }}
                onPress={()=>{deleteContact(index)}}
                >
                <Text style={{color: '#ffffff', fontWeight: 'bold',}}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />


      <TouchableOpacity
        style={{
          width: '45%',
          height: 50,
          borderRadius: 30,
          backgroundColor: '#000000',
          position: 'absolute',
          bottom: 30,
          right: 20,
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('AddContact');
        }}>
        <Text style={{color: '#ffffff', alignSelf: 'center'}}>
          Add New Contact
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '30%',
          height: 50,
          borderRadius: 30,
          backgroundColor: '#000000',
          position: 'absolute',
          bottom: 30,
          left: 20,
          justifyContent: 'center',
        }}
        onPress={() => {
          logout();
        }}>
        <Text style={{color: '#ffffff', alignSelf: 'center'}}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
