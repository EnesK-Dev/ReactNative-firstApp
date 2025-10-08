import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import Loading from '../components/Loading';

const Login=({navigation})=> {

  const [isLoading, setisLoading] = useState(false)

  return (
    <View style={styles.container}>

      <Image 
      style={styles.image}
      source={require('../../assets/loginIcon.png')}/>
      <Text style={styles.welcome}>Welcome </Text>

      <Text>Email</Text>
      <TextInput
        placeholder='Enter Your Email'
        style={styles.textEdit}
      />

      <Text>Pasword</Text>
      <TextInput
        secureTextEntry={true}
        placeholder='Enter Your Pasword'
        style={styles.textEdit}
      />

      <Pressable
        style={styles.buttonStyle}
        onPress={() => setisLoading(true)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>


      <Pressable
        style={[styles.signButtonStyle]}
        onPress={() => navigation.navigate('Sign')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
      {isLoading ? <Loading changeIsLoading={()=>setisLoading(false)}/> : null}
    </View>
  );
}


export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textEdit: {
    borderColor: 'black',
    width: '70%',
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center'
  },
  buttonStyle: {
    borderWidth: 1,
    width: '70%',
    height: 40,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  image:{
    width:100,
    height:100,
    
  },
  welcome:{
    fontWeight:'bold',
    fontSize:30,
    marginBottom:20,
  },
  signButtonStyle:{
    borderWidth: 0,
    width: '20%',
    height: 40,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
    backgroundColor:'grey'
  }

});
