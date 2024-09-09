import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function TextInputs({route}) {
  const [receive,setReceive] = useState(route.params?.pass || '')
  const [inputText, setInputText] = useState('');
  
  const [data, setData] = useState('');
  const [storedData, setStoredData] = useState([]);


  useFocusEffect(
    useCallback(() => {
      if (route.params?.pass) {
        setReceive(route.params.pass);
      }
    }, [route.params?.pass])
  );


  let names: any = [];

  const saveData = async () => {
    names.push(data);
    try {
      await AsyncStorage.setItem('Data', JSON.stringify(data));
      console.log('Saved');
    } catch (e) {
      console.log(e)
    }
  };

  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem('Data');
      if (name !== null) {
        setStoredData(JSON.parse(name));
      } else {
        setStoredData([]);
      }
      console.log('name: ' + name);
    } catch (e) {
      console.log(e)
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('Data');
      setStoredData([])
      console.log("Removed")
    } catch (e) {

    }
  };


  const handleTextInputChange = (text) => {
    setInputText(text); // Update TextInput state
    setReceive(text); // Update receive state for displaying in Text component
  };

  // const passDataBack = () => {
  //   navigation.navigate('PreviousScreenName', {updatedData: recieve}); // Replace 'PreviousScreenName' with your screen name
  // };


  return (

    <View  style={styles.container}>

      {/* Tesing data */}
      <View style={styles.container}>
        <Text style={{color:"#000", fontSize:18, fontWeight:"bold"}}>Data Passing between Screens</Text>
        <Text>Parent Data: {receive}</Text>
        <TextInput 
          style={styles.input}
          placeholder="Update name"
          value={inputText}
          onChangeText={handleTextInputChange}
        />
        {/* <Button 
          title='pass to parent'
          // onPress={passDataBack}
        /> */}
      </View>


      {/* Asynch Storage */}
      <View style={styles.container}>
      <Text style={{color:"#000", fontSize:18, fontWeight:"bold"}}>AsyncStorage</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={data}
          onChangeText={text => setData(text)}
        />

        <Text>{storedData}</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            saveData();
          }}>
          <Text style={styles.text}>Save Data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            getData();
          }}>
          <Text style={styles.text}>Get Data</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => removeData()}>
          <Text style={styles.text}>Remove Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    marginVertical: 10,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
  },
  text: {
    color: '#ffffff',
  },
});
