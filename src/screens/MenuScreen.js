import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import data from '../data/data';
import Items from '../components/Items';

const MenuScreen = () => {
  return (
    <FlatList 
       data={data}
       renderItem={({item:props})=>(
           <Items {...props}/>
       )}
       />
   );
}

export default MenuScreen

const styles = StyleSheet.create({})