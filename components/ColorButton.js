import React from "react";
import { Text, View, StyleSheet,TouchableHighlight } from "react-native";


function ColorButton({ backgroundColor, onPress= f => f }){
    return (
        <TouchableHighlight 
            style={styles.button}
            onPress={ ()=> onPress(backgroundColor)}
            underlayColor="orange"
        >
        <View style={styles.row}>
            <View style={[styles.sample,{ backgroundColor }]}/>
            <Text style={styles.bottonText}>{ backgroundColor }</Text>
        </View>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    button: {
      margin: 10,
      padding: 10,
      borderWidth: 2,
      borderRadius: 5,
      width: 300,
      backgroundColor: "rgba(255,255,255,.8)"
    },
    bottonText: {
      fontSize: 30,
      textAlign: 'center'
    },
    sample: {
      height: 20,
      width: 20,
      borderRadius: 10,
      backgroundColor: 'white',
      margin: 5
    },
    row :{
      flexDirection: 'row',
      alignItems: "center",
    }
});


export default ColorButton;