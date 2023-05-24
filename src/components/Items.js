import React from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';


const Items = (props) => (



<View key={props.nombre} style={styles.container}>
  
  
    <View style={styles.cont}>
    <TouchableOpacity>
      <Text style={styles.textInput}>Nombre: {props.nombre}</Text>
      <Text style={styles.textInput}>Sabor: {props.sabor} </Text>
      <Text style={styles.textInput}>Precio:$ {props.precio}</Text>
      </TouchableOpacity>
    </View>
  </View>
);
export default Items

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'gray',
        borderRadius: 5,
        borderBottomColor: 'gray',
        marginVertical: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 5,
       
      },
      cont: {
width:"90%",
padding: 3,
      },
     
    textInput: {
        fontSize: 20,
        fontWeight: "600",
        color: "#000",
    },
   
   

})