import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Interface/types';

type MenuScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Home = (props: MenuScreenProps) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Touchable')}>
        <Text style={styles.text}>Touchable</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('FlatList')}>
        <Text style={styles.text}>FlatList</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('TextInput')}>
        <Text style={styles.text}>TextInput</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('FlatList')}>
        <Text style={styles.text}>FlatList</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Todo')}>
        <Text style={styles.text}>Todo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Notifications')}>
        <Text style={styles.text}>Notifications</Text>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  btn: {
    backgroundColor: '#000000',
    margin:10,
    width:250,
    padding:10,
    borderRadius:10,
    alignItems:'center',
  },
  text:{
    color:'#ffffff'
  }
});

export default Home;
