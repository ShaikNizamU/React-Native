import { StyleSheet, TextInput, View, Text } from "react-native";
import React, {useState} from "react";

export default function TextInputs() {

  const [text, setText] = useState("")
  
  return(
    <View style={styles.container}>
      <TextInput onChangeText={ (gettingText) => {setText(gettingText)}} placeholder="Type something"  />
      <Text>{text}</Text>
    </View>
  )

}



const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems: "center",
  }
})