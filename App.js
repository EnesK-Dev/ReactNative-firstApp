import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import Loading from './src/components/Loading';

export default function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState('');

  return (
    <View style={styles.container}>

      <Image 
      style={styles.image}
      source={require('./assets/loginIcon.png')}/>
      <Text style={styles.welcome}>Welcome {result}</Text>

      <Text>Email</Text>
      <TextInput
        placeholder='Enter Your Email'
        style={styles.textEdit}
        onChangeText={setName}
      />

      <Text>Pasword</Text>
      <TextInput
        secureTextEntry={true}
        placeholder='Enter Your Pasword'
        style={styles.textEdit}
        onChangeText={setLastName}
      />

      <Pressable
        style={styles.buttonStyle}
        onPress={() => setResult(name + ' ' + lastName)}
      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
      <Loading/>
    </View>
  );
}

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
    height: 30,
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
  }

});
