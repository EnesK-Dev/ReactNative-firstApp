import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="rgba(255,164,7,1)" /> /
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  )
}

export default Loading;

const styles = StyleSheet.create({
  loadingText:{
    fontWeight:'bold',
  }
})