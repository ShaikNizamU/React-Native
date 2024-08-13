import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.warn(email, password);
  };

  return (

    <View style={styles.container}>
       {/* <Button title='Home' onPress={() => navigation.navigate("Home")}/> */}
      <Text
        style={{
          marginBottom: 5,
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Register
      </Text>
      <TextInput
        onChangeText={setEmail}
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        onChangeText={setPassword}
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <Button onPress={handleRegister} title="Register" />
      <Text style={{marginTop: 10}}>
        Already have an Account?{' '}
        <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
          Login here
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight,
  },
  input: {
    borderWidth: 0.5,
    borderColor: 'gray',
    width: 200,
    marginVertical: 7,
    padding: 5,
  },
});
