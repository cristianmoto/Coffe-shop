import { StyleSheet, Text, View ,ScrollView, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../Config/firebaseConfig';


    const RegisterScreen = () => {


        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [username, setUsername]= useState ("");
        const [phone, setPhone]= useState ("");
        const navigation = useNavigation();
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        const handleCreateAccount = () => {
            createUserWithEmailAndPassword(auth, email, password, username, phone)
              .then((userCredential) => {
                console.log("cuenta creada");
                const user = userCredential.user;
                console.log(user);
                navigation.navigate('Login');
                alert: ('Usuario creado');
              })
              .catch((error) => {
                console.log(error);
              });
          };
          return (
            <View style={styles.container}>
             
              <ScrollView
                contentContainerStyle={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={styles.login}>
                 
                  <View>
                    <Text style={styles.textInput}>Usuario</Text>
                    <TextInput
                      onChangeText={(text) => setUsername(text)}
                      style={styles.input}
                      placeholder="usuario"
                    ></TextInput>
                    <Text style={styles.textInput}>Password </Text>
                    <TextInput
                      onChangeText={(text) => setPassword(text)}
                      style={styles.input}
                      placeholder="password"
                      secureTextEntry={true}
                    ></TextInput>
                      <Text style={styles.textInput}>Mail</Text>
                    <TextInput
                      onChangeText={(text) => setEmail(text)}
                      style={styles.input}
                      placeholder="email"
                    ></TextInput>
                      <Text style={styles.textInput}>Telephone</Text>
                    <TextInput
                      onChangeText={(text) => setPhone(text)}
                      style={styles.input}
                      placeholder="telefono"
                    ></TextInput>
                  </View>
                 
                  <TouchableOpacity onPress={handleCreateAccount} style={styles.button}>
                    <Text style={styles.textInput2}>Registro</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          );
      };


export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
      },
    image: {
        width:'40%',
        height:'40%',
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