import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import React from 'react'
import { Pressable } from 'react-native';

const Loading = (props) => {
  return (
    <View style={styles.container}>
      <Pressable 
      style={styles.closeButton}
      onPress={()=> props.changeIsLoading()}>
      <Text style={styles.closeText}>x</Text>
      </Pressable>
      <ActivityIndicator size="large" color="rgba(255,164,7,1)" /> 
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  )
}

export default Loading;

const styles = StyleSheet.create({
  loadingText:{
    fontWeight:'bold',
    fontSize:20
  },
  container:{
    flex:1,
    position:'absolute',
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%'
  },
  closeText:{
    fontWeight:'bold',
    color:'white',
    fontSize:15
  },
  closeButton:{
    width:40,
    height:40,
    borderRadius:50,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:50,
    right:30
  }
})