import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TextInputs() {
  const [data, setData] = useState('');
  const [storedData, setStoredData] = useState([]);

  let names: any = [];

  const saveData = async () => {
    names.push(data);
    try {
      await AsyncStorage.setItem('Data', JSON.stringify(data));
      console.log('Saved');
    } catch (e) {
      // save error
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
      // save error
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



  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
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
