import React, { useState } from "react";
import { Text, View, StyleSheet,TouchableHighlight } from "react-native";
import ColorButton from './components/ColorButton';



export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("green");
 
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ColorButton backgroundColor="red" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="blue" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="green" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="yellow" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="purple" onPress={setBackgroundColor}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
});
