import React from "react";
import {View, Image, StyleSheet, Text} from 'react-native';


const Items = (props) => (
    <View key={props.nombre} style={styles.container}>
     <View style={styles.cont}>
         <Image source={{uri:props.img}}style={styles.image} />
     </View>
     <View style={styles.cont2}>
  <Text style={styles.textInput}>Nombre: {props.nombre}</Text>
  <Text style={styles.textInput}>Sabor: {props.sabor} </Text>
  <Text style={styles.textInput}> Precio:$ {props.precio}</Text>
     </View>
    
    </View>
  );
export default Items

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'oldlace',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 5,
        marginVertical: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 5,
       
      },
      cont: {
width:"30%",
padding: 3,
      },
      cont2 :{
        width: "70%",
      },
    image: {
        width:100,
        height:100,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#f2f2f2', 
        shadowOpacity: 0.5,
        shadowColor: '#451747',
        },
    textInput: {
        fontSize: 17,
        fontWeight: "600",
        color: "#451717",
    },
   
   

})