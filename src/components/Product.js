import React from "react";
import db from '../Config/firebaseConfig'
import {deleteDoc, doc, updateDoc} from 'firebase/firestore';
import { View ,Text}  from 'react-native'; 

export default function Product({
    id,
    nombre,
    sabor,
    precio,
    categoria,
    createAt,
    
}) {
    return (
        <View>
            <Text>{categoria}</Text>           
            <Text>{nombre}</Text>
            <Text>{sabor}</Text>
            <Text>{precio}</Text>
        </View>
    )
}

