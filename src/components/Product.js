import React from "react";
import db from '../Config/firebaseConfig'
import {deleteDoc, doc, updateDoc} from 'firebase/firestore';
import { View ,Text,StyleSheet}  from 'react-native'; 

export default function Product({
    id,
    nombre,
    sabor,
    precio,
    categoria,
    createAt,
    
}) {
    return (
        <View style={styles.container}>

            <View style={styles.card}>
            
            <Text>{categoria}</Text>           
            <Text>{nombre}</Text>
            <Text>{sabor}</Text>
            <Text>{precio}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
 container:{
        flex:1,
        backgroundColor: '#533900',
        flexDirection: 'row',
        borderRadius: 10,
       

 },
 card:{
    width: '45%',
    height:300,
    backgroundColor: '#fff',
    flexDirection: 'column',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 15,
    padding: 10,
 }

})
