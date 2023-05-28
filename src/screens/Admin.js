import { Alert, StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { addDoc, collection } from 'firebase/firestore'
import db from '../Config/firebaseConfig'
import { useNavigation } from '@react-navigation/native'



const Admin = () => {
  
    const [newItem, SetNewItem] = useState({
        id:'',
        nombre: '',
        sabor:'',
        precio:'',
        categoria: '',
        createdAt : new Date(),
    })
    const showAlert = () =>
    Alert.alert(
      'Proceso',
      'carga realizada',
      [
        {
          text: 'ok',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'default',
        },
      ],
     
    );
    const navigation = useNavigation();
    
    const onSend = async ()=>{
        await addDoc (collection(db,'articulos'), newItem);
       showAlert();
       
    }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Articulos</Text>
      <Text>{newItem.nombre}</Text>
      <TextInput style={styles.input} onChangeText={(text)=> SetNewItem({...newItem, categoria:text})} placeholder='Categoria '/>
      <TextInput style={styles.input} onChangeText={(text)=> SetNewItem({...newItem, nombre:text})} placeholder='Nombre '/>
      <TextInput style={styles.input} onChangeText={(text)=> SetNewItem({...newItem, sabor:text})} placeholder='Sabor '/>
      <TextInput style={styles.input} onChangeText={(text)=> SetNewItem({...newItem, precio:text})} placeholder='$ precio' keyboardType='number-pad'/>
      <TouchableOpacity onPress={onSend} style={styles.button}>
            <Text style={styles.textInput2}>Agregar</Text>
          </TouchableOpacity>
     
    </View>
  )
}

export default Admin

const styles = StyleSheet.create({
    container: {
       
        flex: 1,
      backgroundColor: '#f2f2f2',
  
   },
   texto:{
    fontSize: 20,
    fontWeight: "400",
    color: "#000",
    alignItems: 'center',
     justifyContent: 'center',
    marginHorizontal: '40%',
     
   },
      contenedor:{
  
        marginVertical:50,
        alignItems: 'center',
        justifyContent:'center',
      },
    image: {
      flex:1,
     
       resizeMode: 'cover',
       
      },
    input: {
      width: '95%',
      height: 50,
      marginVertical: 10,
      marginHorizontal:10,
      padding: 5,
      borderWidth:1,
      borderColor: "#451717",
      borderRadius: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      color: 'white',
      fontSize: 20,
      fontWeight: "600",
    },
    textInput: {
      justifyContent:'flex-start',
      fontSize: 20,
      fontWeight: "600",
      color: "#fff",
    },
    textInput2: {
      fontSize: 20,
      fontWeight: "400",
      color: "#f1f1f1",
    },
    button: {
      marginVertical:10,
      alignSelf:'center',
      width: 250,
      height: 40,
      borderRadius: 10,
      backgroundColor: 'rgba(44, 33, 30, 0.8)',
      alignItems: "center",
      justifyContent: "center",
      
      color: '#fafafa',
    },
  
  })