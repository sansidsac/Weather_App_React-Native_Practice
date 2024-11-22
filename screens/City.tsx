import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})
const City = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>City</Text>
    </SafeAreaView>
  )
}

export default City