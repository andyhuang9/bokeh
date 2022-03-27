import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput,TouchableOpacity, Image } from 'react-native';

function Login({navigation}) {
   
    return (
      <View style={styles.container}>

        <Image style={styles.image} source={require("../../assets/logo-nobackground.png")} />

        <TouchableOpacity style={styles.loginBtn} onPress={() =>
        navigation.navigate('Home')}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
  () => {<component></component>}
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      width: "80%",
      margin: 10,
      resizeMode: "contain",
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FFA500",
    },
  });
  

export default Login;