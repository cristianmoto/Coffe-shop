import { StyleSheet, TouchableOpacity, View, FlatList, Image } from 'react-native'
import React from 'react'
import data from '../data/data';
import Items from '../components/Items';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const MenuScreen = () => {
  return (
 <View>
    <Image style={styles.image} source={require("../screens/img/coffee.webp")} />
    
  
  <FlatList 
 
       data={data}
       renderItem={({item:props})=>(
           <Items {...props}/>
       )}
       />
      
        </View>   
   );
}

export default MenuScreen

const styles = StyleSheet.create({
  image: {
    width:'100%',
    height:'20%',
  
  },
})