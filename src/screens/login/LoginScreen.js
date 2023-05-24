import React from "react";
import {TouchableOpacity,TextInput, StyleSheet, Text,  View,ImageBackground} from "react-native";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,} from "firebase/auth";
import { firebaseConfig } from "../../Config/firebaseConfig";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";



const LoginScreen = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

 
  const handleSingIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("sesion iniciada");
        const user = userCredential.user;
        console.log(user);
       navigation.navigate('Menu');
       const { displayName } = userCredential.user;
       setUserName(displayName);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../img/cafeteria_login2.jpg')}  style={styles.image}>

  
     
         <View style={styles.contenedor}>
            <Text style={styles.textInput}>Mail</Text>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              placeholder="email"
            ></TextInput>
            <Text style={styles.textInput}>Password </Text>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              placeholder="password"
              secureTextEntry={true}
            ></TextInput>
         
          <TouchableOpacity onPress={handleSingIn} style={styles.button}>
            <Text style={styles.textInput2}>Login</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Registro')} style={styles.button}>
            <Text style={styles.textInput2}>Registro</Text>
          </TouchableOpacity>
          </View >
          </ImageBackground>
        </View>
  
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
       
        flex: 1,
        backgroundColor: '#f2f2f2',
     
      },
      contenedor:{

        marginVertical: 170,
        alignItems: 'center',
        justifyContent:'center',
      },
    image: {
      flex:1,
     
       resizeMode: 'cover',
       
      },
    input: {
      width: 250,
      height: 50,
      marginVertical: 10,
      padding: 10,
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
      width: 250,
      height: 40,
      borderRadius: 10,
      backgroundColor: 'rgba(44, 33, 30, 0.8)',
      alignItems: "center",
      justifyContent: "center",
      
      color: '#fafafa',
    },

})