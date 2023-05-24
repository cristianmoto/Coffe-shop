import { StyleSheet,Button,  TouchableOpacity, Text, View,  FlatList,  Image,} from "react-native";
import React from "react";
import data from "../data/data";
import Items from "../components/Items";
import { useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const MenuScreen = () => {
  const [visibleItems, setVisibleItems] = useState(5);
  const [myData, setMyData] = useState(data.slice(0, visibleItems));

  const cargarMasElementos = () => {
    const newVisibleItems = visibleItems + 5;
    setMyData(data.slice(0, newVisibleItems));
    setVisibleItems(newVisibleItems);
  };


  return (
    <View style={styles.container} > 
    <Image
      style={styles.image}
      source={require("../screens/img/coffee.webp")}
    />
      <FlatList
        data={myData}
        renderItem={({ item: props }) => <Items {...props} />}
          keyExtractor={(Items, index) => index.toString()}
      />
     
      <TouchableOpacity onPress={cargarMasElementos} style={styles.button}>
                        <MaterialCommunityIcons name="plus" color={"#fff"} size={30} />
              </TouchableOpacity>
    </View>
  );


}
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
}
})
