import React from "react";
import { Image,ScrollView,TouchableOpacity,TextInput, StyleSheet, Text,  View,} from "react-native";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "firebase/auth";
import { firebaseConfig } from "../../Config/firebaseConfig";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import RegisterScreen from "./RegisterScreen";



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
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../img/cafeLog.png")} />
         <View>
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
          </View>
          <TouchableOpacity onPress={handleSingIn} style={styles.button}>
            <Text style={styles.textInput2}>Login</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Registro')} style={styles.button}>
            <Text style={styles.textInput2}>Registro</Text>
          </TouchableOpacity>
        </View>
  
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
      },
    image: {
        width:'45%',
        height:'38%',
        resizeMode: "cover",
      },
    input: {
      width: 250,
      height: 50,
      marginVertical: 10,
      padding: 10,
      borderWidth:2,
      borderColor: "#451717",
      borderRadius: 10,
      backgroundColor: "#fff",
    },
    textInput: {
      fontSize: 17,
      fontWeight: "400",
      color: "#696969",
    },
    textInput2: {
      fontSize: 20,
      fontWeight: "400",
      color: "#f1f1f1",
    },
    button: {
      width: 250,
      height: 40,
      borderRadius: 10,
      backgroundColor: "#451717",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10,
      color: '#fafafa',
    },

})