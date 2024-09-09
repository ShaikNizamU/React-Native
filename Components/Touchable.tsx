import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Toast from 'react-native-simple-toast';
import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;


export default function Touchable() {

  const [count, setCount] = useState(0);
  const [backColor, setBackColor] = useState('green')

  const showToast = (message:string) => {
	Toast.show(message, Toast.SHORT)
  }


  return (

    <View style={[styles.container, {backgroundColor:backColor}]}>


      <Text style={{fontSize: 24, fontWeight: 'bold'}}>count: {count}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (count < 5) {
            setCount(count + 1);
            setBackColor('green')
          }else{		
            	showToast('Maximum count reached');
              setBackColor('red')
		      }
        }}>
        <Text style={styles.buttonText}>INCREASE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (count > 0) {
            setCount(count - 1);
            setBackColor('green')

          }else{
              showToast('Minimum count reached');
              setBackColor('red')
          }
        }}>
        <Text style={styles.buttonText}>DECREASE</Text>
      </TouchableOpacity>
      
    </View>
 

  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    height:screenHeight,
    justifyContent:'center',
    alignItems:"center",

  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
