import { StyleSheet,Button,  TouchableOpacity, Text, View,  FlatList,  Image,} from "react-native";
import React, { useEffect } from "react";
import data from "../data/data";
import Items from "../components/Items";
import { useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import db from '../Config/firebaseConfig';
import {querySnapshot, collection, doc, onSnapshot, orderBy, query} from 'firebase/firestore';
import Product from '../components/Product';

const MenuScreen = () => {
  const navigation = useNavigation();

  const [mercaderia, setMercaderia] = useState ([]);

  useEffect (()=>{
    const collectionRef = collection(db, 'articulos');
    const q = query(collectionRef, orderBy ('categoria','asc'));

    const unsuscribe =onSnapshot (q, querySnapshot=> {
      setMercaderia(
        querySnapshot.docs.map (doc =>({
          id: doc.id,
          nombre: doc.data().nombre,
          sabor: doc.data().sabor,
          precio:doc.data().precio,
          categoria: doc.data().categoria,
          createdAt: doc.data().createdAt,
        })
        ))
    })
    return unsuscribe;
  },[])

 {/* const [visibleItems, setVisibleItems] = useState(5);
  const [myData, setMyData] = useState(data.slice(0, visibleItems));

  const cargarMasElementos = () => {
    const newVisibleItems = visibleItems + 5;
    setMyData(data.slice(0, newVisibleItems));
  setVisibleItems(newVisibleItems);*/}
 


  return (

    <View style={styles.container}>
      <Text style={styles.textInput}>Productos</Text>
      {mercaderia.map(producto=> <Product key={producto.id}{...producto} /> )}
    </View>
     );
    };
   
 



export default MenuScreen;


const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "20%",
  },
  container: {
    flex:1,
    marginBottom: 20,
    marginHorizontal:5,
 
  },
  button:{
    width: 40,
    height: 40,
    backgroundColor:"#451717",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:"45%",
    borderRadius:25,
  },
  textInput: {
    justifyContent:'center',
    alignSelf: 'center',
    alignItems:'center',
    fontSize: 30,
    fontWeight: "600",
    color: "gray",
  },
})
