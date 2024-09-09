import React, { useEffect, useState } from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

const App = ({navigation}) => {
  const [pass,setPass] = useState('')


  const data = [
    {id: '1', title: 'Item 1'},
    {id: '2', title: 'Item 2'},
    {id: '3', title: 'Item 3'},
    {id: '4', title: 'Item 4'},
  ];

  const renderItem = ({item}: {item: {id: string; title: string}}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );


  return (
    <View style={styles.container}>

      
      <Text style={{color:"#000", fontSize:18, fontWeight:"bold"}}>Data Passing between Screens</Text>
      <TextInput 
        style={styles.input}
        placeholder='pass data'
        value={pass}
        onChangeText={text => setPass(text)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('TextInput', {pass});
        }}>
        <Text style={{color: '#ffffff'}}>Pass to child</Text>
      </TouchableOpacity>


      <Text style={{color:"#000", fontSize:18, fontWeight:"bold", marginTop:20, }}>Flatlist</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
  },
  title: {
    fontSize: 24,
  },
  btn: {
    backgroundColor: '#000000',
    margin: 10,
    width: 250,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
